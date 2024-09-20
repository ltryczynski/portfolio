import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ActiveSectionProvider } from "@/context/active-section-context";

export const metadata: Metadata = {
  title: "Front-End Developer | Łukasz Tryczyński | Portfolio",
  description: "Generated by create next app",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-950 text-gray-50 overflow-y-scroll`}>
        <ActiveSectionProvider>
          <Header />
          {children}
        </ActiveSectionProvider>
        <Footer />
      </body>
    </html>
  );
}
