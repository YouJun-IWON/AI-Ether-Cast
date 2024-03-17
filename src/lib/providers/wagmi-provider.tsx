'use client';

import { projectId } from '@/config/env';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { wagmiConfig } from '@/config/wagmi';
import { type State, WagmiProvider } from 'wagmi';
import type { ReactNode } from 'react';
import { holesky } from 'viem/chains';

type Props = {
  children: ReactNode;
  initialState: State | undefined;
};

if (!projectId) throw new Error('Project ID is not defined');

createWeb3Modal({
  wagmiConfig: wagmiConfig,
  defaultChain: holesky,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
  tokens: {
    17000: {
      address: '0x973bd2811c6a259b5cfBBF375F9C549e88F22CFC',
      //image: 'token_image_url' //optional
    },
  },
  termsConditionsUrl: 'https://www.mytermsandconditions.com',
  privacyPolicyUrl: 'https://www.myprivacypolicy.com',
});

export default function WagmiProviderSet({ children, initialState }: Props) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      {children}
    </WagmiProvider>
  );
}
