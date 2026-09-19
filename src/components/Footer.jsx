import { Link } from "react-router-dom"
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import { Logo } from "./Logo"
import { useLanguage } from "@/src/contexts/LanguageContext"

export function Footer() {
  const { t } = useLanguage()
  
  const quickLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.story"), path: "/rajveer-story" },
    { name: t("nav.album"), path: "/album" },
    { name: t("nav.madat"), path: "/madat" },
    { name: t("nav.involved"), path: "/get-involved" },
    { name: t("nav.contact"), path: "/contact" },
  ]

  const ourFocus = [
    t("footer.f1"),
    t("footer.f2"),
    t("footer.f3"),
    t("footer.f4"),
  ]

  return (
    <footer className="bg-rf-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-12 h-12" isDark={true} />
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl leading-none">
                  RAJVEER
                </span>
                <span className="font-poppins font-bold text-xl leading-none">
                  FOUNDATION
                </span>
                <span className="font-inter text-xs text-gray-300 mt-1 tracking-wide">
                  {t("footer.tagline")}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-poppins font-semibold text-lg mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white hover:underline text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Focus */}
          <div className="lg:col-span-3">
            <h4 className="font-poppins font-semibold text-lg mb-4">{t("footer.ourFocus")}</h4>
            <ul className="space-y-2">
              {ourFocus.map((focus) => (
                <li key={focus} className="text-gray-300 text-sm">
                  {focus}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h4 className="font-poppins font-semibold text-lg mb-4">{t("footer.connect")}</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            
            <blockquote className="italic text-gray-300 text-sm whitespace-pre-line">
              {t("footer.quote")}
              <footer className="text-xs text-gray-400 mt-2">{t("footer.author")}</footer>
            </blockquote>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Rajveer Foundation. {t("footer.rights")}</p>
          <p>{t("footer.tagline")} | {t("footer.bottomMsg")}</p>
        </div>
      </div>
    </footer>
  )
}
