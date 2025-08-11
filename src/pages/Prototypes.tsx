import PageTemplate from '@/components/PageTemplate'

export default function Prototypes() {
  return (
    <PageTemplate>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Prototypes</h1>
          <p className="text-muted-foreground mt-2">
            Build and test your component ideas here.
          </p>
        </div>
        
        <div className="p-8 border border-border rounded-lg bg-card">
          <h2 className="text-xl font-semibold mb-4">Prototype Area</h2>
          <p className="text-muted-foreground mb-4">
            This is where you can experiment with new components and features.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-accent rounded border">
              <h3 className="font-medium">Sample Component</h3>
              <p className="text-sm text-muted-foreground">
                This is an example of how you might structure prototype components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}