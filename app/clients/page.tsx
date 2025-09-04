import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Building2, Users, MapPin, Award, Star, CheckCircle, Phone, Mail, Globe } from "lucide-react"
import { Footer } from "@/components/footer"

const clients = [
  {
    name: "A.S Khan Constructions Pvt.Ltd",
    category: "Construction",
    projects: ["Construction of New Building New Block – Constitution Avenue"],
    logo: "/placeholder.svg"
  },
  {
    name: "Akber Associates / New City Builders",
    category: "Construction",
    projects: ["Construction of Plaza Cinema"],
    logo: "/placeholder.svg"
  },
  {
    name: "AL IMAM ENTERPRISES",
    category: "Telecommunications",
    projects: ["Mobile Tower Projects (Multiple)"],
    logo: "/placeholder.svg"
  },
  {
    name: "Al-Imam (Pvt) Ltd.",
    category: "Telecommunications",
    projects: ["Mobile Tower Projects (Multiple)"],
    logo: "/placeholder.svg"
  },
  {
    name: "Al-Shifa Trust Hospital",
    category: "Healthcare",
    projects: ["Healthcare Infrastructure Projects"],
    logo: "/placeholder.svg"
  },
  {
    name: "ASSOCIATED TECHNOLOGIES (PVT) LTD.",
    category: "Technology",
    projects: ["Mobile Tower Projects (Multiple)"],
    logo: "/placeholder.svg"
  },
  {
    name: "Behria Town, Rawalpindi",
    category: "Real Estate",
    projects: ["Residential Construction Projects"],
    logo: "/placeholder.svg"
  },
  {
    name: "Chicken Cottage",
    category: "Food & Beverage",
    projects: ["Interior work of Chicken Cottage Branches"],
    logo: "/placeholder.svg"
  },
  {
    name: "CM Engineering Pvt Ltd",
    category: "Engineering",
    projects: ["Mobile Tower Projects (Multiple)"],
    logo: "/placeholder.svg"
  },
  {
    name: "Engineering Development Board, Ministry of Industries",
    category: "Government",
    projects: ["Interior Work of E.D.B New Office Building I.F.C Tower"],
    logo: "/placeholder.svg"
  },
  {
    name: "Faraz Khan",
    category: "Private Client",
    projects: ["Construction of 7, 10 Marla & 1 Kanal Houses"],
    logo: "/placeholder.svg"
  },
  {
    name: "Frontier Work Organization (FWO)",
    category: "Government",
    projects: ["CPEC Infrastructure Project"],
    logo: "/placeholder.svg"
  },
  {
    name: "Green Building Technologies Pvt.Ltd",
    category: "Technology",
    projects: ["Giga Mall Islamabad / Hyperstar", "Metro Bus Project P-III"],
    logo: "/placeholder.svg"
  },
  {
    name: "KFC - Pakistan, North Zone",
    category: "Food & Beverage",
    projects: ["Complete Renovations of K.F.C Restaurants North – Region Pakistan", "KFC Restaurant Interior Renovations", "KFC Restaurant Equipment Installation"],
    logo: "/placeholder.svg"
  },
  {
    name: "Muhammad Faheem Khan",
    category: "Private Client",
    projects: ["Construction of 7, 10 Marla & 1 Kanal Houses"],
    logo: "/placeholder.svg"
  },
  {
    name: "National Logistic Cell (NLC)",
    category: "Government",
    projects: ["Logistics Infrastructure Projects"],
    logo: "/placeholder.svg"
  },
  {
    name: "Peradise Complex, Islamabad",
    category: "Commercial",
    projects: ["Commercial Construction Projects"],
    logo: "/placeholder.svg"
  },
  {
    name: "Plan Pakistan",
    category: "NGO",
    projects: ["Development Projects"],
    logo: "/placeholder.svg"
  },
  {
    name: "Powertech Pakistan (Private) Limited",
    category: "Technology",
    projects: ["Mobile Tower Projects (Multiple)"],
    logo: "/placeholder.svg"
  },
  {
    name: "Sattar Buksh Cafe",
    category: "Food & Beverage",
    projects: ["Cafe Interior and Construction Projects"],
    logo: "/placeholder.svg"
  },
  {
    name: "Shaheen Enterprises Pvt.Ltd.",
    category: "Construction",
    projects: ["Complete Construction Of Structure SSD - 256 Barracks Bk-03 & B.N office"],
    logo: "/placeholder.svg"
  },
  {
    name: "Warsi Engineering (Pvt) Ltd",
    category: "Engineering",
    projects: ["Solar Control Room Projects (Multiple)"],
    logo: "/placeholder.svg"
  },
  {
    name: "Zameen.com",
    category: "Technology",
    projects: ["Technology Infrastructure Projects"],
    logo: "/placeholder.svg"
  }
]

const featuredProjects = [
  {
    title: "Giga Mall Islamabad / Hyperstar",
    scope: "Complete electrical works including wiring, cable trays, and generator connection",
    client: "Green Building Technologies Pvt.Ltd",
    location: "DHA Phase II, Islamabad",
    category: "Electrical",
    status: "Completed"
  },
  {
    title: "Construction of New Building New Block – Constitution Avenue",
    scope: "Brickwork and Plaster work",
    client: "A.S Khan Constructions Pvt.Ltd",
    location: "Ministry of Foreign Affairs, Islamabad",
    category: "Civil",
    status: "Completed"
  },
  {
    title: "Interior Work of E.D.B New Office Building I.F.C Tower",
    scope: "Partitioning, Work Stations, AC installation and Paint",
    client: "Engineering Development Board, Ministry of Industries",
    location: "Red Zone, Islamabad",
    category: "Interior",
    status: "Completed"
  },
  {
    title: "Complete Renovations of K.F.C Restaurants North – Region Pakistan",
    scope: "Complete renovation including Ceiling, Paint, Polish, Electrical, Civil, Wood",
    client: "KFC - F/10 Branch, Islamabad",
    location: "F/10 Branch - Pindi Sader Branch",
    category: "Renovation",
    status: "Completed"
  },
  {
    title: "Complete Construction Of Structure SSD - 256 Barracks Bk-03 & B.N office",
    scope: "Structural work including foam, steel, pouring, brick masonry, plastering, flooring, public health",
    client: "Shaheen Enterprises Pvt.Ltd",
    location: "Havelian Cantt Havelian",
    category: "Construction",
    status: "Completed"
  },
  {
    title: "Complete Construction Of House Size 10 Marla",
    scope: "Full construction and finishing including structure, masonry, flooring, electrical, paint, woodwork",
    client: "Private Client",
    location: "House# 08, Power Avenue, Sector- H, D.H.A II Islamabad",
    category: "Residential",
    status: "Completed"
  },
  {
    title: "Construction of Plaza Cinema",
    scope: "Complete Grey Structure",
    client: "Akber Associates / New City Builders",
    location: "Mall Road, Saddar, Rawalpindi",
    category: "Commercial",
    status: "Completed"
  },
  {
    title: "Construction of 7 Floor House",
    scope: "Complete Finished House",
    client: "Private Client",
    location: "House No. 710, Umer Block, Street 49, Phase VIII Behria Town, Islamabad",
    category: "Residential",
    status: "Completed"
  },
  {
    title: "Construction of 6.5 Marla House",
    scope: "Complete Finished House",
    client: "Private Client",
    location: "House No. 36 Street 18 A, Phase IV Ghouri Town, Islamabad",
    category: "Residential",
    status: "Completed"
  },
  {
    title: "Construction of 5 Marla House",
    scope: "Complete Finished House",
    client: "Private Client",
    location: "Sector H, Behria Enclave, Islamabad",
    category: "Residential",
    status: "Completed"
  },
  {
    title: "Metro Bus Project P-III",
    scope: "Electrical and Earthing and road finishing work",
    client: "Green Building Technologies",
    location: "Peshawar Morr, Islamabad",
    category: "Infrastructure",
    status: "Completed"
  },
  {
    title: "CPEC",
    scope: "Construction of culverts",
    client: "FWO - 495",
    location: "Kalabagh",
    category: "Infrastructure",
    status: "Completed"
  },
  {
    title: "Construction of 7, 10 Marla & 1 Kanal Houses",
    scope: "Complete House Construction",
    client: "Faraz Khan & Muhammad Faheem Khan",
    location: "Bahria Town & DHA Phase II, Islamabad",
    category: "Residential",
    status: "Completed"
  },
  {
    title: "Mobile Tower Projects (Multiple)",
    scope: "Complete Civil, Electrical, Mechanical works, and Tower Installation for various clients",
    client: "AL IMAM, CM Engineering, Powertech, ASSOCIATED TECHNOLOGIES",
    location: "Various locations across Pakistan (KPK, Punjab, Sindh)",
    category: "Mobile Tower",
    status: "Completed"
  },
  {
    title: "Solar Control Room Projects (Multiple)",
    scope: "Complete Civil, Electrical, Plumbing, Paint and Finishing works, plus Furnishing",
    client: "Warsi Engineering (Pvt) Ltd",
    location: "Various Cantt locations in Punjab (Chunia, Gujranwala, Kharian, etc.)",
    category: "Solar Infrastructure",
    status: "Completed"
  }
]

const clientCategories = [
  { name: "Government", count: 3, icon: Building2 },
  { name: "Construction", count: 3, icon: Building2 },
  { name: "Technology", count: 4, icon: Building2 },
  { name: "Food & Beverage", count: 3, icon: Building2 },
  { name: "Private Client", count: 2, icon: Users },
  { name: "Engineering", count: 2, icon: Building2 },
  { name: "Real Estate", count: 1, icon: Building2 },
  { name: "Healthcare", count: 1, icon: Building2 },
  { name: "Commercial", count: 1, icon: Building2 },
  { name: "NGO", count: 1, icon: Users }
]

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
              Our <span className="text-accent">Trusted Clients</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Serving prestigious clients across Pakistan including government institutions, major corporations, 
              and private clients. Our commitment to excellence has earned us the trust of industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Major Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Featured Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From government institutions to private enterprises, we deliver excellence across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {clientCategories.map((category, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-sans font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-2xl font-bold text-accent">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Featured Clients</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Some of the prestigious organizations that trust us with their infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.slice(0, 9).map((client, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {client.category}
                    </Badge>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-sans leading-tight">{client.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Recent Projects:</h4>
                    {client.projects.map((project, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{project}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Clients List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Complete Client Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive list of clients across various industries and sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-all duration-300">
                                 <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                   <img 
                     src="/peridotlogo.png" 
                     alt="Peridot Services Logo" 
                     className="w-8 h-8 object-contain"
                   />
                 </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-semibold text-foreground truncate">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.category}</p>
                </div>
                <Badge variant="outline" className="text-xs flex-shrink-0">
                  {client.projects.length} Project{client.projects.length !== 1 ? 's' : ''}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our successful collaborations and project deliveries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-xs">
                      {project.status}
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

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with Peridot Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Peridot Services delivered exceptional quality on our Giga Mall project. Their electrical expertise 
                  and professional approach exceeded our expectations."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <img 
                      src="/peridotlogo.png" 
                      alt="Peridot Services Logo" 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground">Green Building Technologies</p>
                    <p className="text-sm text-muted-foreground">Technology Sector</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The renovation work on our KFC branches was completed on time and within budget. 
                  Their attention to detail and quality standards are outstanding."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <img 
                      src="/peridotlogo.png" 
                      alt="Peridot Services Logo" 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground">KFC Pakistan</p>
                    <p className="text-sm text-muted-foreground">Food & Beverage</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Peridot Services has been instrumental in our mobile tower projects across Pakistan. 
                  Their technical expertise and reliability make them our preferred partner."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <img 
                      src="/peridotlogo.png" 
                      alt="Peridot Services Logo" 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-foreground">AL IMAM Enterprises</p>
                    <p className="text-sm text-muted-foreground">Telecommunications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
            Join Our Growing Client Family
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the same level of excellence that has made us the trusted partner for major organizations across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
