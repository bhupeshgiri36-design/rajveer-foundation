import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/src/components/Layout"
import { Home } from "@/src/pages/Home"
import { Madat } from "@/src/pages/Madat"
import { MadatRequest } from "@/src/pages/MadatRequest"
import { MadatOffer } from "@/src/pages/MadatOffer"
import { LanguageProvider } from "@/src/contexts/LanguageContext"

// Placeholder pages for incomplete routes
const PlaceholderPage = ({ title }) => (
  <div className="min-h-[70vh] flex items-center justify-center bg-rf-bg">
    <div className="text-center">
      <h1 className="text-4xl font-poppins font-bold text-rf-navy mb-4">{title}</h1>
      <p className="text-gray-600 text-lg">This page is currently under development.</p>
    </div>
  </div>
)

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="madat" element={<Madat />} />
            <Route path="madat/request" element={<MadatRequest />} />
            <Route path="madat/offer" element={<MadatOffer />} />
            
            {/* Placeholder Routes */}
            <Route path="about" element={<PlaceholderPage title="About Rajveer Foundation" />} />
            <Route path="rajveer-story" element={<PlaceholderPage title="Rajveer's Story" />} />
            <Route path="our-work" element={<PlaceholderPage title="Our Work" />} />
            <Route path="album" element={<PlaceholderPage title="Album" />} />
            <Route path="get-involved" element={<PlaceholderPage title="Get Involved" />} />
            <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="motivation" element={<PlaceholderPage title="Motivation" />} />
            <Route path="donate" element={<PlaceholderPage title="Donate Now" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
