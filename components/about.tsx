"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Dhanush-harikrishnan",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhanush1505/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:dhanushhari150504@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="aspect-square rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 p-1"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(56, 189, 248, 0.4)",
                  "0 0 20px rgba(56, 189, 248, 0.6)",
                  "0 0 0 rgba(56, 189, 248, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
                <Image
                  src="/dhan.png"
                  alt="Dhanush H"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-slate-800 rounded-full p-3 shadow-lg"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Dhanush H</h3>
            <p className="text-gray-300 mb-6">
              A passionate Full Stack Developer with experience in building Web and Mobile applications using JavaScript
              / React / Node.js and expertise in Data Structures and Algorithms (DSA).
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-teal-500 text-white hover:bg-teal-500/20"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

