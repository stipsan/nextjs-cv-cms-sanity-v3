// @ts-check
// Builds the utils used by edge APIs, which are super fast but severely limited and can't use most node modules directly
// I've already tried to run esbuild-wasm on the edge but I failed in the end with a
/*
[Error: panic: interface conversion: interface {} is map[string]interface {}, not []interface {}

debug.Stack (runtime/debug/stack.go:24)
helpers.PrettyPrintedStack (internal/helpers/stack.go:9)
main.(*serviceType).handleIncomingPacket.func1 (cmd/esbuild/service.go:220)
panic (runtime/panic.go:838)
main.(*serviceType).handleTransformRequest (cmd/esbuild/service.go:924)
main.(*serviceType).handleIncomingPacket (cmd/esbuild/service.go:236)
main.runService.func3 (cmd/esbuild/service.go:163)
created by main.runService (cmd/esbuild/service.go:162)]
*/
// Maybe revisit this later if it becomes possible to run something like esbuild on the edge
// https://github.com/stipsan/cv.cocody.dev/commit/afef6d2f2b96d38b402bc697b2191055f1a47bac#diff-fccff48487849dc062605deb0ddfffdc8702c1c90fdd65f22b257b69b254edb1

// @TODO use stdout instead of using a temp file as proxy

import esbuild from 'esbuild'
import { replace } from 'esbuild-plugin-replace'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const resolveDir = path.resolve(fileURLToPath(import.meta.url), '../..')
/**
 * @type {import('esbuild').BuildOptions}
 **/
const _defaults = {
  bundle: true,
  format: 'esm',
  minifySyntax: true,
  outExtension: { '.js': '.mjs' },
  // external: ['@sanity/color'],
  /*
    external: [
      'react',
      'react-is',
      'shallowequal',
      '@emotion/stylis',
      '@emotion/unitless',
      '@emotion/memoize',
      'styled-components',
      'object-assign',
      'prop-types',
      'xtend',
      'property-information',
      'hast-util-parse-selector',
    ],
    // */
  // sourcemap: true,
  // splitting: true,
}
/**
 * @type {import('esbuild').BuildOptions}
 **/
const browserDefaults = {
  ..._defaults,
  // Target browsers that can use dynamic imports
  // https://caniuse.com/es6-module-dynamic-import
  target: ['chrome63', 'firefox67', 'safari11'],
  platform: 'browser',
  // minify: true,
  // @TODO figure out how to support source maps
  // sourcemap: 'external',
}
let target = 'node16'
try {
  const major = process.version.replace(/^v/, '').split('.')[0]
  target = `node${major}`
  console.log(`Detected ${target}`)
} catch {
  console.log(`Failed to detect node version, setting target to ${target}`)
}
/**
 * @type {import('esbuild').BuildOptions}
 **/
const nodeDefaults = {
  ..._defaults,
  target,
  platform: 'node',
}

const buildDefaultTheme = async () => {
  // Re-export the default theme but without the color property
  // This is necessary due to dead-code-elimination/tree-shaking not being fully implemented
  return esbuild.build({
    ...browserDefaults,
    // Don't minify due to source maps
    // minify: false,
    outfile: path.resolve(resolveDir, 'blazing-utils/defaultStudioTheme.mjs'),
    stdin: {
      contents: `
export { studioTheme } from './node_modules/@sanity/ui/src/theme/studioTheme/theme.ts'
`,
      resolveDir,
    },
    plugins: [
      replace({
        include: /@sanity\/ui\/src\/theme\/studioTheme\/theme\.ts$/,
        delimiters: ['', ''],
        values: {
          'color,': '',
        },
      }),
    ],
  })
}

// import React from 'react'

const buildTemplateString = async () => {
  // Debug help, pin-point where the bloat comes from
  // /*
  await esbuild.build({
    ...browserDefaults,
    entryPoints: [
      path.resolve(resolveDir, 'utils/applyHues'),
      path.resolve(resolveDir, 'utils/color-fns'),
      path.resolve(resolveDir, 'utils/colors'),
      path.resolve(resolveDir, 'utils/createTonesFromHues'),
      path.resolve(resolveDir, 'utils/getColorHex'),
    ],
    outdir: path.resolve(resolveDir, 'blazing-utils'),
  })
  // */

  return esbuild.build({
    ...browserDefaults,
    outfile: path.resolve(resolveDir, 'blazing-utils/themeFromHues.mjs'),
    stdin: {
      contents: `
import {studioTheme as defaultStudioTheme} from 'blazing-utils/defaultStudioTheme.mjs'
import {themeFromHues} from 'utils/themeFromHues'
import {
  multiply as _multiply,
  parseColor,
  rgbToHex,
  screen as _screen,
  rgba,
} from './node_modules/@sanity/ui/src/theme/lib/color-fns/index.ts'
import {createColorTheme} from './node_modules/@sanity/ui/src/theme/lib/theme/color/factory.ts'

function multiply(bg, fg) {
  const b = parseColor(bg)
  const s = parseColor(fg)
  const hex = rgbToHex(_multiply(b, s))

  return hex
}

function screen(bg, fg) {
  const b = parseColor(bg)
  const s = parseColor(fg)
  const hex = rgbToHex(_screen(b, s))

  return hex
}

export const studioTheme = themeFromHues({
  hues: process.env.__HUES__, 
  studioTheme: defaultStudioTheme,
  multiply,
  screen,
  rgba,
  createColorTheme,
})
`,
      resolveDir,
    },
    target,
    /*
    external: [
      'react',
      'react-is',
      'shallowequal',
      '@emotion/stylis',
      '@emotion/unitless',
      '@emotion/memoize',
      'styled-components',
      'object-assign',
      'prop-types',
      'xtend',
      'property-information',
      'hast-util-parse-selector',
      'react-refractor',
      'scheduler',
      'react-dom',
      'react-fast-compare',
    ],
    // */
  })
}

const buildThemeFromHuesTemplate = async () => {
  const prebuiltFromEsbuild = await fs.readFile(
    path.resolve(resolveDir, 'blazing-utils/themeFromHues.mjs'),
    'utf8'
  )

  return esbuild.build({
    ...nodeDefaults,
    outfile: path.resolve(
      resolveDir,
      'blazing-utils/themeFromHuesTemplate.mjs'
    ),
    stdin: {
      contents: `
export function themeFromHuesTemplate(hues) {
  return "// Generated " + new Date().toJSON() + "\\n" + ${JSON.stringify(
    prebuiltFromEsbuild
  )}.replace(
    'process.env.__HUES__',
    JSON.stringify(hues)
  )
}
`,
      resolveDir,
    },
  })
}

// Prepare the default studio theme in a way that is dead code eliminated
await buildDefaultTheme()

// Start by building the contents of the template string
await buildTemplateString()

// Now we build the util used by the edge APIs
await buildThemeFromHuesTemplate()
