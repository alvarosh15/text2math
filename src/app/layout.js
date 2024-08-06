import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ThemeProvider } from "next-themes";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className="overflow-y-hidden dark">
      <body className={roboto.className}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
