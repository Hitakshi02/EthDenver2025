"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      type: "tweet",
      influencer: {
        name: "CryptoExpert",
        avatar: "/placeholder-user.jpg",
        handle: "@crypto_expert",
      },
      content: "Bitcoin looking bullish today! Key resistance at $45k about to break. #BTC",
      time: "2 hours ago",
      impact: "BTC price up 2.3% in the last hour",
      recommendation: "HOLD",
    },
    {
      id: 2,
      type: "keyword",
      keyword: "moon",
      content: "Multiple influencers mentioning 'ETH to the moon' in the last 30 minutes",
      time: "4 hours ago",
      impact: "ETH trading volume increased by 15%",
      recommendation: "BUY",
    },
    {
      id: 3,
      type: "tweet",
      influencer: {
        name: "BitcoinWhale",
        avatar: "/placeholder-user.jpg",
        handle: "@btc_whale",
      },
      content: "Bearish signals for XRP, might be time to take profits. #XRP #crypto",
      time: "Yesterday",
      impact: "XRP dropped 4.1% after the tweet",
      recommendation: "SELL",
    },
    {
      id: 4,
      type: "keyword",
      keyword: "regulation",
      content: "Keyword 'regulation' detected in tweet about ADA",
      time: "2 days ago",
      impact: "ADA price volatility increased",
      recommendation: "HOLD",
    },
  ]

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div key={alert.id} className="flex items-start space-x-4 rounded-lg border p-3">
          {alert.type === "tweet" ? (
            <Avatar>
              <AvatarImage src={alert.influencer.avatar} alt={alert.influencer.name} />
              <AvatarFallback>{alert.influencer.name[0]}</AvatarFallback>
            </Avatar>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg">🔍</span>
            </div>
          )}
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">
                {alert.type === "tweet" ? alert.influencer.handle : `Keyword Alert: "${alert.keyword}"`}
              </p>
              <Badge
                className={
                  alert.recommendation === "BUY"
                    ? "bg-green-500"
                    : alert.recommendation === "SELL"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                }
              >
                {alert.recommendation}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{alert.content}</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{alert.time}</span>
              <span
                className={
                  alert.impact.includes("up") || alert.impact.includes("increased") ? "text-green-500" : "text-red-500"
                }
              >
                {alert.impact}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

