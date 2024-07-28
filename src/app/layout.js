import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-y-hidden">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
