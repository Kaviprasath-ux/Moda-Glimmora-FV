"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Send,
  Paperclip,
  Calendar,
  Lock,
  User,
  Bot,
  Phone,
  MoreVertical
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useConciergeStore } from "@/lib/store/conciergeStore"
import { mockConciergeProfile } from "@/data/mock/uhni-user"

export default function ConciergePage() {
  const [message, setMessage] = React.useState("")
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const {
    currentConversation,
    isTyping,
    currentHandler,
    conciergeAvailability,
    addMessage,
    setTyping,
    requestHandoff
  } = useConciergeStore()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [currentConversation?.messages])

  const handleSend = () => {
    if (!message.trim()) return

    addMessage({
      conversationId: currentConversation?.id || "new",
      role: "user",
      content: message,
      encrypted: true
    })

    setMessage("")

    // Simulate typing response
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      addMessage({
        conversationId: currentConversation?.id || "new",
        role: currentHandler,
        content: "Thank you for your message. I'm reviewing your request and will respond shortly.",
        encrypted: true
      })
    }, 2000)
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="luxury-container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-180px)]">
          {/* Main Chat */}
          <div className="lg:col-span-3 flex flex-col">
            <Card className="uhni-card flex-1 flex flex-col overflow-hidden">
              {/* Header */}
              <CardHeader className="border-b border-border py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={mockConciergeProfile.avatar} />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${
                        conciergeAvailability === "available" ? "bg-green-500" :
                        conciergeAvailability === "busy" ? "bg-yellow-500" : "bg-gray-500"
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-medium">Your Concierge</h2>
                        <Badge variant="outline" className="text-xs">
                          {currentHandler === "human" ? "Human" : "AI"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {currentHandler === "human"
                          ? `${mockConciergeProfile.name} • ${conciergeAvailability}`
                          : "AI Assistant • Always available"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Lock className="h-3 w-3" />
                      End-to-end encrypted
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  {currentConversation?.messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <Avatar className="h-8 w-8 shrink-0">
                        {msg.role === "user" ? (
                          <>
                            <AvatarFallback>
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </>
                        ) : msg.role === "ai" ? (
                          <>
                            <AvatarFallback className="bg-accent/10">
                              <Bot className="h-4 w-4 text-accent" />
                            </AvatarFallback>
                          </>
                        ) : (
                          <>
                            <AvatarImage src={mockConciergeProfile.avatar} />
                            <AvatarFallback>SC</AvatarFallback>
                          </>
                        )}
                      </Avatar>

                      <div className={`max-w-[70%] ${msg.role === "user" ? "text-right" : ""}`}>
                        <div className={`chat-bubble ${
                          msg.role === "user" ? "user" : msg.role === "ai" ? "ai" : "human"
                        }`}>
                          {msg.role !== "user" && (
                            <p className="text-xs text-muted-foreground mb-1">
                              {msg.role === "ai" ? "AI" : mockConciergeProfile.name}
                            </p>
                          )}
                          <p className="text-sm">{msg.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex gap-3"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-accent/10">
                            <Bot className="h-4 w-4 text-accent" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="chat-bubble ai">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  />
                  <Button onClick={handleSend} disabled={!message.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Calendar className="mr-1 h-3 w-3" />
                    Schedule Call
                  </Button>
                  {currentHandler === "ai" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs"
                      onClick={requestHandoff}
                    >
                      <User className="mr-1 h-3 w-3" />
                      Connect to Human
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Concierge Info */}
            <Card className="uhni-card">
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <Avatar className="h-16 w-16 mx-auto mb-3">
                    <AvatarImage src={mockConciergeProfile.avatar} />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <h3 className="font-medium">{mockConciergeProfile.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    Your dedicated concierge
                  </p>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Specialties</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {mockConciergeProfile.specialty.map((s) => (
                        <Badge key={s} variant="secondary" className="text-xs">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Response Time</p>
                    <p>{mockConciergeProfile.responseTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Languages</p>
                    <p>{mockConciergeProfile.languages.join(", ")}</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4" size="sm">
                  <Phone className="mr-2 h-3 w-3" />
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="uhni-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                  Request Styling Advice
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                  Start Sourcing Request
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                  Discuss Bespoke
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm" size="sm">
                  Wardrobe Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
