import { Core } from '@walletconnect/core'
import { WalletKit } from '@reown/walletkit'

const metadata = {
  name: 'Whoomi',
  description: 'Your identity, your Halo. Create, connect, and earn.',
  url: 'https://whoomi.vercel.app', 
  icons: ['/logo.png']
}

export async function initWalletKit() {
  const core = new Core({
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''
  })

  return await WalletKit.init({
    core,
    metadata
  })
}

