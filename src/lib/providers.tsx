"use client";

import { WagmiProvider } from "wagmi";
import { config } from "~/app/wagmi-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Profile } from "~/components/profile";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Profile />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
