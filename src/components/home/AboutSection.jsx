import { Button } from "../Button"
import { motion } from "motion/react"
import { useLanguage } from "@/src/contexts/LanguageContext"

export function AboutSection() {
  const { t } = useLanguage()
  return (
    <section className="py-16 md:py-24 bg-rf-bg relative overflow-hidden">
      
      {/* Background Hands Image on right */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 opacity-30 lg:opacity-100 bg-contain bg-right bg-no-repeat pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000&auto=format&fit=crop')",
          maskImage: 'linear-gradient(to right, transparent, black 50%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%)'
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-semibold text-gray-800 mb-1">
              {t("about.title1")}
            </h2>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-rf-navy mb-8 leading-tight">
              {t("about.title2")}
            </h2>
            <div className="space-y-4 text-gray-700 md:text-lg mb-8 leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
            <Button variant="primary" size="lg" className="px-8 font-semibold">{t("about.readMore")}</Button>
          </motion.div>

          {/* Quote Card & Vertical Text */}
          <div className="flex-1 w-full flex justify-end relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F0F8FF] rounded-3xl p-8 md:p-12 shadow-sm relative max-w-lg z-10 border border-blue-50"
            >
              {/* Large Quotes */}
              <div className="absolute top-6 left-6 text-blue-200/50 text-8xl font-serif leading-none rotate-180">"</div>
              <div className="absolute bottom-[-2rem] right-8 text-blue-200/50 text-8xl font-serif leading-none">"</div>
              
              <div className="relative z-10 py-6">
                <p className="text-xl md:text-2xl font-poppins italic text-rf-navy text-center mb-6 leading-relaxed font-medium whitespace-pre-line">
                  {t("about.quote")}
                </p>
                <p className="text-center text-rf-navy font-bold tracking-wide">
                  {t("about.author")}
                </p>
              </div>
            </motion.div>

            {/* Vertical Text on Far Right (desktop only) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden xl:flex flex-col items-end justify-center absolute -right-4 top-0 bottom-0 text-gray-400 font-poppins text-lg tracking-widest leading-loose"
            >
              <span>{t("about.v1")}</span>
              <span>{t("about.v2")}</span>
              <span>{t("about.v3")}</span>
              <span>{t("about.v4")}</span>
              <span>{t("about.v5")}</span>
              <span>{t("about.v6")}</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
