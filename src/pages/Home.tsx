import PageTemplate from '@/components/PageTemplate'
import BlankTemplate from '@/components/BlankTemplate'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

export default function Home() {
  const [showBlankTemplate, setShowBlankTemplate] = useState(false)

  if (showBlankTemplate) {
    return (
      <BlankTemplate className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello World!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            This is the BlankTemplate - a clean canvas for your ideas
          </p>
          <Button onClick={() => setShowBlankTemplate(false)}>
            Back to Component Showcase
          </Button>
        </div>
      </BlankTemplate>
    )
  }

  return (
    <PageTemplate>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-8">
          <h1 className="text-h1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello World! 👋
          </h1>
          <p className="text-lead max-w-3xl mx-auto">
            Welcome to your React prototyping environment! This page showcases all the components and features in your design system.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg">Primary Button</Button>
            <Button variant="outline" size="lg">Outline Button</Button>
            <Button variant="secondary" size="lg">Secondary</Button>
            <Button variant="ghost" size="lg">Ghost</Button>
          </div>
        </div>

        {/* Template Showcase */}
        <Card className="border-2 border-dashed border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎨 Template System
              <Badge variant="secondary">Interactive</Badge>
            </CardTitle>
            <CardDescription>
              Two main templates for different use cases
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="text-h4 mb-2">PageTemplate</h3>
                <p className="text-small mb-3">
                  Includes navigation, header, and structured layout. You're using it right now!
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Navigation</Badge>
                  <Badge variant="outline">Theme Toggle</Badge>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-h4 mb-2">BlankTemplate</h3>
                <p className="text-small mb-3">
                  Clean canvas with minimal styling for maximum creative freedom.
                </p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => setShowBlankTemplate(true)}
                >
                  Try BlankTemplate →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Button Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>🔘 Button Variations</CardTitle>
            <CardDescription>All button variants and sizes available</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-h4 mb-3">Variants</h3>
              <div className="flex gap-2 flex-wrap">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            <div>
              <h3 className="text-h4 mb-3">Sizes</h3>
              <div className="flex gap-2 items-center flex-wrap">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">⭐</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Showcase */}
        <div className="space-y-4">
          <h2 className="text-h2">🃏 Card Components</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
                <CardDescription>Basic card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-small">This is a simple card example with header and content sections.</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">Success Card</CardTitle>
                <CardDescription>Card with custom styling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-small">Cards can be customized with different colors and styles.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Featured Card
                  <Badge>New</Badge>
                </CardTitle>
                <CardDescription>With gradient background and badges</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-small">Cards can have gradient backgrounds and contain other components.</p>
                <div className="flex gap-1">
                  <Badge variant="secondary">Feature</Badge>
                  <Badge variant="outline">Cool</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Badge Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>🏷️ Badge Components</CardTitle>
            <CardDescription>Labels and status indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-h4 mb-3">Variants</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-h4 mb-3">Use Cases</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge>New Feature</Badge>
                <Badge variant="secondary">Beta</Badge>
                <Badge variant="outline">v1.0.0</Badge>
                <Badge variant="destructive">Deprecated</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography System */}
        <Card>
          <CardHeader>
            <CardTitle>📝 Typography System</CardTitle>
            <CardDescription>Semantic typography classes for consistent text styling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h1 className="text-h1">Heading 1 - Main titles</h1>
              <h2 className="text-h2">Heading 2 - Section titles</h2>
              <h3 className="text-h3">Heading 3 - Subsections</h3>
              <h4 className="text-h4">Heading 4 - Card titles</h4>
              <p className="text-large">Large text - For emphasis</p>
              <p className="text-lead">Lead text - For introductions and important content</p>
              <p className="text-body">Body text - Regular paragraph content goes here</p>
              <p className="text-small">Small text - For secondary information and captions</p>
            </div>
          </CardContent>
        </Card>

        {/* Theme System */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-400">
              🎨 Theme System
              <Badge variant="secondary">Try it!</Badge>
            </CardTitle>
            <CardDescription>
              Toggle between light and dark themes using the button in the header
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                <h3 className="text-h4 mb-2">Light Theme</h3>
                <p className="text-small">Clean, bright interface perfect for daytime use</p>
              </div>
              <div className="p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg border">
                <h3 className="text-h4 mb-2">Dark Theme</h3>
                <p className="text-small">Easy on the eyes for nighttime coding</p>
              </div>
            </div>
            <p className="text-small text-center">
              Click the sun/moon icon in the header to switch themes! The system also respects your OS preference.
            </p>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">🚀 Ready to Start Building?</CardTitle>
            <CardDescription>
              Your React prototyping environment is fully set up and ready to go!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge>React 18</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>ShadCN UI</Badge>
              <Badge>Vite</Badge>
              <Badge>React Router</Badge>
            </div>
            <p className="text-body max-w-lg mx-auto">
              Navigate to the Prototypes page to start building your components, or use this Hello World page as inspiration for your own designs.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/prototypes">Start Prototyping →</a>
              </Button>
              <Button variant="outline" size="lg" onClick={() => setShowBlankTemplate(true)}>
                Try Blank Canvas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTemplate>
  )
}