import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Building2, Zap, MapPin, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Giga Mall Islamabad / Hyperstar",
    scope: "Complete electrical works including wiring, cable trays, and generator connection",
    client: "Green Building Technologies Pvt.Ltd",
    location: "DHA Phase II, Islamabad",
    category: "Electrical",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 2,
    title: "Construction of New Building New Block – Constitution Avenue",
    scope: "Brickwork and Plaster work",
    client: "A.S Khan Constructions Pvt.Ltd",
    location: "Ministry of Foreign Affairs, Islamabad",
    category: "Civil",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 3,
    title: "Interior Work of E.D.B New Office Building I.F.C Tower",
    scope: "Partitioning, Work Stations, AC installation and Paint",
    client: "Engineering Development Board, Ministry of Industries",
    location: "Red Zone, Islamabad",
    category: "Interior",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 4,
    title: "Complete Renovations of K.F.C Restaurants North – Region Pakistan",
    scope: "Complete renovation including Ceiling, Paint, Polish, Electrical, Civil, Wood",
    client: "KFC - Pakistan, North Zone",
    location: "F/10 Branch - Pindi Sader Branch",
    category: "Renovation",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 4.1,
    title: "KFC Restaurant Interior Renovations",
    scope: "Complete interior renovation including kitchen equipment, dining area, and electrical systems",
    client: "KFC - Pakistan, North Zone",
    location: "Multiple locations across North Region",
    category: "Interior",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 5,
    title: "Complete Construction Of Structure SSD - 256 Barracks Bk-03 & B.N office",
    scope: "Structural work including foam, steel, pouring, brick masonry, plastering, flooring, public health",
    client: "Shaheen Enterprises Pvt.Ltd",
    location: "Havelian Cantt Havelian",
    category: "Construction",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 6,
    title: "Complete Construction Of House Size 10 Marla",
    scope: "Full construction and finishing including structure, masonry, flooring, electrical, paint, woodwork",
    client: "Private Client",
    location: "House# 08, Power Avenue, Sector- H, D.H.A II Islamabad",
    category: "Residential",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 7,
    title: "Construction of Plaza Cinema",
    scope: "Complete Grey Structure",
    client: "Akber Associates / New City Builders",
    location: "Mall Road, Saddar, Rawalpindi",
    category: "Commercial",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 8,
    title: "Metro Bus Project P-III",
    scope: "Electrical and Earthing and road finishing work",
    client: "Green Building Technologies",
    location: "Peshawar Morr, Islamabad",
    category: "Infrastructure",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 9,
    title: "Mobile Tower Projects (Multiple)",
    scope: "Complete Civil, Electrical, Mechanical works, and Tower Installation for various clients",
    client: "AL IMAM, CM Engineering, Powertech, ASSOCIATED TECHNOLOGIES",
    location: "Various locations across Pakistan (KPK, Punjab, Sindh)",
    category: "Mobile Tower",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 10,
    title: "Solar Control Room Projects (Multiple)",
    scope: "Complete Civil, Electrical, Plumbing, Paint and Finishing works, plus Furnishing",
    client: "Warsi Engineering (Pvt) Ltd",
    location: "Various Cantt locations in Punjab (Chunia, Gujranwala, Kharian, etc.)",
    category: "Solar Infrastructure",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 11,
    title: "CPEC Infrastructure Project",
    scope: "Construction of culverts",
    client: "FWO - 495",
    location: "Kalabagh",
    category: "Infrastructure",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 12,
    title: "Construction of 7, 10 Marla & 1 Kanal Houses",
    scope: "Complete House Construction",
    client: "Faraz Khan & Muhammad Faheem Khan",
    location: "Bahria Town & DHA Phase II, Islamabad",
    category: "Residential",
    image: "/building.jpeg",
    status: "Completed",
  },
  {
    id: 13,
    title: "KFC Restaurant Equipment Installation",
    scope: "Kitchen equipment installation, electrical systems, and safety compliance",
    client: "KFC - Pakistan, North Zone",
    location: "Multiple KFC locations",
    category: "Equipment Installation",
    image: "/building.jpeg",
    status: "Completed",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
              Our <span className="text-accent">Project Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Explore our successful engineering and construction projects across Pakistan. From major commercial
              developments to residential construction, each project represents our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Major Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-sans font-bold text-foreground mb-2">Featured Projects</h2>
              <p className="text-muted-foreground">
                Showcasing our expertise across diverse construction and engineering challenges
              </p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                All Projects
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                Construction
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                Electrical
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                Mobile Towers
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                Solar Infrastructure
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                Food & Beverage
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="border-border hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/building.jpeg"}
                    alt={project.title}
                    width={1200}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={false}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={project.status === "Completed" ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    {project.category === "Mobile Tower" ||
                    project.category === "Construction" ||
                    project.category === "Civil" ? (
                      <Building2 className="h-4 w-4 text-accent" />
                    ) : (
                      <Zap className="h-4 w-4 text-accent" />
                    )}
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-sans leading-tight text-balance">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Scope of Work</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.scope}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Client: </span>
                        <span className="text-sm text-muted-foreground">{project.client}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Location: </span>
                        <span className="text-sm text-muted-foreground">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our growing list of satisfied clients including KFC, Behria Town, FWO, and NLC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
