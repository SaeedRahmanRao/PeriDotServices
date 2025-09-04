"use client"

import { Star, Quote } from "lucide-react"
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

export function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver()

  const testimonials = [
    {
      name: "Green Building Technologies",
      position: "Technology Sector",
      company: "Giga Mall Islamabad Project",
      content:
        "Peridot Services delivered exceptional quality on our Giga Mall project. Their electrical expertise and professional approach exceeded our expectations.",
      rating: 5,
    },
    {
      name: "KFC Pakistan",
      position: "Food & Beverage",
      company: "North Region Renovation",
      content:
        "The renovation work on our KFC branches was completed on time and within budget. Their attention to detail and quality standards are outstanding.",
      rating: 5,
    },
    {
      name: "AL IMAM Enterprises",
      position: "Telecommunications",
      company: "Mobile Tower Projects",
      content:
        "Peridot Services has been instrumental in our mobile tower projects across Pakistan. Their technical expertise and reliability make them our preferred partner.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our engineering solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg p-6 border border-border relative transition-all duration-700 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 hover:border-accent/30 group cursor-pointer ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Quote className="h-8 w-8 text-accent/20 absolute top-4 right-4 transition-all duration-300 group-hover:text-accent/40 group-hover:scale-110 group-hover:rotate-12" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current transition-all duration-300 hover:scale-125"
                    style={{
                      animationDelay: `${isVisible ? i * 100 : 0}ms`,
                      animation: isVisible ? "pulse 2s infinite" : "none",
                    }}
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4 transition-all duration-300 group-hover:border-accent/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <img 
                      src="/peridotlogo.png" 
                      alt="Peridot Services Logo" 
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-accent font-medium transition-all duration-300 group-hover:text-accent/80">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-accent/60 transition-all duration-500 group-hover:w-full rounded-b-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
