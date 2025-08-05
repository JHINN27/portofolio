
import './globals.css'

// Metadata untuk SEO dengan Apple-inspired branding
export const metadata = {
  title: 'Arlin Lutfi',
  description: '',
  keywords: 'web developer, creative developer, UI/UX, React, Next.js',
}

// Root layout dengan custom cursor support
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-black text-white overflow-x-hidden">
       
        {children}
      </body>
    </html>
  )
}