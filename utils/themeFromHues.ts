import { type StudioTheme } from 'sanity'
import { applyHues } from 'utils/applyHues'
import { createTonesFromHues } from 'utils/createTonesFromHues'
import type { Hues } from 'utils/types'

interface Options {
  hues: Hues
  // if there's a color property on the studioTheme it will be overridden/ignored, thus we change the typing allowing it to be omitted
  // but at the same time not _enforcing_ it to be omitted and create unnecessary TS errors for those passing `import {studioTheme} from '@sanity/ui'` directly
  studioTheme: Omit<StudioTheme, 'color'> & { color?: unknown }
}

export function themeFromHues({
  hues: _hues,
  studioTheme,
}: Options): StudioTheme {
  const hues = applyHues(_hues)
  const tones = createTonesFromHues(hues)
  console.warn('themeFromHues', _hues, hues, tones)

  // These variables are made top-level to keep the body of createColorTheme largely the same.
  // This makes it much easier to sync it with new releases of @sanity/ui should its implementation details change.
  const black = { title: 'Black', hex: hues.default.darkest }
  const white = { title: 'white', hex: hues.default.lightest }

  const color = {} as StudioTheme['color']

  return { ...studioTheme, color }
}

// const { fromPalette }

/*

Usage scenarios:
import {studioTheme} from 'https://themer.creativecody.dev/api/image?url=https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg'
import {studioTheme} from 'https://themer.creativecody.dev/api/image/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg'
// Default theme minimal URL (all these are optional and can be omitted)
import {studioTheme} from 'https://themer.creativecody.dev/api/hues?default=8690a0&primary=2276fc&transparent=8690a0&positive=43d675;400&caution=fbd024;300&critical=f03e2f;700'
// Changing the darkest and lightest colors for all colors
import {studioTheme} from 'https://themer.creativecody.dev/api/hues?lightest=e6e6e6&darkest=000000'
// Changing the darkest color for critical, and lightest for caution
import {studioTheme} from 'https://themer.creativecody.dev/api/hues?caution=lightest:f8df79&critical=darkest:351716'
// Changing just the midPoint for primary (darker blue)
import {studioTheme} from 'https://themer.creativecody.dev/api/hues?primary=400'

The API needs to return something like this when /api/hues?default=596a91&primary:400
```
???

export const studioTheme = themeFromHues({
  default: { mid: '#596a91' },
  primary: { midPoint: 400 },
})
```
// To do that the API needs to:
```
import {respondThemeFromHues} from ???

async function handler() {
  const {searchParams} = new URL(req.url)
  const input = {default: searchParams.get('default), primary: searchParams.get('primary'), ...}
  return new Response(
    respondThemeFromHues(input),
    {headers: {'content-type': 'application/javascript; charset=utf-8'}})
}
```
respondThemeFromHues:
```
export const respondThemeFromHues = (input) => {
  const {default = "596a91", primary = '400, ...} = input

  const defaultHue = parseHue(default) // { mid: '#596a91' }
  const primaryHue = parseHue(primary) // { midPoint: 400 }

  const prebuiltFromEsbuild = `// Comment with generation date and original url
// Inlined, and everything else
import { themeFromHues } from ???

export const studioTheme = themeFromHues(process.env.__INPUT__)
`

  return prebuiltFromEsbuild.replace('process.env.__INPUT__', JSON.stringify({
  default: defaultHue,
  primary: primaryHue,
}))
}
```

ebsuild needs to build twice
first build the prebuiltFromEsbuild string
pipe first build into the blazing-utils/respondThemeFromHues.mjs file


  Sidebar UI
  Default
  lightest   mid    darkest
  color      color  color
  mid point
  |----------- dot ---------|
  Tones preview
  50 100 200 ---- 800 900 950


Original logic:
  

  The createStudioTheme needs a Hue config
  If a ImagePalette is given as input, pipe it to a hue config

  createStudioTheme transforms the hues into tones
  it then calls createTonesFromConfig and merges it with 
  it then merges it with import {studioTheme} from 'sanity'

<StudioProvider
  unstable_history={history}
  // @ts-expect-error
  config={previewConfig}
  unstable_noAuthBoundary
>
  <ThemeProvider theme={previewStudioTheme} scheme={scheme}>
    <Box padding={4} height="fill">
      <Card height="fill" radius={1} shadow={2}>
        <StudioLayout />
      </Card>
    </Box>
  </ThemeProvider>
</StudioProvider>


const previewStudioTheme = createStudioTheme({ config: themeConfig })

const themeConfig = useMemo(() => {
  return theme?.palette
    ? getColorConfigsFromImagePalette({ palette: theme?.palette })
    : ({} as any)
}, [theme?.palette])

  

 */
