"use client"

import { Shield, Zap, Users, Award, Clock, CheckCircle } from "lucide-react"
import { useEffect, useState, useRef } from "react"

function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export function FeaturesSection() {
  const { ref, isVisible } = useIntersectionObserver()

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring highest quality standards in every project delivery",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Streamlined workflows and experienced teams enable rapid project completion",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified engineers with specialized expertise in civil, electrical, and mechanical engineering",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning projects and partnerships with leading construction and engineering companies",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services for all installations",
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "All projects meet regulatory standards and environmental compliance requirements",
    },
  ]

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Peridot Services?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with innovative solutions to deliver engineering and construction projects 
            that power Pakistan&#39;s infrastructure development since 2015
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg p-6 border border-border transition-all duration-700 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 hover:-translate-y-2 group cursor-pointer ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3">
                <feature.icon className="h-6 w-6 text-accent transition-all duration-300 group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-accent">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                {feature.description}
              </p>

              <div className="w-0 h-0.5 bg-accent mt-4 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
