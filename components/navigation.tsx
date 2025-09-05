"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-border ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Image 
                src="/peridotlogo.png" 
                alt="Peridot Services Logo" 
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-sans font-semibold text-xl text-foreground transition-colors duration-300 group-hover:text-accent">
              Peridot Services
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="relative text-foreground hover:text-primary transition-all duration-300 group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="relative text-foreground hover:text-primary transition-all duration-300 group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/projects"
              className="relative text-foreground hover:text-primary transition-all duration-300 group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/clients"
              className="relative text-foreground hover:text-primary transition-all duration-300 group"
            >
              Clients
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="relative text-foreground hover:text-primary transition-all duration-300 group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-foreground hover:text-primary transition-all duration-300 group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/quote">Get Free Quote</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="transition-all duration-300 hover:scale-110"
            >
              <div className="transition-transform duration-300">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
            <Link
              href="/"
              className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-accent/10 rounded-md transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-accent/10 rounded-md transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-accent/10 rounded-md transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/clients"
              className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-accent/10 rounded-md transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-accent/10 rounded-md transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-accent/10 rounded-md transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
