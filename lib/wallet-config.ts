import { defaultWagmiConfig } from '@web3modal/wagmi/react'
import { createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'

export const config = defaultWagmiConfig({
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  chains: [mainnet],
  metadata: {
    name: 'Whoomi',
    description: 'Your identity, your Halo. Create, connect, and earn.',
    url: 'https://whoomi.vercel.app',
    icons: ['/logo.png']
  }
})

