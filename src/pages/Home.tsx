import PageTemplate from '@/components/PageTemplate'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <PageTemplate>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-h1">Welcome to React Prototyping</h1>
          <p className="text-lead max-w-2xl mx-auto">
            A modern React TypeScript setup with ShadCN UI, Tailwind CSS, and React Router.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Quick Start
                <Badge variant="secondary">New</Badge>
              </CardTitle>
              <CardDescription>
                Navigate to Prototypes to start building your components and pages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm">
                Go to Prototypes →
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Templates</CardTitle>
              <CardDescription>
                Use PageTemplate for pages with navigation or BlankTemplate for clean canvases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Badge variant="outline">PageTemplate</Badge>
                <Badge variant="outline">BlankTemplate</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Design System</CardTitle>
              <CardDescription>
                Tailwind CSS with ShadCN UI components and CSS variables for theming.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Badge>Tailwind CSS</Badge>
                  <Badge>ShadCN UI</Badge>
                </div>
                <p className="text-small">Try the theme toggle in the header!</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-h2">Typography System</h2>
          <div className="space-y-3">
            <h1 className="text-h1">Heading 1</h1>
            <h2 className="text-h2">Heading 2</h2>
            <h3 className="text-h3">Heading 3</h3>
            <h4 className="text-h4">Heading 4</h4>
            <p className="text-large">Large text for emphasis</p>
            <p className="text-lead">Lead text for introductions</p>
            <p className="text-body">Body text for regular content</p>
            <p className="text-small">Small text for secondary information</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}