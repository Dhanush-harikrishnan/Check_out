"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      image: "/studyAppLogo.png",
      projectName: "Study App",
      projectDesc: "Developed a Study app with video meetings, course management, and admin functionalities.",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      link: "https://student-project1.onrender.com",
      github: "https://github.com/Dhanush-harikrishnan/student_project1.git",
    },
    {
      image: "/shoppingAppLogo.png",
      projectName: "Shopping App",
      projectDesc: "Created a shopping app with product browsing, cart, payment functionalities, and admin functions.",
      technologies: ["React", "Express", "MongoDB", "Stripe"],
      link: "https://snapshot-7jit.onrender.com",
      github: "https://github.com/Dhanush-harikrishnan/shoppy.git",
    },
    {
      image: "/transaction.png",
      projectName: "Secure Transactions",
      projectDesc:
        "Implemented secure transactions and stored the session in a Browser instead of a Local machine to reduce the risk.",
      technologies: ["JavaScript", "Node.js", "Security"],
      link: "https://snapshot-7jit.onrender.com",
      github: "https://github.com/Dhanush-harikrishnan/shoppy.git",
    },
    {
      image: "/network.webp",
      projectName: "Networking System",
      projectDesc: "Created a simple networking system using Java with the help of WebSocket.",
      technologies: ["Java", "WebSocket", "Networking"],
      link: "#",
      github: "https://github.com/Dhanush-harikrishnan/Networking.git",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-950 to-transparent"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
              }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-teal-500 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.projectName}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.projectName}</h3>
                <p className="text-gray-300 mb-4">{project.projectDesc}</p>

                <div className="flex gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-500 text-white hover:bg-teal-500/20"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Site
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-white hover:bg-slate-700"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

