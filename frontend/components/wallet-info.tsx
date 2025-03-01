import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet } from "lucide-react"

interface WalletInfoProps {
  address: string
}

export default function WalletInfo({ address }: WalletInfoProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Wallet Address</CardTitle>
        <Wallet className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{address}</div>
        <p className="text-xs text-muted-foreground">Your connected wallet address</p>
      </CardContent>
    </Card>
  )
}

