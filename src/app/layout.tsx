import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Merriweather_Sans } from "next/font/google";
import type { Metadata } from "next";
import { NavBar } from "@/ui/organisms/Header";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "RiddleWear. Your store for unique clothes.",
  description: "RiddleWear. Your store for unique clothes.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pl">
        <body className={merriweather.className}>
          <NavBar />
          <div className="mx-auto max-w-md pt-6 p-12 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
            {children}
          </div>
          <footer>
            <div className="flex text-sm text-gray-500 pt-2 w-full items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <p>© 2024 RiddleWear.</p>
                <div className="pt-1">
                  <a href="https://bartoszstpiczynski.pl/" target="_blank">
                    Created by&nbsp;
                    <span className="underline hover:text-blue-600">
                      Bartosz Stpiczyński
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
          {modal}
        </body>
      </html>
    </ClerkProvider>
  );
}
``;
