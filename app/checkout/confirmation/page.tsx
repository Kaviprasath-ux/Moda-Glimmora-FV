"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Package, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ConfirmationPage() {
  const orderNumber = "MG" + Math.random().toString(36).substring(2, 8).toUpperCase()

  return (
    <div className="pt-20 min-h-screen bg-muted/30">
      <div className="luxury-container py-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success mb-6"
          >
            <Check className="h-10 w-10 text-success-foreground" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-3xl md:text-4xl font-medium mb-4">
              Thank You for Your Order
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Your order has been confirmed
            </p>
            <p className="text-muted-foreground mb-8">
              Order Number: <span className="font-medium text-foreground">{orderNumber}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 mb-8"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-muted">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Confirmation Email Sent</h3>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ve sent the order details to your email address
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-muted">
                    <Package className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Estimated Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      Your items will arrive in 3-5 business days
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild>
              <Link href="/orders">
                View Order Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/explore">Continue Exploring</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground mt-8"
          >
            Questions about your order?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact our concierge
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  )
}
