import { WalletConnect } from "@/components/wallet-connect"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-6xl font-bold text-blue-500 mb-8">
        The home for web3 publishing
      </h1>
      <div className="space-x-4">
        <WalletConnect />
      </div>
    </main>
  )
}

