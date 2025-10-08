import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import PageTransition from "@/components/ui/PageTransition";
import StairEffect from "@/components/ui/StairEffect";
import ClientWrapper from "@/components/ui/ClientWrapper";


const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Safian",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <ClientWrapper>
          <Header />
          <StairEffect />
          <PageTransition>
            {children}
          </PageTransition>
        </ClientWrapper>
      </body>
    </html>
  );
}
