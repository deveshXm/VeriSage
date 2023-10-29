import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import {
  Chain,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const hedera: Chain = {
  id: 0x128, // You can assign a unique identifier as needed
  name: "Hedera Testnet",
  network: "hedera", // Change 'avalanche' to 'hedera'
  iconUrl: "https://example.com/icon.svg", // Update the icon URL if necessary
  iconBackground: "#fff", // Update icon background color if needed
  nativeCurrency: {
    decimals: 9, // Hedera's HBAR token has 9 decimal places
    name: "Hedera", // Name of the native currency
    symbol: "HBAR", // Symbol for the native currency
  },
  rpcUrls: {
    public: {
      http: ["https://testnet.hedera.com:50211"], // Use the Hedera Testnet RPC endpoint
    },
    default: {
      http: ["https://testnet.hedera.com:50211"], // Use the same Hedera Testnet RPC endpoint as the public one
    },
  },
  blockExplorers: {
    default: {
      name: "Hedera Testnet Explorer", // Name of the block explorer
      url: "https://testnet.dragonglass.me/hedera/transactions", // Use the Hedera Testnet explorer URL
    },
  },
  contracts: {
    // Add contract addresses if needed
  },
  testnet: true, // Set to true for the Hedera Testnet
};


export default function App({ Component, pageProps }: AppProps) {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora,hedera],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />;
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
