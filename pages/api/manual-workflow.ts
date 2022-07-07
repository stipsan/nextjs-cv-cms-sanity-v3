import type { NextRequest } from 'next/server'

import { github } from '../../env.config.mjs'

export const config = {
  runtime: 'experimental-edge',
}

const handler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  if (secret !== process.env.WORKFLOW_DISPATCH_SECRET) {
    return new Response('', {
      status: 403,
    })
  }

  const res = await fetch(
    `https://api.github.com/repos/${github.repository}/actions/workflows/manual.yml/dispatches`,
    {
      method: 'POST',
      headers: {
        accept: 'application/vnd.github+json',
        authorization: `token ${github.token}`,
      },
      body: JSON.stringify({
        ref: github.ref,
        inputs: { name: 'Edge' },
      }),
    }
  )

  if (res.status !== 204) {
    console.log(
      `https://api.github.com/repos/${github.repository}/actions/workflows/manual.yml/dispatches`
    )
    throw new Error(
      `Failed to trigger manual workflow: ${res.status} ${
        res.statusText
      } ${await res.text()}`
    )
  }

  return new Response(
    JSON.stringify({
      message: 'Fired GitHub manual workflow from the Edge! 🎉',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}

export default handler
