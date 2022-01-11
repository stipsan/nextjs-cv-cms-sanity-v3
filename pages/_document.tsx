import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
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
