"use client"

import { useState } from "react"
import { Search, Folder, BarChart3, Users, BookOpen, HeadphonesIcon, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const linkData = [
  {
    title: "Affine",
    description: "Notion Replacemente Organize and track your projects with powerful collaboration tools and timeline management.",
    category: "Productivity",
    icon: Users,
    link: "https://affine.com",
  },
  {
    title: "Odoo CRM",
    description: "Get detailed insights into your Leads with comprehensive analytics and reporting features.",
    category: "Data",
    icon: BarChart3,
    link: "https://odoo.com",
  },
  {
    title: "Email Server",
    description: "Connect with your team members and streamline communication across all departments.",
    category: "Communication",
    icon: BookOpen,
    link: "https://email.com",
  },
  {
    title: "Company Files",
    description: "Access a comprehensive collection of Crownb-Bannning company files, guides, and educational materials.",
    category: "Resources",
    icon: Folder,
    link: "https://files.com",
  },
  {
    title: "Customer Support",
    description: "Get help when you need it with our 24/7 customer support and knowledge base.",
    category: "Support",
    icon: HeadphonesIcon,
    link: "https://support.com",
  },
  {
    title: "Settings & Preferences",
    description: "Customize your experience and manage your account settings and privacy preferences.",
    category: "Settings",
    icon: Settings,
    link: "https://settings.com",
  },
]

export default function LinksDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredLinks = linkData.filter(
    (link) =>
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container py-10 max-w-7xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="space-y-2 flex items-center justify-between">
              <h1 className="text-4xl font-bold tracking-tight text-primary">Dashboard</h1>
              <img src="https://framerusercontent.com/images/i5Mcpl7UGnjYfwokxl7bGd6HioU.svg" alt="Logo" className="w-14 h-12" />
            </div>
            <p className="text-lg text-primary/80">Quick access to all Crownb-Bannning resources</p>
          </div>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
            <Input
              placeholder="Search links..."
              className="pl-10 bg-white border-primary/20 focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Separator className="bg-primary/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLinks.map((link, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg relative"
              >
                <div className="absolute top-4 right-4 z-10">
                  <link.icon className="h-5 w-5 text-primary/40 group-hover:text-primary/60 transition-colors duration-300" />
                </div>
                <CardHeader className="pb-3 bg-gradient-to-r from-primary/5 to-transparent pr-12">
                  <CardTitle className="text-xl font-semibold text-primary group-hover:text-primary/90">
                    {link.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs font-normal text-primary/70 border-primary/20">
                    {link.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-primary/70 group-hover:text-primary/80">
                    {link.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="outline"
                    className="text-primary hover:text-primary hover:bg-primary/5 p-2 h-auto font-medium"
                  >
                    Open Link
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredLinks.length === 0 && (
            <div className="text-center py-10">
              <p className="text-primary/70">No links found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
