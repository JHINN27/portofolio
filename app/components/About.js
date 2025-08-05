'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Palette, Zap, Heart } from 'lucide-react'
import Image from 'next/image'


export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects untuk berbagai elemen
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  // Data passion/values
  // const values = [
  //   {
  //     icon: <Code2 className="w-8 h-8" />,
  //     title: "Clean Code",
  //     description: "Writing maintainable, scalable, and elegant code"
  //   },
  //   {
  //     icon: <Palette className="w-8 h-8" />,
  //     title: "Beautiful Design",
  //     description: "Creating visually stunning and user-friendly interfaces"
  //   },
  //   {
  //     icon: <Zap className="w-8 h-8" />,
  //     title: "Performance",
  //     description: "Optimizing for speed and exceptional user experience"
  //   },
  //   {
  //     icon: <Heart className="w-8 h-8" />,
  //     title: "User-Centric",
  //     description: "Putting users first in every design decision"
  //   }
  // ]

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background elements dengan parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              ’m passionate about transforming what I learn into impactful digital projects, blending theory with practice.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Turning Knowledge Into Real-World Solutions
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed text-2xl">
                <p>
                 Throughout my studies and projects, I’ve not only acquired new skills but also refined existing ones through both solo and collaborative work. My journey is defined by continuous growth, fueled by a passion for transforming knowledge into practical, real-world solutions.
                </p>
                
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-sm text-gray-400">Years Exp</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-green-400">30+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </motion.div>
              </div> */}
            </motion.div>

            {/* Profile Image dengan hover effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden border border-white/10">
                   <Image
                    src="/Images/profile.jpg" // ganti dengan path fotomu
                    alt="Profile Photo"
                    width={1000}
                    height={50}
                   />
                  </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full backdrop-blur-sm"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Values/Principles Grid */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4 text-blue-400"
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  )
}