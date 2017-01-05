import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
   
  render() {
    return (
      <html>
      <Head>
        <link href="/static/commons.css" rel="stylesheet"/>

      </Head>
      <body>
      <Main />
      <NextScript />

      </body>
      </html>
    )
  }

}