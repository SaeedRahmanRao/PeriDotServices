"use client"

import { Users, Building, Award, Clock } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const stats = [
    {
      icon: Building,
      number: 100,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered across Pakistan",
    },
    {
      icon: Users,
      number: 25,
      suffix: "+",
      label: "Major Clients",
      description: "Including KFC, Behria Town, FWO & NLC",
    },
    {
      icon: Award,
      number: 10,
      suffix: "+",
      label: "Years Experience",
      description: "Established in 2015, approaching a decade",
    },
    {
      icon: Clock,
      number: 24,
      suffix: "/7",
      label: "Support Available",
      description: "Round-the-clock project assistance",
    },
  ]

  return (
    <section className="py-16 bg-muted/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Our commitment to excellence has made us a preferred partner for infrastructure development across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-accent/20 hover:scale-110 hover:shadow-lg">
                  <stat.icon className="h-8 w-8 text-accent transition-transform duration-300 hover:scale-110" />
                </div>
                <div
                  className={`text-3xl md:text-4xl font-bold text-foreground mb-2 transition-colors duration-300 hover:text-accent ${
                    isVisible ? "animate-bounce" : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms`, animationDuration: "2s", animationIterationCount: "1" }}
                >
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1 transition-colors duration-300 hover:text-accent/80">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
