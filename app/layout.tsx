import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
 title: "Yakoub Dev | Software Engineer & Web Developer",
 description: "Modern web applications built with cutting-edge technology. See my latest full-stack projects and innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable}`}>
        <Nav />
        <div className="mt-30">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 -left-40 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
