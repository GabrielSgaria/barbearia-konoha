import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/nav-bar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Barbearia Konoha - Estilo e Tradição",
  metadataBase: new URL("https://www.barbeariakonoha.com.br"),
  icons: '/favicon.png',
  description:
    "A Barbearia Konoha oferece serviços de corte de cabelo, barba e estética masculina com excelência e tradição. Agende seu horário online e desfrute de uma experiência personalizada.",
  keywords: [
    "Barbearia Konoha",
    "corte de cabelo masculino",
    "barba",
    "estética masculina",
    "barbearia em Curitiba",
    "serviços de barbearia",
    "estilo masculino",
    "barbeiro profissional",
    "barbearia em pinhais",
    "barbeiro pinhais"

  ],
  openGraph: {
    title: "Barbearia Konoha - Estilo e Tradição",
    description:
      "Venha conhecer a Barbearia Konoha e aproveite nossos serviços de alta qualidade em cortes, barbas e estética masculina.",
    url: "https://www.barbeariakonoha.com.br",
    siteName: "Barbearia Konoha",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/d1ff32cb-818c-427b-948d-e9b8d9a5b4ab.png?token=iJbMskV8xtAOxm0FMBlsE4ci_qBAjAq6S-OEVSb6zgw&height=1200&width=1200&expires=33265645087",
        width: 800,
        height: 600,
        alt: "Barbearia Konoha - Interior da loja",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    title: "Barbearia Konoha - Estilo e Tradição",
    description:
      "Descubra a Barbearia Konoha, especializada em cortes e barbas de alta qualidade. Reserve seu horário agora!",
    images: "https://opengraph.b-cdn.net/production/images/d1ff32cb-818c-427b-948d-e9b8d9a5b4ab.png?token=iJbMskV8xtAOxm0FMBlsE4ci_qBAjAq6S-OEVSb6zgw&height=1200&width=1200&expires=33265645087",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <NavBar />
        <ThemeProvider attribute="class" defaultTheme="white">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
