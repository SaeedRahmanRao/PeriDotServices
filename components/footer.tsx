import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14">
                <Image 
                  src="/peridotlogo.png" 
                  alt="Peridot Services Logo" 
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Peridot Services</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Leading provider of engineering, construction, and building material services across Pakistan since 2015. 
              Where excellence is a habit.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/share/1C97HBXki6/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.instagram.com/peridot_.services?igsh=bjlqNHB6dDFzc3Zw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-sm hover:text-accent transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-sm hover:text-accent transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#civil" className="text-sm hover:text-accent transition-colors">
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#electrical" className="text-sm hover:text-accent transition-colors">
                  Electrical Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#mechanical" className="text-sm hover:text-accent transition-colors">
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#solar" className="text-sm hover:text-accent transition-colors">
                  Solar Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services#tower" className="text-sm hover:text-accent transition-colors">
                  Tower Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>110- Eden Villas, LDA Avenue 1,</p>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p>0300 - 4616164</p>
                  <p>0334-5062494</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p>www.peridotservices.com.pk</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Peridot Services (Pvt) Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link 
                href="https://www.kodnod.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Powered by Kodnod
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
