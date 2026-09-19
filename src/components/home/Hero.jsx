import { Button } from "../Button"
import { motion } from "motion/react"
import { useLanguage } from "@/src/contexts/LanguageContext"

export function Hero() {
  const { t, lang } = useLanguage()
  return (
    <section className="relative pt-24 pb-48 lg:pt-32 lg:pb-56 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2000&auto=format&fit=crop')", // A sunset/sunrise vibe
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-rf-orange font-semibold tracking-widest uppercase mb-1 text-sm md:text-base">
              {t("hero.memory")}
            </p>
            <h1 className={`text-5xl md:text-7xl font-extrabold text-rf-navy leading-[1.1] mb-1 ${lang === 'mr' ? 'font-marathi-display' : 'font-poppins'}`}>
              {t("hero.name")}
            </h1>
            <h2 className={`text-4xl md:text-6xl font-extrabold text-rf-orange leading-tight mb-4 ${lang === 'mr' ? 'font-marathi-display' : 'font-poppins'}`}>
              {t("hero.foundation")}
            </h2>
            <p className="text-xl md:text-2xl text-rf-navy font-semibold mb-6">
              {t("hero.tagline")}
            </p>
            
            <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-sm whitespace-pre-line">
              {t("hero.desc")}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" className="font-semibold shadow-lg shadow-orange-500/30">
                {t("hero.join")}
              </Button>
              <Button variant="outline" size="lg" className="bg-white border-2 border-rf-navy text-rf-navy hover:bg-rf-navy hover:text-white font-semibold">
                {t("hero.story")}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Quote Overlay in bottom right of hero area */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 md:mt-0 md:absolute md:bottom-24 md:right-8 lg:bottom-32 lg:right-12 flex justify-center md:block"
        >
          <div className="relative max-w-sm md:max-w-none">
            <div className="relative overflow-hidden bg-rf-navy border border-white/10 px-6 py-5 md:px-10 md:py-8 rounded-[2rem] rounded-br-sm shadow-2xl shadow-navy-900/50">
              {/* Noise Texture */}
              <div 
                className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
              ></div>
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              
              <p className="font-poppins font-medium text-xl md:text-3xl italic text-white text-right relative z-10 whitespace-pre-line leading-relaxed">
                {t("hero.quote")}
              </p>
            </div>
            
            {/* Speech Bubble Tail */}
            <svg 
              className="absolute -bottom-4 right-2 md:-bottom-5 md:right-0 w-6 h-6 md:w-8 md:h-8 text-rf-navy" 
              viewBox="0 0 32 32" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0 L32 0 L32 32 C32 16 16 4 0 0 Z" />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
