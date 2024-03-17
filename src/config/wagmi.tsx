import { cookieStorage, createConfig, createStorage, http } from 'wagmi';
import { bscTestnet, holesky } from 'wagmi/chains';
import { walletConnect, injected, coinbaseWallet } from '@wagmi/connectors';
import { defineChain } from 'viem';
import { projectId } from './env';

if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'AI-Ether-Cast',
  description: 'ETH-Seoul',
  url: 'https://web3modal.com', // TODO:
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const gfChain = defineChain({
  id: 5600,
  name: 'Greenfield Testnet',
  network: 'greenfield',
  nativeCurrency: {
    decimals: 18,
    name: 'tBNB',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: {
      http: ['https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org'],
    },
    public: {
      http: ['https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org'],
    },
  },
  blockExplorers: {
    etherscan: { name: 'Greenfieldscan', url: 'https://greenfieldscan.com/' },
    default: { name: 'Greenfieldscan', url: 'https://greenfieldscan.com/' },
  },
  testnet: true,
});

// Create wagmiConfig
export const wagmiConfig = createConfig({
  chains: [holesky, bscTestnet, gfChain],
  transports: {
    [bscTestnet.id]: http(),
    [gfChain.id]: http(),
    [holesky.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
