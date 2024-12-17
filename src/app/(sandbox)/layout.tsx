import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { type Metadata } from "next";
import { WagmiProviders } from "~/lib/wagmi-providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wagmi Sandbox",
  description: "Testing EVM Smart Contracts!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function SandboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <WagmiProviders>{children}</WagmiProviders>
      </body>
    </html>
  );
}
