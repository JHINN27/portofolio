'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0)

  // Data projects dengan detail lengkap
  const projects = [
    {
      id: 1,
      title: "GetHire Landing Page",
      subtitle: " ",
      description: "",
      longDescription: "",
      technologies: ["Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/JHINN27/GetHire",
      liveUrl: "",
      image: "/Images/project1.jpg",
      category: "Front End",
      year: "2025",
      color: "blue"
    },
    {
      id: 2,
      title: "Jetflix",
      subtitle: "",
      description: "",
      longDescription: "",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/JHINN27/Jetflix",
      liveUrl: "",
      image: "/Images/project2.jpg",
      category: "Front End",
      year: "2025",
      color: "purple"
    },
    {
      id: 3,
      title: "Portfolio Website",
      subtitle: "",
      description: "",
      longDescription: "",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
      githubUrl: "",
      liveUrl: "",
      image: "/Images/project3.jpg",
      category: "Front End",
      year: "2025",
      color: "green"
    },
  
  ]

  // Get color classes based on project color
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        gradient: "from-blue-500/20 to-blue-600/10",
        text: "text-blue-400",
        button: "from-blue-500 to-blue-600"
      },
      purple: {
        gradient: "from-purple-500/20 to-purple-600/10",
        text: "text-purple-400",
        button: "from-purple-500 to-purple-600"
      },
      green: {
        gradient: "from-green-500/20 to-green-600/10",
        text: "text-green-400",
        button: "from-green-500 to-green-600"
      },
      pink: {
        gradient: "from-pink-500/20 to-pink-600/10",
        text: "text-pink-400",
        button: "from-pink-500 to-pink-600"
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
           
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {projects.map((project, index) => {
                const colorClasses = getColorClasses(project.color)
                const isSelected = selectedProject === index

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => setSelectedProject(index)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      isSelected 
                        ? `bg-gradient-to-r ${colorClasses.gradient} border-2 ${colorClasses.text.replace('text-', 'border-')}` 
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                    data-interactive
                    whileHover={{ scale: isSelected ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className={`text-xl font-bold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                            {project.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            isSelected ? colorClasses.text : 'text-gray-500'
                          } bg-white/10`}>
                            {project.category}
                          </span>
                        </div>
                        <p className={`text-sm ${isSelected ? 'text-gray-200' : 'text-gray-400'} mb-2`}>
                          {project.subtitle}
                        </p>
                        <p className={`text-sm ${isSelected ? 'text-gray-300' : 'text-gray-500'} line-clamp-2`}>
                          {project.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isSelected ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className={`w-5 h-5 ${isSelected ? colorClasses.text : 'text-gray-500'}`} />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                >
                
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                      {/* <Img 
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        className="w-full h-full object-cover"
                      /> */}
                      <Image
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        className="object-cover"
                        width={1000}
                        height={10}
                      />

                    
                      <div className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(projects[selectedProject].color).gradient} opacity-40`} />
                  </div>


                 
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {projects[selectedProject].title}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {projects[selectedProject].year}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {projects[selectedProject].longDescription}
                    </p>

                   
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    
                    <div className="flex gap-4">
                      {/* <motion.a
                        href={projects[selectedProject].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${getColorClasses(projects[selectedProject].color).button} rounded-full text-white font-medium`}
                        data-interactive
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                       */}
                      <motion.a
                        href={projects[selectedProject].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/10"
                        data-interactive
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* View All Projects CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/20 rounded-full text-white font-medium hover:bg-white/10"
              data-interactive
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.button>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}