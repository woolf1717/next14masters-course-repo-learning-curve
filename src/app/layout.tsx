import "./globals.css";

import { Merriweather } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/ui/organisms/Header";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Nasza apka.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={merriweather.className}>
        <Header />
        <div className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
          {children}
        </div>
        <footer>
          <p className=" text-center text-sm text-gray-500">© 2024</p>
        </footer>
      </body>
    </html>
  );
}
``;
