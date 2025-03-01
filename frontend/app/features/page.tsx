import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Twitter, TrendingUp, Bell, Search, Shield, Zap } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <h1 className="text-lg font-semibold">CryptoSentinel</h1>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how CryptoSentinel helps you make better crypto investment decisions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Twitter className="h-6 w-6 text-primary" />
                    <CardTitle>Social Media Monitoring</CardTitle>
                  </div>
                  <CardDescription>Track tweets from top crypto influencers in real-time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Follow top crypto influencers and analysts</li>
                    <li>Get notified when they tweet about specific cryptocurrencies</li>
                    <li>Analyze sentiment and impact on market movements</li>
                    <li>Historical analysis of influencer accuracy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Search className="h-6 w-6 text-primary" />
                    <CardTitle>Keyword Tracking</CardTitle>
                  </div>
                  <CardDescription>Create a custom dictionary of keywords to monitor</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Set up custom keywords for specific cryptocurrencies</li>
                    <li>Track bullish and bearish signals</li>
                    <li>Monitor regulatory news and market trends</li>
                    <li>Categorize keywords by importance and impact</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <CardTitle>Market Correlation</CardTitle>
                  </div>
                  <CardDescription>See how social media activity correlates with price movements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Real-time price data for major cryptocurrencies</li>
                    <li>Correlation analysis between tweets and price movements</li>
                    <li>Historical data to identify patterns and trends</li>
                    <li>Volatility indicators based on social media activity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Bell className="h-6 w-6 text-primary" />
                    <CardTitle>Smart Notifications</CardTitle>
                  </div>
                  <CardDescription>Get timely alerts about important market signals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Customizable notification preferences</li>
                    <li>Real-time alerts for significant market movements</li>
                    <li>Buy/Sell/Hold recommendations based on analysis</li>
                    <li>Multi-channel delivery via email, SMS, or push notifications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Risk Management</CardTitle>
                  </div>
                  <CardDescription>Protect your investments with advanced risk analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Early warning system for market downturns</li>
                    <li>Portfolio diversification recommendations</li>
                    <li>Volatility alerts and risk exposure analysis</li>
                    <li>Stop-loss suggestions based on market sentiment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>AI-Powered Insights</CardTitle>
                  </div>
                  <CardDescription>Machine learning algorithms that improve over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sentiment analysis of crypto-related content</li>
                    <li>Predictive analytics for price movements</li>
                    <li>Pattern recognition across multiple data sources</li>
                    <li>Personalized insights based on your portfolio</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/register">
                <Button size="lg">Get Started Today</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 CryptoSentinel. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Terms
            </Button>
            <Button variant="ghost" size="sm">
              Privacy
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

