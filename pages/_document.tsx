
//Import necessário para gerar um Head de forma mais abstraida no App
import Document, { Html, Head, Main, NextScript } from 'next/document'

//Todas as importações de Head deve ser colocada aqui dentro
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>

    )
  }
}