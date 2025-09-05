import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Building2, Zap, Wrench, Users, Target, Eye, Award, Shield, Clock } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
              Peridot Services (Pvt) Ltd. - Where <span className="text-accent">Excellence</span> is a Habit
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Since 2015, we have been delivering quality services in Engineering, General Order Supplies, Construction,
              and Building Materials. Operating under our motto &quot;We learn, We lead,&quot; we approach a decade in the
              construction industry with a dedicated team and upgraded systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-sans font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality services in Engineering, General Order Supplies, Construction, and Building
                  Materials customized to our clients&#39; budgets. We are committed to delivering constructive resources
                  and satisfied results through our core principles of Innovation, Dedication, Client Satisfaction, and
                  Institutional Development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-sans font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become a globally recognized institute of Engineering and Supplies, known for constructive
                  resources and satisfied results. We envision expanding our horizons while maintaining our commitment
                  to excellence and continuing to learn and lead in the construction industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering and construction solutions across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Civil Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specializing in Houses, Commercial Buildings, Academic Institutions, Mosques, Plazas, Housing
                  Societies, Industrial Construction, and Self-supported Towers with complete structural solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Electrical Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interior/Exterior electrical work, Road & Street Lights, Decorative lighting, various Wiring types,
                  Heavy Electricity Works, and complete electrical installations for all project types.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Mechanical & Plumbing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Water Wiring (GI, PPR, PVC), Drainage Solutions, Underground Utilities, Executive Rest Rooms, Swimming
                  Pools, Fountains, and comprehensive Health & Safety Engineering solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              Why Choose Peridot Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with proven project delivery across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">Decade of Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Approaching 10 years of successful project delivery since our establishment in 2015
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">Dedicated Team</h3>
              <p className="text-muted-foreground text-sm">
                Experienced professionals with upgraded systems and commitment to continuous learning and leadership
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">Trusted by Major Clients</h3>
              <p className="text-muted-foreground text-sm">
                Serving prestigious clients including KFC, Behria Town, FWO, NLC, and Al-Shifa Trust Hospital
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">Budget-Customized Solutions</h3>
              <p className="text-muted-foreground text-sm">
                Quality services tailored to meet our clients&#39; specific budget requirements and project needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&#39;s discuss how our engineering expertise can bring your infrastructure vision to life.
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

      {/* Footer */}
      <Footer />
    </main>
  )
}
