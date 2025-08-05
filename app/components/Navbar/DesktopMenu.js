import { motion } from 'framer-motion'

export default function DesktopMenu({ navItems }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hidden md:flex space-x-6">
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="relative text-white/80 hover:text-white"
          whileHover={{ y: -2 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {item.name}
          <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
            whileHover={{ width: '100%' }} transition={{ duration: 0.3 }} />
        </motion.button>
      ))}
    </div>
  )
}
