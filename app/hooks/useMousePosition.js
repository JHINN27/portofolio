'use client'

import { useState, useEffect } from 'react'

// Custom hook untuk tracking posisi mouse
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Add event listener untuk mouse move
    window.addEventListener('mousemove', updateMousePosition)

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}