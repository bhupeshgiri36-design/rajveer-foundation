import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 to account for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
