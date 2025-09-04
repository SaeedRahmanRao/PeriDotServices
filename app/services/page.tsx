import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Building2,
  Zap,
  Wrench,
  Sun,
  Radio,
  CheckCircle,
  ArrowRight,
  Hammer,
  Settings,
  Shield,
  Droplets,
} from "lucide-react"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Building2,
    title: "Civil Engineering",
    description: "Comprehensive construction solutions for diverse infrastructure projects",
    features: [
      "Houses and Residential Construction",
      "Commercial Buildings and Plazas",
      "Academic Institutions and Mosques",
      "Housing Societies Development",
      "Industrial Construction",
      "Self-supported Towers",
    ],
    applications: ["Residential Projects", "Commercial Complexes", "Industrial Facilities", "Religious Buildings"],
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description: "Complete electrical solutions for interior, exterior, and heavy-duty applications",
    features: [
      "Interior/Exterior Electrical Work",
      "Road & Street Lighting Systems",
      "Decorative Lighting Solutions",
      "Various Wiring Types (GI, PPR, PVC)",
      "Heavy Electricity Works",
      "Generator Connections and Power Systems",
    ],
    applications: ["Commercial Buildings", "Street Infrastructure", "Industrial Power", "Decorative Installations"],
  },
  {
    icon: Wrench,
    title: "Mechanical Engineering",
    description: "Precision mechanical systems and equipment installation services",
    features: [
      "HVAC System Installation",
      "Mechanical Equipment Setup",
      "Industrial Machinery Installation",
      "Equipment Maintenance Services",
      "Structural Support Systems",
      "Precision Assembly Work",
    ],
    applications: ["Industrial Equipment", "HVAC Systems", "Mechanical Installations", "Equipment Support"],
  },
  {
    icon: Droplets,
    title: "Public Health (Plumbing)",
    description: "Complete water and drainage solutions for all types of construction projects",
    features: [
      "Water Wiring (GI, PPR, PVC)",
      "Drainage Solutions and Systems",
      "Underground Utilities Installation",
      "Executive Rest Rooms",
      "Swimming Pools and Fountains",
      "Health & Safety Engineering",
    ],
    applications: ["Water Supply Systems", "Drainage Networks", "Recreational Facilities", "Sanitation Systems"],
  },
  {
    icon: Sun,
    title: "Solar Infrastructure",
    description: "Complete solar control room construction and renewable energy facility infrastructure",
    features: [
      "Solar Control Room Construction",
      "Civil, Electrical, and Plumbing Works",
      "Paint and Finishing Services",
      "Complete Furnishing Solutions",
      "Monitoring System Installation",
      "Maintenance and Support Services",
    ],
    applications: ["Solar Control Rooms", "Renewable Energy Facilities", "Monitoring Stations", "Power Infrastructure"],
  },
  {
    icon: Radio,
    title: "Mobile Tower Projects",
    description: "End-to-end mobile tower installation and telecommunications infrastructure",
    features: [
      "Complete Civil Works",
      "Electrical System Installation",
      "Mechanical Works and Assembly",
      "Tower Installation Services",
      "Site Preparation and Foundation",
      "Testing and Commissioning",
    ],
    applications: ["Telecommunications Towers", "4G/5G Infrastructure", "Network Expansion", "Rural Connectivity"],
  },
]

const processSteps = [
  {
    step: "A",
    title: "Innovation",
    description: "We bring innovative solutions and cutting-edge technology to every project we undertake.",
  },
  {
    step: "B",
    title: "Dedication",
    description: "Our dedicated team ensures commitment to excellence and timely project completion.",
  },
  {
    step: "C",
    title: "Client Satisfaction",
    description: "Client satisfaction is our top priority, delivering results that exceed expectations.",
  },
  {
    step: "D",
    title: "Institutional Development",
    description: "We focus on continuous institutional development and upgrading our systems and capabilities.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
              Comprehensive <span className="text-accent">Engineering Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              From concept to completion, we deliver integrated Engineering, General Order Supplies, Construction, and
              Building Materials solutions across Pakistan. Our core functions: Construct, Furnish, Maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized engineering expertise across multiple disciplines with quality services customized to your
              budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-sans">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app, idx) => (
                          <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              Our Project Management Core Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The foundation of our approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">{step.step}</span>
                </div>
                <h3 className="text-lg font-sans font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with Peridot Services (Pvt) Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Hammer className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Integrated Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete services in Engineering, General Order Supplies, Construction, and Building Materials under
                  one roof for seamless project delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Decade of Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Since 2015, we have developed a dedicated team and upgraded our systems to pursue new horizons with
                  our motto "We learn, We lead."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Budget-Customized Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deliver quality services customized to our clients' budgets, ensuring satisfied results and
                  constructive resources for every project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
            Ready to Discuss Your Project Requirements?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our engineering experts are ready to provide customized solutions for your infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/quote" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </main>
  )
}
