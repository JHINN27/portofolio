// Import semua komponen yang dibutuhkan
import Header from './components/Header'
import Hero from './components/Hero' 
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Tools from './components/Tools'


// Komponen utama homepage
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header dengan navigasi */}
      <Header />
      
      {/* Section hero dengan nama */}
      <Hero />
      
      {/* Section tentang diri */}
      <About />

      {/* Secction tentang skills */}
      <Tools/>
      
      {/* Section projects */}
      <Projects />
      
      {/* Section contact form */}
      <Contact />
      
   
    </main>
  )
}