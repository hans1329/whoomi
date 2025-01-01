'use client'

import { WalletKitProvider } from '@reown/walletkit'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WalletKitProvider
      projectId={process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ""}
      appName="Whoomi"
    >
      {children}
    </WalletKitProvider>
  )
}

