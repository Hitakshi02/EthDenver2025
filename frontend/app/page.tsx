"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold">CryptoSentinel</h1>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Button variant="ghost" onClick={() => router.push("/login")}>
              Login
            </Button>
            <Button onClick={() => router.push("/register")}>Register</Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Never Miss a Crypto Opportunity
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Monitor tweets from crypto influencers, track keywords, and get real-time notifications about market
                    movements.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" onClick={() => router.push("/register")}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => router.push("/features")}>
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex w-full max-w-[500px] items-center justify-center">
                <div className="rounded-xl border bg-card p-6 shadow-lg">
                  <div className="space-y-2 mb-6">
                    <h3 className="text-xl font-bold">Latest Alerts</h3>
                    <p className="text-sm text-muted-foreground">Example notifications from our platform</p>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-background p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <div className="h-6 w-6 text-primary">📈</div>
                        </div>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium">@CryptoExpert just tweeted about Bitcoin</p>
                          <p className="text-xs text-muted-foreground">
                            "Bitcoin looking bullish today! Key resistance at $45k about to break. #BTC"
                          </p>
                          <p className="text-xs font-medium text-green-500">BTC price up 2.3% in the last hour</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-background p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <div className="h-6 w-6 text-primary">🔍</div>
                        </div>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium">Keyword Alert: "moon"</p>
                          <p className="text-xs text-muted-foreground">
                            Multiple influencers mentioning "ETH to the moon" in the last 30 minutes
                          </p>
                          <p className="text-xs font-medium text-green-500">ETH trading volume increased by 15%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform monitors crypto influencers and market data to provide you with timely insights
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <div className="text-3xl">🐦</div>
                </div>
                <h3 className="text-xl font-bold">Tweet Monitoring</h3>
                <p className="text-muted-foreground">We track tweets from top crypto influencers in real-time</p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <div className="text-3xl">🔍</div>
                </div>
                <h3 className="text-xl font-bold">Keyword Analysis</h3>
                <p className="text-muted-foreground">
                  Set up custom keywords to track specific cryptocurrencies or trends
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <div className="text-3xl">📊</div>
                </div>
                <h3 className="text-xl font-bold">Market Correlation</h3>
                <p className="text-muted-foreground">We analyze how tweets correlate with price movements</p>
              </div>
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

