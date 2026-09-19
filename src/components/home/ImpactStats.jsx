import { motion } from "motion/react"
import { Users, GraduationCap, Heart, Handshake } from "lucide-react"
import { useLanguage } from "@/src/contexts/LanguageContext"
import { useEffect, useState } from "react"
import { supabase } from "@/src/lib/supabase"

export function ImpactStats() {
  const { t } = useLanguage()
  const [apiStats, setApiStats] = useState(null)
  
  useEffect(() => {
    // Fetch data directly from Supabase
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase
          .from('impact_stats')
          .select('*')
          .single()
        
        if (error) throw error;
        if (data) {
          setApiStats({
            familiesSupported: data.families_supported,
            educationHelped: data.education_helped,
            peopleReached: data.people_reached,
            livesTouched: data.lives_touched
          });
        }
      } catch (err) {
        console.error("Failed to fetch stats from Supabase:", err)
      }
    };
    
    fetchStats();
  }, [])

  const stats = [
    {
      icon: Users,
      value: apiStats?.familiesSupported || "...",
      label: t("impact.families"),
      color: "text-rose-500"
    },
    {
      icon: GraduationCap,
      value: apiStats?.educationHelped || "...",
      label: t("impact.education"),
      color: "text-red-500"
    },
    {
      icon: Heart,
      value: apiStats?.peopleReached || "...",
      label: t("impact.people"),
      color: "text-rose-500"
    },
    {
      icon: Handshake,
      value: apiStats?.livesTouched || "...",
      label: t("impact.lives"),
      color: "text-red-500"
    }
  ]

  return (
    <section className="py-12 bg-[#FFF9F5]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left"
            >
              <div className={`${stat.color}`}>
                <stat.icon className="w-12 h-12 md:w-14 md:h-14 stroke-[1.5]" />
              </div>
              <div>
                <h4 className={`text-3xl md:text-[2.5rem] font-poppins font-bold text-rf-navy leading-none mb-1 `}>
                  {stat.value}
                </h4>
                <p className="text-gray-700 font-medium text-xs md:text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
