// @ts-check
// Builds the other scripts making them blazing and allowing them to be cached without node_modules, speeding up GH actions hot starts

// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import esbuild from 'esbuild'
import alias from 'esbuild-plugin-alias'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

let target = 'node16'
try {
  const major = process.version.replace(/^v/, '').split('.')[0]
  target = `node${major}`
} catch {
  console.log(`Failed to detect node version, setting target to ${target}`)
}

/*
await esbuild.build({
  target,
  entryPoints: ['puppeteer-core'],
  bundle: true,
  platform: 'node',
  outfile: 'blazing-scripts/puppeteer-core.mjs',
  format: 'esm',
})
// */

await esbuild.build({
  target,
  entryPoints: ['scripts/createSocialImage.ts'],
  bundle: true,
  platform: 'node',
  outdir: 'blazing-scripts',
  // outExtension: { '.js': '.mjs' },
  // external: ['url', '@sanity/client'],
  // sourcemap: true,
  // splitting: true,
  // minify: true,
  plugins: [
    alias({
      'puppeteer-core': require.resolve('puppeteer-core'),
    }),
    // NodeModulesPolyfillPlugin(),
    /*
      NodeGlobalsPolyfillPlugin({
        process: true,
        buffer: true,
      }),
      // */
  ],
  // format: 'esm',
})
/*
  .catch((error) => {
    console.error(error)
    process.nextTick(() => process.exit(1))
  })
  // */
