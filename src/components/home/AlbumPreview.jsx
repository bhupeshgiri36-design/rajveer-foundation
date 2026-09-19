import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { useLanguage } from "@/src/contexts/LanguageContext"

const placeholderImages = [
  "https://images.unsplash.com/photo-1519340241574-2ceb54dc4bf4?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594732832278-abd644401426?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519340241574-2ceb54dc4bf4?q=80&w=600&auto=format&fit=crop"
]

export function AlbumPreview() {
  const { t } = useLanguage()
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-rf-navy mb-2">
              {t("album.title")}
            </h2>
            <p className="text-gray-600 md:text-lg">
              {t("album.subtitle")}
            </p>
          </div>
          <Link to="/album" className="text-rf-navy font-bold hover:text-rf-orange flex items-center gap-2 transition-colors pb-1 border-b-2 border-transparent hover:border-rf-orange text-sm md:text-base">
            {t("album.viewAll")} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {placeholderImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl overflow-hidden aspect-square bg-gray-100"
            >
              <img 
                src={src} 
                alt={`Memory ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
