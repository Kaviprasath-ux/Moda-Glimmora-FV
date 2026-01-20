"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUIStore } from "@/lib/store/uiStore"

const quickPrompts = [
  "What suits my style?",
  "Evening wear for gallery opening",
  "Investment pieces for my wardrobe",
  "Complete my outfit",
]

const recentSearches = [
  "Silk evening gown",
  "Cashmere coat",
  "Italian leather",
]

export function SearchOverlay() {
  const { isSearchOpen, setSearchOpen, setConciergeOpen } = useUIStore()
  const [searchQuery, setSearchQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen])

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [setSearchOpen])

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchQuery("")
  }

  const handleConversationalSearch = () => {
    closeSearch()
    setConciergeOpen(true)
  }

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-md"
        >
          <div className="luxury-container py-20">
            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeSearch}
                aria-label="Close search"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Search Input */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Search brands, products, or ask anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-16 pl-14 pr-4 text-lg border-2 border-border focus:border-primary rounded-full"
                />
              </div>

              {/* AI Discovery Suggestion */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20"
              >
                <button
                  onClick={handleConversationalSearch}
                  className="flex items-center gap-3 w-full text-left group"
                >
                  <div className="p-2 rounded-full bg-secondary/20">
                    <Sparkles className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Try AI-Powered Discovery</p>
                    <p className="text-sm text-muted-foreground">
                      Have a conversation about what you&apos;re looking for
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </button>
              </motion.div>

              {/* Quick Prompts */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Suggested Questions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => {
                        setSearchQuery(prompt)
                        handleConversationalSearch()
                      }}
                      className="px-4 py-2 text-sm border border-border rounded-full hover:bg-muted transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Recent Searches
                  </h3>
                  <div className="space-y-2">
                    {recentSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => setSearchQuery(search)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Search className="h-4 w-4" />
                        {search}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
