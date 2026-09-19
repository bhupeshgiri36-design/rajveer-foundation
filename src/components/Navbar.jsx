import { Link, useLocation } from "react-router-dom"
import { Menu, X, Languages } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "./Button"
import { Logo } from "./Logo"
import { useLanguage } from "@/src/contexts/LanguageContext"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.story"), path: "/rajveer-story" },
    { name: t("nav.work"), path: "/our-work" },
    { name: t("nav.album"), path: "/album" },
    { name: t("nav.madat"), path: "/madat" },
    { name: t("nav.involved"), path: "/get-involved" },
    { name: t("nav.contact"), path: "/contact" },
  ]

  const toggleLang = () => {
    setLang(lang === 'en' ? 'mr' : 'en')
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <Logo className="w-10 h-10 md:w-12 md:h-12" />
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-lg md:text-[22px] leading-tight text-rf-navy">
              RAJVEER <br className="hidden md:block" />
              <span className="md:-mt-1 md:block">FOUNDATION</span>
            </span>
            <span className="font-inter text-[10px] md:text-xs text-rf-navy font-medium tracking-wide">
              {t("nav.tagline")}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-rf-orange relative py-1 whitespace-nowrap ${
                  isActive ? "text-rf-navy font-semibold" : "text-gray-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rf-orange rounded-full"></span>
                )}
              </Link>
            )
          })}
          
          <div className="flex items-center gap-3 ml-2 border-l pl-4 border-gray-200">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 hover:border-rf-navy hover:text-rf-navy transition-all font-medium text-sm"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4" />
              {lang === 'en' ? 'मराठी' : 'English'}
            </button>
            <Button variant="primary" className="font-semibold">{t("nav.donate")}</Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden flex items-center gap-2 z-50">
          <button 
            onClick={toggleLang}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-700 hover:border-rf-navy"
            aria-label="Toggle Language"
          >
            <Languages className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-rf-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col gap-6 xl:hidden overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl font-poppins font-medium ${
                location.pathname === link.path ? "text-rf-orange" : "text-rf-navy"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" size="lg" className="mt-4 w-full">{t("nav.donate")}</Button>
        </div>
      )}
    </header>
  )
}
