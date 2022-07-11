import { parseColor, rgbToHex, screen as _screen } from '@sanity/ui'

// https://github.com/sanity-io/design/blob/804bf73dffb1c0ecb1c2e6758135784502768bfe/packages/%40sanity/ui/src/theme/studioTheme/helpers.ts#L3-L17
export function screen(bg: string, fg: string): string {
  const b = parseColor(bg)
  const s = parseColor(fg)
  const hex = rgbToHex(_screen(b, s))

  return hex
}
