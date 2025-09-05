"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.error || 'Failed to submit form'}`)
      }
    } catch (error) {
      console.error('Contact form error:', error)
      alert('Failed to submit form. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for contacting Peridot Engineering. We&#39;ve received your message and will respond within 24
              hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Ready to discuss your infrastructure project? Our engineering experts are here to help. Contact us today for
            consultation, quotes, or any questions about our services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information & Form */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground">Office Address</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Peridot Services (Pvt) Ltd.
                      <br />
                      110- Eden Villas, LDA Avenue 1
                      <br />
                      Lahore, Pakistan
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground">Phone & Email</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Phone:</span> 0300 - 4616164
                      </p>
                      <p>
                        <span className="font-medium">Secondary:</span> 0334-5062494
                      </p>
                      <p>
                        <span className="font-medium">Website:</span> www.peridotservices.com.pk
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border md:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground mb-1">Office Hours</p>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Emergency Support</p>
                        <p>24/7 support available for</p>
                        <p>ongoing project emergencies</p>
                        <p>Call: 0300 - 4616164</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-sans">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Have a question or want to discuss your project? Fill out the form below and we&#39;ll get back to you
                    promptly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0300 - 4616164"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select onValueChange={(value) => handleInputChange("subject", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                            <SelectItem value="project-consultation">Project Consultation</SelectItem>
                            <SelectItem value="quote-request">Quote Request</SelectItem>
                            <SelectItem value="technical-support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="career">Career Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your inquiry or project requirements..."
                        className="min-h-32"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-sans">Find Our Office</CardTitle>
                  <p className="text-muted-foreground">
                    Located in Lahore, our office is easily accessible and serves clients across Pakistan with our
                    comprehensive engineering and construction services.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-96 rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1234567890123!2d74.12345678901234!3d31.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905d123456789%3A0x1234567890abcdef!2sLDA%20Avenue%201%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1234567890123!5m2!1sen!2spk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Peridot Services Office Location"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-sans">Getting Here</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">By Car</h4>
                    <p className="text-sm text-muted-foreground">
                      Easily accessible from major roads in Lahore. Ample parking available at our office location.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">By Public Transport</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple bus routes serve the LDA Avenue area. Convenient access from various parts of Lahore.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Service Areas</h4>
                    <p className="text-sm text-muted-foreground">
                      We serve clients across Pakistan including Islamabad, Rawalpindi, KPK, Punjab, and Sindh.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
