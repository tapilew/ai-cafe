import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { type Metadata } from "next";
import { WagmiProviders } from "~/lib/wagmi-providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Web3 Café Reservations",
  description: "Using NFTs and account abstraction for reservations!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ReservationsLayout({
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
