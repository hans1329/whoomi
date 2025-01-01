'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { useWalletKit } from '../hooks/useWalletKit'

export function ConnectButton() {
  const walletKit = useWalletKit()
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  useEffect(() => {
    if (walletKit) {
      const checkConnection = async () => {
        const session = await walletKit.getSession()
        setIsConnected(!!session)
        if (session) {
          setAddress(session.address)
        }
      }
      checkConnection()
    }
  }, [walletKit])

  const handleConnect = async () => {
    if (walletKit) {
      if (isConnected) {
        await walletKit.disconnect()
        setIsConnected(false)
        setAddress(null)
      } else {
        try {
          const session = await walletKit.connect()
          setIsConnected(true)
          setAddress(session.address)
        } catch (error) {
          console.error('Failed to connect:', error)
        }
      }
    }
  }

  return (
    <Button
      onClick={handleConnect}
      className="bg-blue-500 hover:bg-blue-600 text-white"
    >
      {isConnected ? (
        `${address?.slice(0, 6)}...${address?.slice(-4)}`
      ) : (
        "Connect"
      )}
    </Button>
  )
}

