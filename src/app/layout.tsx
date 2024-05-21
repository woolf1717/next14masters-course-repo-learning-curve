import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";
import { Merriweather_Sans } from "next/font/google";
import type { Metadata } from "next";
import { Suspense } from "react";
import { NavBar } from "@/ui/organisms/Header";

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Our store - home.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pl">
        <body className={merriweather.className}>
          <Suspense>
            <NavBar />
            <div className="mx-auto max-w-md pt-6 p-12 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
              {children}
            </div>
            <footer>
              <p className="text-center text-sm text-gray-500">
                © 2024 Portfolio -{" "}
                <a href=" https://bartoszstpiczynski.pl/" target="_blank">
                  bartoszstpiczynski.pl
                </a>
              </p>
            </footer>
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
``;
