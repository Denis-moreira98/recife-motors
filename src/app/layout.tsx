import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Recife Motors - Sua oficina especializada!",
   description: "Oficina especializada em carros de Recife-PE!",
   keywords: ["oficina", "oficina carros", "carros", "manutenção de carros"],
   openGraph: {
      title: "DevMotors - Sua oficina especializada!",
      images: [`${process.env.NEXT_PUBLIC_URL}/project.png`],
   },
   robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
         index: true,
         follow: true,
         noimageindex: true,
      },
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
