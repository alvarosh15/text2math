import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-y-hidden">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
