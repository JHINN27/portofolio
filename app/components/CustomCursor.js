'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Fungsi untuk detect hover pada interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.matches('button, a, input, textarea, [data-interactive]')
      setIsHovering(isInteractive)
    }

    // Add event listeners
    document.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: x - 8,
          y: y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
    </>
  )
}