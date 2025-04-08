import { createConfig, http } from "wagmi";
import {
    base,
    baseSepolia,
    mainnet,
    polygon,
    polygonAmoy,
    polygonZkEvm,
    polygonZkEvmCardona,
    sepolia,
    zksync,
    zksyncSepoliaTestnet,
} from "wagmi/chains";
import { injected, metaMask, safe } from "wagmi/connectors";

export const config = createConfig({
    chains: [
        mainnet,
        sepolia,
        base,
        baseSepolia,
        polygon,
        polygonAmoy,
        polygonZkEvm,
        polygonZkEvmCardona,
        zksync,
        zksyncSepoliaTestnet,
    ],
    connectors: [injected(), metaMask(), safe()],
    transports: {
        [mainnet.id]: http(),
        [base.id]: http(),
        [sepolia.id]: http(),
        [baseSepolia.id]: http(),
        [polygon.id]: http(),
        [polygonAmoy.id]: http(),
        [polygonZkEvm.id]: http(),
        [polygonZkEvmCardona.id]: http(),
        [zksync.id]: http(),
        [zksyncSepoliaTestnet.id]: http(),
    },
});
