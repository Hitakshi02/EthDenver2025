import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowUp } from "lucide-react"

export default function CryptoTable() {
  const cryptos = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$44,250.32",
      change: "+2.3%",
      sentiment: "Bullish",
      recommendation: "HOLD",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,120.15",
      change: "+4.7%",
      sentiment: "Very Bullish",
      recommendation: "BUY",
    },
    {
      name: "Ripple",
      symbol: "XRP",
      price: "$0.5423",
      change: "-1.2%",
      sentiment: "Bearish",
      recommendation: "SELL",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: "$0.4521",
      change: "+0.8%",
      sentiment: "Neutral",
      recommendation: "HOLD",
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      price: "$0.0821",
      change: "+0.3%",
      sentiment: "Neutral",
      recommendation: "WATCH",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24h Change</TableHead>
          <TableHead>Sentiment</TableHead>
          <TableHead className="text-right">Recommendation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cryptos.map((crypto) => (
          <TableRow key={crypto.symbol}>
            <TableCell className="font-medium">
              <div className="flex flex-col">
                <span>{crypto.name}</span>
                <span className="text-xs text-muted-foreground">{crypto.symbol}</span>
              </div>
            </TableCell>
            <TableCell>{crypto.price}</TableCell>
            <TableCell>
              <div className="flex items-center">
                {crypto.change.startsWith("+") ? (
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                )}
                <span className={crypto.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                  {crypto.change}
                </span>
              </div>
            </TableCell>
            <TableCell>{crypto.sentiment}</TableCell>
            <TableCell className="text-right">
              <Badge
                className={
                  crypto.recommendation === "BUY"
                    ? "bg-green-500"
                    : crypto.recommendation === "SELL"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                }
              >
                {crypto.recommendation}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

