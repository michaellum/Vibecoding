import { type ReactNode } from 'react'

interface BlankTemplateProps {
  children: ReactNode
  className?: string
}

export default function BlankTemplate({ children, className = '' }: BlankTemplateProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      {children}
    </div>
  )
}