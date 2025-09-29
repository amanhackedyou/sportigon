import { Geist, Geist_Mono, Roboto, Rubik } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ModalProvider } from "@/context/ModalContext";
import { siteConfig } from "@/config/site.config";
import { NavBarProvider } from "@/components/NavBar/NavBarContext";
import { FeedProvider } from "@/context/FeedContext";
import { WebSocketProvider } from "@/context/WebSocket/WebSocketContext";
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
});
const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });
export const metadata = {
    title: `${siteConfig.name} - Home`,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
};
export default function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ModalProvider>
          <AuthProvider>
            <WebSocketProvider>
              <FeedProvider>
                <NavBarProvider>
                  {children}
                </NavBarProvider>
              </FeedProvider>
            </WebSocketProvider>
          </AuthProvider>
        </ModalProvider>
      </body>
    </html>);
}
//# sourceMappingURL=layout.jsx.map