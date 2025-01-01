import { useEffect, useState } from 'react'
import { Core } from '@walletconnect/core'
import { WalletKit } from '@reown/walletkit'

const metadata = {
  name: 'Whoomi',
  description: 'Whoomi Web3 Publishing Platform',
  url: 'https://whoomi.com', // 실제 도메인으로 변경해야 합니다
  icons: ['https://whoomi.com/icon.png'] // 실제 아이콘 URL로 변경해야 합니다
}

export function useWalletKit() {
  const [walletKit, setWalletKit] = useState<WalletKit | null>(null)

  useEffect(() => {
    const initWalletKit = async () => {
      const core = new Core({
        projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''
      })

      const kit = await WalletKit.init({
        core,
        metadata
      })

      setWalletKit(kit)
    }

    initWalletKit()
  }, [])

  return walletKit
}

