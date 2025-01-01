'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Button } from "@/components/ui/button"
import { initWeb3Modal, getWeb3Provider } from '@/lib/web3modal'

export function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    const checkConnection = async () => {
      const modal = await initWeb3Modal()
      if (modal.cachedProvider) {
        connectWallet()
      }
    }
    checkConnection()
  }, [])

  const connectWallet = async () => {
    setIsConnecting(true)
    try {
      const provider = await getWeb3Provider()
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      setAddress(address)

      provider.on("accountsChanged", (accounts: string[]) => {
        setAddress(accounts[0])
      })
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = async () => {
    const modal = await initWeb3Modal()
    await modal.clearCachedProvider()
    setAddress(null)
  }

  const handleClick = () => {
    if (address) {
      disconnectWallet()
    } else {
      connectWallet()
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isConnecting}
      className="bg-blue-500 hover:bg-blue-600 text-white min-w-[140px]"
    >
      {isConnecting ? (
        "Connecting..."
      ) : address ? (
        `${address.slice(0, 6)}...${address.slice(-4)}`
      ) : (
        "Connect Wallet"
      )}
    </Button>
  )
}

