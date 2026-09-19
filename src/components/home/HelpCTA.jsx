import { Button } from "../Button"
import { motion } from "motion/react"
import { useLanguage } from "@/src/contexts/LanguageContext"

export function HelpCTA() {
  const { t } = useLanguage()
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e6f0ed]/90 via-[#e6f0ed]/50 to-[#e6f0ed]/30 z-0 mix-blend-screen"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-rf-navy mb-4">
            {t("help.title")}
          </h2>
          <p className="text-gray-800 text-lg mb-8 font-medium whitespace-pre-line">
            {t("help.subtitle")}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" className="px-8 shadow-lg shadow-orange-500/20 font-semibold">
              {t("help.donate")}
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent border-2 border-rf-navy text-rf-navy hover:bg-rf-navy hover:text-white font-semibold">
              {t("help.involved")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block text-right"
        >
          <h3 className="text-3xl lg:text-5xl font-serif italic text-rf-navy/90 leading-tight whitespace-pre-line">
            {t("help.quote")}
          </h3>
        </motion.div>

      </div>
    </section>
  )
}
