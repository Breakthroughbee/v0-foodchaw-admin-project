"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, MenuIcon, ShoppingBag, Users, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  // Close the mobile sidebar when the route changes
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Menu",
      icon: MenuIcon,
      href: "/menu",
      active: pathname === "/menu",
    },
    {
      label: "Orders",
      icon: ShoppingBag,
      href: "/orders",
      active: pathname === "/orders",
    },
    {
      label: "Customers",
      icon: Users,
      href: "/customers",
      active: pathname === "/customers",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings",
    },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-background md:block">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-orange-500"
              >
                <path d="M15 11h.01M11 15h.01M16 16h.01M10 11h.01M17 11h.01M11 11h.01" />
                <path d="M3 7l9-4 9 4" />
                <path d="M3 7v13h18V7" />
              </svg>
              <span>FoodVendor</span>
            </Link>
          </div>
          <ScrollArea className="flex-1 px-3 py-2">
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary ${
                    route.active ? "bg-primary/10 text-primary" : "text-muted-foreground"
                  }`}
                >
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0">
          <div className="flex h-full flex-col">
            <div className="flex h-14 items-center border-b px-4">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-orange-500"
                >
                  <path d="M15 11h.01M11 15h.01M16 16h.01M10 11h.01M17 11h.01M11 11h.01" />
                  <path d="M3 7l9-4 9 4" />
                  <path d="M3 7v13h18V7" />
                </svg>
                <span>FoodVendor</span>
              </Link>
              <Button variant="ghost" size="icon" className="ml-auto" onClick={onClose}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <ScrollArea className="flex-1 px-2 py-2">
              <div className="flex flex-col gap-1">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary ${
                      route.active ? "bg-primary/10 text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <route.icon className="h-4 w-4" />
                    {route.label}
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
