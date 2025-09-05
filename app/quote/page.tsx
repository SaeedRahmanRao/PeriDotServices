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
import { CheckCircle, Upload, Phone, Mail, MapPin, Clock, FileText, Send } from "lucide-react"
import { Footer } from "@/components/footer"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    projectSize: "",
    timeline: "",
    budget: "",
    description: "",
  })
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const fileArray = Array.from(files)
      setSelectedFiles(fileArray)
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Create FormData to send files
      const formDataToSend = new FormData()
      
      // Add form fields
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('company', formData.company)
      formDataToSend.append('projectType', formData.projectType)
      formDataToSend.append('projectSize', formData.projectSize)
      formDataToSend.append('timeline', formData.timeline)
      formDataToSend.append('budget', formData.budget)
      formDataToSend.append('description', formData.description)
      
      // Add files
      selectedFiles.forEach(file => {
        formDataToSend.append('files', file)
      })

      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          projectSize: "",
          timeline: "",
          budget: "",
          description: "",
        })
        setSelectedFiles([])
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.error || 'Failed to submit quote request'}`)
      }
    } catch (error) {
      console.error('Quote form error:', error)
      alert('Failed to submit quote request. Please try again.')
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
              Quote Request Submitted Successfully!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your interest in Peridot Services. Our team will review your requirements and get back to
              you within 24 hours with a detailed quote. You will also receive a confirmation email shortly.
            </p>
            <div className="space-y-4 text-left bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold text-foreground">What happens next?</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Our engineering team will review your project requirements</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>We&#39;ll contact you within 24 hours to discuss details</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>You&#39;ll receive a comprehensive quote with project timeline</span>
                </div>
              </div>
            </div>
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
            Get Your <span className="text-accent">Free Quote</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Ready to start your infrastructure project? Share your requirements with us and receive a detailed quote
            within 24 hours. No obligations, completely free.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-sans">Project Details</CardTitle>
                  <p className="text-muted-foreground">
                    Please provide as much detail as possible to help us prepare an accurate quote for your project.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0300 - 4616164"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Your company name (optional)"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select onValueChange={(value) => handleInputChange("projectType", value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Mobile Tower Installation">Mobile Tower Installation</SelectItem>
                            <SelectItem value="Solar Control Room">Solar Control Room</SelectItem>
                            <SelectItem value="Civil Engineering Work">Civil Engineering Work</SelectItem>
                            <SelectItem value="Electrical Engineering Work">Electrical Engineering Work</SelectItem>
                            <SelectItem value="Mechanical Engineering Work">Mechanical Engineering Work</SelectItem>
                            <SelectItem value="Interior Renovation">Interior Renovation</SelectItem>
                            <SelectItem value="Commercial Construction">Commercial Construction</SelectItem>
                            <SelectItem value="Residential Construction">Residential Construction</SelectItem>
                            <SelectItem value="Infrastructure Development">Infrastructure Development</SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectSize">Project Size</Label>
                        <Select onValueChange={(value) => handleInputChange("projectSize", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Small">Small</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Large">Large</SelectItem>
                            <SelectItem value="Enterprise">Enterprise</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3 months">1-3 months</SelectItem>
                            <SelectItem value="3-6 months">3-6 months</SelectItem>
                            <SelectItem value="6-12 months">6-12 months</SelectItem>
                            <SelectItem value="1+ years">1+ years</SelectItem>
                            <SelectItem value="Flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Under 500K PKR">Under 500K PKR</SelectItem>
                            <SelectItem value="500K - 1M PKR">500K - 1M PKR</SelectItem>
                            <SelectItem value="1M - 5M PKR">1M - 5M PKR</SelectItem>
                            <SelectItem value="5M - 10M PKR">5M - 10M PKR</SelectItem>
                            <SelectItem value="10M+ PKR">10M+ PKR</SelectItem>
                            <SelectItem value="To be discussed">To be discussed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe your project requirements, timeline, budget range, and any specific technical specifications..."
                        className="min-h-32"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        required
                      />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="files">Upload Documents (Optional)</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload blueprints, technical specifications, or project documents
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                        </p>
                        <input
                          type="file"
                          id="files"
                          multiple
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2 bg-transparent"
                          onClick={() => document.getElementById("files")?.click()}
                        >
                          Choose Files
                        </Button>
                      </div>
                      
                      {/* Selected Files Display */}
                      {selectedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          <p className="text-sm font-medium text-foreground">Selected Files:</p>
                          <div className="space-y-2">
                            {selectedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                <div className="flex items-center space-x-2">
                                  <FileText className="h-4 w-4 text-accent" />
                                  <span className="text-sm text-foreground">{file.name}</span>
                                  <span className="text-xs text-muted-foreground">
                                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                  </span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile(index)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Submit Quote Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-sans">Why Choose Our Quote Service?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Completely Free</h4>
                      <p className="text-sm text-muted-foreground">No hidden charges or obligations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">Detailed quote within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Expert Analysis</h4>
                      <p className="text-sm text-muted-foreground">Thorough technical assessment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Transparent Pricing</h4>
                      <p className="text-sm text-muted-foreground">Clear breakdown of all costs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-sans">Need Immediate Assistance?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Call Us</p>
                      <p className="text-sm text-muted-foreground">0300 - 4616164</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <p className="text-sm text-muted-foreground">info@peridotservices.com.pk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Visit Our Office</p>
                      <p className="text-sm text-muted-foreground">110- Eden Villas, LDA Avenue 1, Lahore, Pakistan</p>
                    </div>
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
