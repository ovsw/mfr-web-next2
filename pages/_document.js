// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
