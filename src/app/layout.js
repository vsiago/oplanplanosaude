import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

// Importando a fonte Inter com estilos limitados para melhorar a performance
const inter = Inter({ subsets: ["latin"], display: "swap" });

// Metadata adicionada com mais detalhes para SEO e redes sociais
export const metadata = {
  title: "Oplan Plano de Saúde",
  description: "A sua melhor escolha em Plano de Saúde.",
  openGraph: {
    type: "website",
    url: "https://oplan.com",
    title: "Oplan Plano de Saúde",
    description: "A sua melhor escolha em Plano de Saúde.",
    images: [
      {
        url: "https://planodesaudeoplan.com.br/favicon.ico",
        width: 800,
        height: 600,
        alt: "Oplan",
      },
    ],
    site_name: "Oplan",
  },
  twitter: {
    card: "summary_large_image",
    site: "@oplan",
    title: "Oplan Plano de Saúde",
    description: "A sua melhor escolha em Plano de Saúde.",
    image: "https://planodesaudeoplan.com.br/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        {/* Tag title dinâmica */}
        <title>{metadata.title}</title>

        {/* Meta description */}
        <meta name="description" content={metadata.description} />

        {/* Open Graph tags para redes sociais */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oplan.com" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://planodesaudeoplan.com.br/favicon.ico"
        />
        <meta property="og:site_name" content="Oplan" />

        {/* Twitter cards para otimização em Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@oplan" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://planodesaudeoplan.com.br/favicon.ico"
        />

        {/* Adicionando outros meta tags */}
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Fonte Inter com carregamento otimizado */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
