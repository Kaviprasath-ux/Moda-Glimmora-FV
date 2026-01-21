"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, CreditCard, Lock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { addressSchema, type AddressInput } from "@/lib/utils/validators"
import { useCartStore } from "@/lib/store/cartStore"
import { formatCurrency } from "@/lib/utils/formatters"
import { EmptyState } from "@/components/shared/EmptyState"

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, getSubtotal, clearCart } = useCartStore()
  const [isLoading, setIsLoading] = React.useState(false)
  const [step, setStep] = React.useState<"shipping" | "payment" | "review">("shipping")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressInput>({
    resolver: zodResolver(addressSchema),
  })

  if (!cart || cart.items.length === 0) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="luxury-container py-12">
          <EmptyState
            icon={<CreditCard className="h-16 w-16" />}
            title="Nothing to checkout"
            description="Add some items to your bag to proceed with checkout."
            action={{ label: "Start Shopping", href: "/explore" }}
          />
        </div>
      </div>
    )
  }

  const subtotal = getSubtotal()
  const shipping = 0 // Free shipping for luxury
  const tax = subtotal * 0.08 // Example tax
  const total = subtotal + shipping + tax

  const onSubmit = async (_data: AddressInput) => {
    if (step === "shipping") {
      setStep("payment")
      return
    }

    if (step === "payment") {
      setStep("review")
      return
    }

    setIsLoading(true)
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    clearCart()
    router.push("/checkout/confirmation")
  }

  return (
    <div className="pt-20 min-h-screen bg-muted/30">
      <div className="luxury-container py-12">
        <h1 className="font-display text-3xl font-medium mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {["Shipping", "Payment", "Review"].map((label, index) => {
            const stepKey = label.toLowerCase() as "shipping" | "payment" | "review"
            const isActive = step === stepKey
            const isPast =
              (step === "payment" && index === 0) ||
              (step === "review" && index < 2)

            return (
              <React.Fragment key={label}>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : isPast
                        ? "bg-success text-success-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isPast ? <Check className="h-4 w-4" /> : index + 1}
                  </div>
                  <span className={`ml-2 text-sm ${isActive ? "font-medium" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                </div>
                {index < 2 && (
                  <div className="w-16 h-px bg-border mx-4" />
                )}
              </React.Fragment>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {step === "shipping" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-display text-xl font-medium">Shipping Address</h2>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" {...register("firstName")} />
                          {errors.firstName && (
                            <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" {...register("lastName")} />
                          {errors.lastName && (
                            <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address1">Address</Label>
                        <Input id="address1" {...register("address1")} />
                        {errors.address1 && (
                          <p className="text-sm text-destructive mt-1">{errors.address1.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                        <Input id="address2" {...register("address2")} />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" {...register("city")} />
                          {errors.city && (
                            <p className="text-sm text-destructive mt-1">{errors.city.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input id="state" {...register("state")} />
                          {errors.state && (
                            <p className="text-sm text-destructive mt-1">{errors.state.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input id="postalCode" {...register("postalCode")} />
                          {errors.postalCode && (
                            <p className="text-sm text-destructive mt-1">{errors.postalCode.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Input id="country" {...register("country")} defaultValue="United States" />
                          {errors.country && (
                            <p className="text-sm text-destructive mt-1">{errors.country.message}</p>
                          )}
                        </div>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Continue to Payment
                      </Button>
                    </motion.div>
                  )}

                  {step === "payment" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-display text-xl font-medium">Payment Method</h2>

                      <div className="p-4 bg-muted/50 rounded-lg flex items-center gap-2 text-sm text-muted-foreground">
                        <Lock className="h-4 w-4" />
                        Your payment information is encrypted and secure
                      </div>

                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="4242 4242 4242 4242" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button type="button" variant="outline" onClick={() => setStep("shipping")}>
                          Back
                        </Button>
                        <Button type="submit" className="flex-1" size="lg">
                          Review Order
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === "review" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-display text-xl font-medium">Review Your Order</h2>

                      <div className="space-y-4">
                        {cart.items.map((item) => (
                          <div key={item.id} className="flex gap-4">
                            <div className="relative w-16 h-20 rounded-md overflow-hidden bg-muted">
                              <Image
                                src={item.product.mainImage}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground">{item.product.brandName}</p>
                              <p className="font-medium">{item.product.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Size: {item.variant.size} • Qty: {item.quantity}
                              </p>
                            </div>
                            <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button type="button" variant="outline" onClick={() => setStep("payment")}>
                          Back
                        </Button>
                        <Button type="submit" className="flex-1" size="lg" disabled={isLoading}>
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            `Place Order • ${formatCurrency(total)}`
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cart.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-12 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={item.product.mainImage}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-1">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">{formatCurrency(item.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-success">Complimentary</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>{formatCurrency(tax)}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
