import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const linkData = [
  {
    title: "Project Management",
    description: "Organize and track your projects with powerful collaboration tools and timeline management.",
  },
  {
    title: "Analytics Dashboard",
    description: "Get detailed insights into your performance with comprehensive analytics and reporting features.",
  },
  {
    title: "Team Collaboration",
    description: "Connect with your team members and streamline communication across all departments.",
  },
  {
    title: "Resource Library",
    description: "Access a comprehensive collection of templates, guides, and educational materials.",
  },
  {
    title: "Customer Support",
    description: "Get help when you need it with our 24/7 customer support and knowledge base.",
  },
  {
    title: "Settings & Preferences",
    description: "Customize your experience and manage your account settings and privacy preferences.",
  },
]

export default function Component() {
  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#FEF1E1" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "#003327" }}>
            Links Dashboard
          </h1>
          <p className="text-lg opacity-80" style={{ color: "#003327" }}>
            Quick access to all your important resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {linkData.map((link, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:scale-105"
              style={{
                backgroundColor: "white",
                borderColor: "#003327",
              }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold" style={{ color: "#003327" }}>
                  {link.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed" style={{ color: "#003327", opacity: 0.8 }}>
                  {link.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
