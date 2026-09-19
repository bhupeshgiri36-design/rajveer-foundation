import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/src/components/Button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export function MadatOffer() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-rf-bg pt-24 pb-24 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl max-w-md w-full text-center mx-4"
        >
          <div className="w-20 h-20 bg-rf-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-rf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-poppins font-bold text-rf-navy mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8">
            Your willingness to help means a lot. Our team will contact you soon with opportunities to contribute.
          </p>
          <Link to="/">
            <Button variant="primary">Return Home</Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-rf-bg pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/madat" className="inline-flex items-center text-gray-500 hover:text-rf-navy mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Madat
        </Link>
        
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-rf-orange p-8 md:p-10 text-white text-center">
            <h1 className="text-3xl font-poppins font-bold mb-2">Offer Help</h1>
            <p className="text-white/90">Join our mission to spread kindness and support humanity.</p>
          </div>
          
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rf-orange focus:border-rf-orange outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mobile Number *</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rf-orange focus:border-rf-orange outline-none transition-all" placeholder="10-digit mobile number" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rf-orange focus:border-rf-orange outline-none transition-all" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Location (City/Area) *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rf-orange focus:border-rf-orange outline-none transition-all" placeholder="Where are you located?" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">How would you like to help? *</label>
                <textarea required rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rf-orange focus:border-rf-orange outline-none transition-all resize-none" placeholder="E.g., Volunteering for events, providing food, educational support..."></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Available Time</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rf-orange focus:border-rf-orange outline-none transition-all bg-white">
                    <option value="">Select availability</option>
                    <option value="weekends">Weekends</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Skills / Resources (Optional)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rf-orange focus:border-rf-orange outline-none transition-all" placeholder="E.g., Medical professional, teaching, vehicle" />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" size="lg" className="w-full h-14 text-lg bg-rf-orange hover:bg-orange-600" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Offer"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
