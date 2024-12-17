import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";

import { type Metadata } from "next";

import { Providers } from "~/lib/providers";
import { TopNav } from "./_components/top-nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI Restaurant",
  description: "AI-Agent-Powered Dish Recommendations!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <Providers>
            <TopNav />
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
