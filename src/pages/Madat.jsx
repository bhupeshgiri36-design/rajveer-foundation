import { motion } from "motion/react"
import { Button } from "@/src/components/Button"
import { Link } from "react-router-dom"
import { Heart, HandHelping } from "lucide-react"

export function Madat() {
  return (
    <div className="min-h-screen bg-rf-bg pt-12 pb-24">
      {/* Header */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-rf-navy mb-4"
          >
            Madat
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-rf-orange font-marathi font-medium italic"
          >
            "Ek Haath Madaticha."
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Need Help Option */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="bg-red-50 p-4 rounded-full mb-6">
              <Heart className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-3xl font-poppins font-bold text-rf-navy mb-4">I Need Help</h2>
            <p className="text-gray-600 mb-8 max-w-sm">
              If you or someone you know is in need of support, please reach out. We are here to help.
            </p>
            <Link to="/madat/request" className="w-full">
              <Button variant="primary" size="lg" className="w-full text-lg h-14">
                Request Help
              </Button>
            </Link>
          </motion.div>

          {/* Want to Help Option */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="bg-orange-50 p-4 rounded-full mb-6">
              <HandHelping className="w-12 h-12 text-rf-orange" />
            </div>
            <h2 className="text-3xl font-poppins font-bold text-rf-navy mb-4">I Want to Help</h2>
            <p className="text-gray-600 mb-8 max-w-sm">
              Become a part of our mission. Your time and resources can change someone's entire day.
            </p>
            <Link to="/madat/offer" className="w-full">
              <Button variant="outline" size="lg" className="w-full text-lg h-14 border-2">
                Offer Help
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
