import { Button } from "@/components/ui/button"
import { Target, Settings, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationProps {
  showAuthButtons?: boolean
}

export function Navigation({ showAuthButtons = true }: NavigationProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname?.startsWith(path)) return true
    return false
  }

  return (
    <header className="bg-[hsl(var(--crm-navy))] text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <Target className="w-5 h-5 text-[hsl(var(--crm-navy))]" />
          </div>
          <h1 className="text-2xl font-bold">NEXUS CRM</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`hover:text-gray-200 transition-colors ${
              isActive("/") && pathname === "/" ? "text-[hsl(var(--crm-accent))] font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`hover:text-gray-200 transition-colors ${
              isActive("/dashboard") ? "text-[hsl(var(--crm-accent))] font-semibold" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/appointments"
            className={`hover:text-gray-200 transition-colors ${
              isActive("/appointments") ? "text-[hsl(var(--crm-accent))] font-semibold" : ""
            }`}
          >
            Schedule
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            Contacts
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            Campaigns
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          {showAuthButtons ? (
            <>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[hsl(var(--crm-navy))]">
                Login
              </Button>
              <Button className="bg-white text-[hsl(var(--crm-navy))] hover:bg-gray-100">
                Get Started
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[hsl(var(--crm-navy))]">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}