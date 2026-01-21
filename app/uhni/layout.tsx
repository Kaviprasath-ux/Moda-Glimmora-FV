import { UHNIHeader } from "@/components/layout/UHNIHeader"
import { UHNIFooter } from "@/components/layout/UHNIFooter"

export default function UHNILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="uhni">
      <div className="relative min-h-screen flex flex-col bg-background text-foreground">
        <UHNIHeader />
        <main className="flex-1">{children}</main>
        <UHNIFooter />
      </div>
    </div>
  )
}
