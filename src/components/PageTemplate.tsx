import { type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ThemeToggle'

interface PageTemplateProps {
  children: ReactNode
  title?: string
  className?: string
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Prototypes', href: '/prototypes' },
]

export default function PageTemplate({ 
  children, 
  title = 'React Prototyping', 
  className = '' 
}: PageTemplateProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-foreground">{title}</h1>
              </div>
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      location.pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <main className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8', className)}>
        {children}
      </main>
    </div>
  )
}