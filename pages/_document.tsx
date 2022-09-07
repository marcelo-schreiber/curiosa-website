import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function App() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Curiosa" />
        <meta
          name="description"
          content="Curiosa é uma proposta para reiterar a importante participação feminina na computação, por meio de resolução de exercícios nessa temática."
        />
        <meta
          name="keywords"
          content="mulheres, computação, python, aprender, código"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
        <meta name="author" content="Colocar nome de td mundo dps" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
