import { ServerStyleSheet } from 'styled-components'
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
} from 'next/document'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="print:[zoom:75%]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
