import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our engineering experts today. We&#39;ll provide you with a detailed consultation and free
            project quote within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
              <Link href="/quote" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>📞 0300 - 4616164 | 🌐 www.peridotservices.com.pk</p>
          </div>
        </div>
      </div>
    </section>
  )
}
