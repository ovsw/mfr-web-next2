// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Native blocking scripts must run before any application scripts. */}
          <script src="/privacy-controls.js" />
          <script src="https://embeds.iubenda.com/widgets/b61db3fb-b9eb-4e39-8e27-10397f92a865.js" />
          <link rel="stylesheet" href="https://use.typekit.net/ops4vzn.css" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Kalam&display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <body className="overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
