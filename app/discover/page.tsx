"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, ArrowRight, User } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { mockRecommendations, mockQuickPrompts, mockConversationHistory } from "@/data/mock/recommendations"
import { formatCurrency } from "@/lib/utils/formatters"
import type { ChatMessage, AIRecommendation } from "@/lib/types"

export default function DiscoverPage() {
  const [messages, setMessages] = React.useState<ChatMessage[]>(mockConversationHistory)
  const [input, setInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input.trim(),
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: "Based on what you're looking for, I've found some pieces that align with your style and occasion. Each recommendation comes with an explanation of why it might work for you.",
        recommendations: mockRecommendations,
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 2000)
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
  }

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      {/* Header */}
      <div className="border-b">
        <div className="luxury-container py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-secondary uppercase tracking-wider">
              AI-Powered Discovery
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">
            Discover with Intelligence
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a natural conversation about what you&apos;re looking for. No filters, no endless scrolling—just thoughtful recommendations.
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4">
        <ScrollArea className="flex-1 py-6" ref={scrollRef}>
          <div className="space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-4",
                    message.role === "user" ? "flex-row-reverse" : ""
                  )}
                >
                  {/* Avatar */}
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/20"
                    )}
                  >
                    {message.role === "user" ? (
                      <User className="h-5 w-5" />
                    ) : (
                      <Sparkles className="h-5 w-5 text-secondary" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      "flex-1 space-y-4",
                      message.role === "user" ? "text-right" : ""
                    )}
                  >
                    <div
                      className={cn(
                        "inline-block rounded-2xl px-4 py-3 max-w-[85%]",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground text-left"
                          : "bg-muted text-left"
                      )}
                    >
                      <p>{message.content}</p>
                    </div>

                    {/* Recommendations */}
                    {message.recommendations && message.recommendations.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {message.recommendations.map((rec) => (
                          <RecommendationCard key={rec.id} recommendation={rec} />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-secondary" />
                </div>
                <div className="bg-muted rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Prompts */}
        <div className="py-4 border-t">
          <div className="flex flex-wrap gap-2 mb-4">
            {mockQuickPrompts.slice(0, 4).map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleQuickPrompt(prompt)}
                className="px-3 py-1.5 text-sm border rounded-full hover:bg-muted transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe what you're looking for..."
              className="flex-1"
            />
            <Button type="submit" disabled={!input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

function RecommendationCard({ recommendation }: { recommendation: AIRecommendation }) {
  return (
    <Card className="overflow-hidden card-hover">
      <Link href={`/explore/${recommendation.product.brandId}/products/${recommendation.product.slug}`}>
        <div className="relative aspect-[3/4]">
          <Image
            src={recommendation.product.mainImage}
            alt={recommendation.product.name}
            fill
            className="object-cover"
          />
          <Badge className="absolute top-2 right-2 bg-secondary">
            {recommendation.confidence}% Match
          </Badge>
        </div>
      </Link>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground mb-1">
          {recommendation.product.brandName}
        </p>
        <h3 className="font-medium mb-2 line-clamp-1">
          {recommendation.product.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {recommendation.explanation}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-medium">{formatCurrency(recommendation.product.price)}</p>
          <Link
            href={`/explore/${recommendation.product.brandId}/products/${recommendation.product.slug}`}
            className="text-xs text-primary flex items-center hover:underline"
          >
            View
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
