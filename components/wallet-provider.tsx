'use client'

import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from '@/lib/web3modal'

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      {children}
    </WagmiConfig>
  )
}

