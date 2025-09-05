"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building2, Zap, Wrench } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="absolute inset-0 opacity-5 animate-pulse">
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            backgroundImage: `
            linear-gradient(rgba(31, 41, 55, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(31, 41, 55, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-foreground mb-6 text-balance transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Where <span className="text-accent animate-pulse">Excellence</span> is a{" "}
            <span className="text-accent animate-pulse">Habit</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Peridot Services (Pvt) Ltd. has been delivering excellence in Engineering, General Order Supplies,
            Construction, and Building Materials since 2015. We provide quality services customized to our clients&#39;
            budgets with our motto &quot;We learn, We lead.&quot;
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/quote" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-accent/10"
            >
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-700 transform hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mb-4 border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/50 hover:bg-accent/5">
                <Building2 className="h-8 w-8 text-accent transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="font-sans font-semibold text-lg text-foreground mb-2">Construction</h3>
              <p className="text-muted-foreground text-sm">
                Houses, Commercial Buildings, Plazas & Industrial Construction
              </p>
            </div>

            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-900 transform hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mb-4 border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/50 hover:bg-accent/5">
                <Zap className="h-8 w-8 text-accent transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="font-sans font-semibold text-lg text-foreground mb-2">Engineering</h3>
              <p className="text-muted-foreground text-sm">Civil, Electrical & Mechanical Engineering Solutions</p>
            </div>

            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-1100 transform hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mb-4 border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/50 hover:bg-accent/5">
                <Wrench className="h-8 w-8 text-accent transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="font-sans font-semibold text-lg text-foreground mb-2">General Supplies</h3>
              <p className="text-muted-foreground text-sm">Building Materials & General Order Supplies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
