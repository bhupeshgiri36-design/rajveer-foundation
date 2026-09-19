import { Heart, BookOpen, Users, Leaf } from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { useLanguage } from "@/src/contexts/LanguageContext"

export function MissionCards() {
  const { t } = useLanguage()
  
  const cards = [
    {
      title: t("mission.madatTitle"),
      subtitle: t("mission.madatSub"),
      icon: Heart,
      color: "text-rose-500",
      link: "/madat"
    },
    {
      title: t("mission.eduTitle"),
      subtitle: t("mission.eduSub"),
      icon: BookOpen,
      color: "text-emerald-500",
      link: "/our-work#education"
    },
    {
      title: t("mission.humTitle"),
      subtitle: t("mission.humSub"),
      icon: Users,
      color: "text-orange-500",
      link: "/get-involved"
    },
    {
      title: t("mission.motTitle"),
      subtitle: t("mission.motSub"),
      icon: Leaf,
      color: "text-purple-600",
      link: "/motivation"
    }
  ]

  return (
    <section className="relative z-20 -mt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl shadow-2xl shadow-navy-900/10 overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {cards.map((card, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={card.title}
              >
                <Link to={card.link} className="block group h-full">
                  <div className="p-8 text-center h-full flex flex-col items-center justify-center hover:bg-gray-50/50 transition-colors">
                    <div className={`${card.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="w-12 h-12" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-rf-navy mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      {card.subtitle}
                    </p>
                    <span className="text-cyan-600 font-medium text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                      {t("mission.knowMore")} <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
