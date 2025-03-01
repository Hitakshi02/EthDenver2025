"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, Plus, Trash2, Twitter, TrendingUp, AlertCircle } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"
import CryptoTable from "@/components/crypto-table"
import RecentAlerts from "@/components/recent-alerts"
import KeywordManager from "@/components/keyword-manager"
import WalletInfo from "@/components/wallet-info"


export default function DashboardPage() {
  // This would typically come from your authentication state
  const user = {
    walletAddress: "0x1234...5678",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
              <Badge className="ml-2" variant="secondary">
                5
              </Badge>
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="influencers">Influencers</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <WalletInfo address={user.walletAddress} />
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monitored Cryptocurrencies</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 since last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tracked Influencers</CardTitle>
                  <Twitter className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+4 since last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Alerts Today</CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">9</div>
                  <p className="text-xs text-muted-foreground">+2 since yesterday</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Your Cryptocurrencies</CardTitle>
                  <CardDescription>Monitor your portfolio and recent price movements</CardDescription>
                </CardHeader>
                <CardContent>
                  <CryptoTable />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Alerts</CardTitle>
                  <CardDescription>Latest notifications from your tracked sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentAlerts />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="influencers" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Tracked Influencers</CardTitle>
                    <CardDescription>Manage the crypto influencers you're monitoring</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Influencer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "CryptoExpert", handle: "@crypto_expert", followers: "1.2M", reliability: "High" },
                    { name: "BitcoinWhale", handle: "@btc_whale", followers: "850K", reliability: "Medium" },
                    { name: "AltcoinGuru", handle: "@altcoin_guru", followers: "620K", reliability: "High" },
                    { name: "CryptoNews", handle: "@crypto_news", followers: "1.5M", reliability: "Medium" },
                    { name: "TokenTrader", handle: "@token_trader", followers: "780K", reliability: "High" },
                  ].map((influencer, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Twitter className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{influencer.name}</p>
                          <p className="text-sm text-muted-foreground">{influencer.handle}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm">{influencer.followers} followers</p>
                          <p className="text-sm">
                            Reliability: <span className="font-medium">{influencer.reliability}</span>
                          </p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="keywords" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Keyword Dictionary</CardTitle>
                    <CardDescription>Manage keywords that trigger notifications</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <KeywordManager />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Alert History</CardTitle>
                <CardDescription>View all notifications from your tracked sources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      type: "tweet",
                      source: "@crypto_expert",
                      content: "Bitcoin looking bullish today! Key resistance at $45k about to break. #BTC",
                      time: "2 hours ago",
                      impact: "BTC price up 2.3% in the last hour",
                      recommendation: "HOLD",
                    },
                    {
                      type: "keyword",
                      source: "Multiple sources",
                      content: "Keyword 'moon' detected in 5 tweets about ETH",
                      time: "4 hours ago",
                      impact: "ETH trading volume increased by 15%",
                      recommendation: "BUY",
                    },
                    {
                      type: "tweet",
                      source: "@btc_whale",
                      content: "Bearish signals for XRP, might be time to take profits. #XRP #crypto",
                      time: "Yesterday",
                      impact: "XRP dropped 4.1% after the tweet",
                      recommendation: "SELL",
                    },
                    {
                      type: "keyword",
                      source: "@altcoin_guru",
                      content: "Keyword 'regulation' detected in tweet about ADA",
                      time: "2 days ago",
                      impact: "ADA price volatility increased",
                      recommendation: "HOLD",
                    },
                    {
                      type: "tweet",
                      source: "@token_trader",
                      content: "DOGE looking ready for a breakout. Elon's been quiet lately... #DOGE",
                      time: "3 days ago",
                      impact: "No significant price change yet",
                      recommendation: "WATCH",
                    },
                  ].map((alert, i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            {alert.type === "tweet" ? (
                              <Twitter className="h-5 w-5" />
                            ) : (
                              <AlertCircle className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">
                              {alert.type === "tweet" ? "Tweet from " : "Keyword Alert: "}
                              {alert.source}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">{alert.content}</p>
                            <div className="mt-2 flex items-center space-x-4">
                              <p className="text-xs text-muted-foreground">{alert.time}</p>
                              <p className="text-xs font-medium text-green-500">{alert.impact}</p>
                            </div>
                          </div>
                        </div>
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
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

