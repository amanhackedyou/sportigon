import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Rubik } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ModalProvider } from "@/context/ModalContext";
import { siteConfig } from "@/config/site.config";
import NavBar from "@/components/NavBar/NavBar";
import { NavBarProvider } from "@/components/NavBar/NavBarContext";
import { FeedProvider } from "@/context/FeedContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
})

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });


export const metadata: Metadata = {
  title: `${siteConfig.name} - Home`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <ModalProvider>
          <AuthProvider>
            <FeedProvider>
              <NavBarProvider>
                {children}
              </NavBarProvider>
            </FeedProvider>
          </AuthProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
