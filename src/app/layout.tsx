import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/nav-bar";

const META_PIXEL_ID = "2578829062585035";
const GOOGLE_ADS_ID = "AW-18533760602";
const GTM_ID = "GTM-TS8R3DKT";

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
        url: 'https://opengraph.b-cdn.net/production/images/d1ff32cb-818c-427b-948d-e9b8d9a5b4ab.png?token=iJbMskV8xtAOxm0FMBlsE4ci_qBAjAq6S-OEVSb6zgw&height=1200&width=1200&expires=33265645087',
        width: 500,
        height: 500,
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    title: "Barbearia Konoha - Estilo e Tradição",
    description:
      "Descubra a Barbearia Konoha, especializada em cortes e barbas de alta qualidade. Reserve seu horário agora!",
    images: {
      url: "https://opengraph.b-cdn.net/production/images/d1ff32cb-818c-427b-948d-e9b8d9a5b4ab.png?token=iJbMskV8xtAOxm0FMBlsE4ci_qBAjAq6S-OEVSb6zgw&height=1200&width=1200&expires=33265645087",
    }
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        <NavBar />
        <ThemeProvider attribute="class" defaultTheme="white">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
