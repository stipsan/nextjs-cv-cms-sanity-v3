// import * as esbuild from 'https://deno.land/x/esbuild@v0.14.45/mod.js'
// import * as esbuild from './node_modules/esbuild-wasm/esm/browser.min.js'
import * as esbuild from 'esbuild-wasm/esm/browser.min.js'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  try {
    // @ts-ignore
    console.log(esbuild)
  } catch {
    // ignore
  }
  const { searchParams } = new URL(req.url)

  return new Response(
    `// Generated ${new Date().toJSON()}
export function fromPalette() {
  console.log('Hello from palette!')
}
`,
    {
      status: 200,
    }
  )
}
