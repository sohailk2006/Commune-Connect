export function CommunityStats() {
  return (
    <section className="bg-primary py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center text-primary-foreground">
            <span className="text-4xl font-bold">500+</span>
            <span className="text-sm">Events Created</span>
          </div>
          <div className="flex flex-col items-center text-center text-primary-foreground">
            <span className="text-4xl font-bold">10k+</span>
            <span className="text-sm">Community Members</span>
          </div>
          <div className="flex flex-col items-center text-center text-primary-foreground">
            <span className="text-4xl font-bold">50+</span>
            <span className="text-sm">Categories</span>
          </div>
          <div className="flex flex-col items-center text-center text-primary-foreground">
            <span className="text-4xl font-bold">100+</span>
            <span className="text-sm">Local Communities</span>
          </div>
        </div>
      </div>
    </section>
  )
}
