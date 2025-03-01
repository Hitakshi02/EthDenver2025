"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function KeywordManager() {
  const [newKeyword, setNewKeyword] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("bullish")

  // Initial keywords
  const [keywords, setKeywords] = useState([
    { id: 1, text: "moon", category: "bullish" },
    { id: 2, text: "pump", category: "bullish" },
    { id: 3, text: "dump", category: "bearish" },
    { id: 4, text: "crash", category: "bearish" },
    { id: 5, text: "breakout", category: "bullish" },
    { id: 6, text: "regulation", category: "news" },
    { id: 7, text: "ban", category: "news" },
    { id: 8, text: "adoption", category: "bullish" },
    { id: 9, text: "sell", category: "bearish" },
    { id: 10, text: "buy", category: "bullish" },
  ])

  const addKeyword = () => {
    if (newKeyword.trim() !== "") {
      setKeywords([
        ...keywords,
        {
          id: keywords.length + 1,
          text: newKeyword.trim().toLowerCase(),
          category: selectedCategory,
        },
      ])
      setNewKeyword("")
    }
  }

  const removeKeyword = (id: number) => {
    setKeywords(keywords.filter((keyword) => keyword.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Add a new keyword..."
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
          className="flex-1"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bullish">Bullish</SelectItem>
            <SelectItem value="bearish">Bearish</SelectItem>
            <SelectItem value="news">News</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={addKeyword}>
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {keywords.map((keyword) => (
          <div key={keyword.id} className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center space-x-2">
              <Badge
                variant="outline"
                className={
                  keyword.category === "bullish"
                    ? "border-green-500 text-green-500"
                    : keyword.category === "bearish"
                      ? "border-red-500 text-red-500"
                      : "border-blue-500 text-blue-500"
                }
              >
                {keyword.category}
              </Badge>
              <span>{keyword.text}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => removeKeyword(keyword.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

