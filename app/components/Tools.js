'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Tools() {
  const tools = [
    { name: "Visual Studio Code", description: "Code Editor", logo: "/tools/vscode.png" },
    { name: "React JS", description: "Framework", logo: "/tools/react.png" },
    { name: "Next JS", description: "Framework", logo: "/tools/nextjs.png" },
    { name: "Tailwind CSS", description: "Framework", logo: "/tools/tailwind.png" },
    { name: "Bootstrap", description: "Framework", logo: "/tools/bootstrap.png" },
    { name: "Javascript", description: "Language", logo: "/tools/js.png" },
    { name: "Node JS", description: "Javascript Runtime", logo: "/tools/nodejs.png" },
    { name: "Github", description: "Repository", logo: "/tools/github.png" },
    { name: "Canva", description: "Design App", logo: "/tools/canva.png" },
    { name: "Figma", description: "Design App", logo: "/tools/figma.png" },
    { name: "HTML", description: "Language", logo: "/tools/html.png" },
    { name: "CSS", description: "Language", logo: "/tools/css.png" },
  ]

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          My Tools & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-4 bg-[#111] border border-white/10 rounded-lg"
            >
              <div className="flex-shrink-0 w-10 h-10">
                <Image 
                  src={tool.logo} 
                  alt={tool.name} 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-white font-semibold">{tool.name}</p>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
