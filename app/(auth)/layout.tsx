import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground">
          <Link href="/" className="font-display text-2xl font-semibold">
            ModaGlimmora
          </Link>
          <div>
            <blockquote className="font-accent text-2xl italic mb-4">
              &ldquo;Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.&rdquo;
            </blockquote>
            <cite className="text-sm opacity-80">— Coco Chanel</cite>
          </div>
          <div className="text-sm opacity-60">
            <p>Experience-first fashion discovery</p>
            <p>AI-powered recommendations</p>
            <p>No dark patterns</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="font-display text-2xl font-semibold text-primary">
              ModaGlimmora
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
