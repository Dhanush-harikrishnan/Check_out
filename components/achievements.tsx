"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import Image from "next/image"

export default function Achievements() {
  const achievements = [
    {
      title: "Smart India Hackathon 2023",
      subtitle: "Developed a solution to improve data transfer efficiency using packet data in blockchain.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Web Development BootCamp",
      subtitle: "Completed the Web Development BootCamp taught by Dr. Angela Yu on Udemy.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Java Masterclass",
      subtitle: "Completed the Java Masterclass course by Tim Buchalka on Udemy.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Participated in Hackathon conducted By PEC",
      subtitle: "Wonderful experience gained by participating in Hackathon conducted by PEC.",
      image: "/placeholder.svg?height=100&width=100",
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
    <section id="achievements" className="py-20 bg-slate-950 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-900 to-transparent"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Achievements And Certifications 🏆</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Certifications and accomplishments in software development and coding competitions
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
              }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500 transition-all duration-300 flex gap-4"
            >
              <motion.div className="flex-shrink-0" whileHover={{ rotate: 5 }}>
                <div className="bg-slate-700 rounded-lg p-2 w-16 h-16 flex items-center justify-center">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  {achievement.title}
                </h3>
                <p className="text-gray-300">{achievement.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

