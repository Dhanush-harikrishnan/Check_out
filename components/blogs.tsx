"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Blogs() {
  const blogs = [
    {
      url: "https://lace-lipstick-b05.notion.site/Leetcode-Dhanush-2a211441dd9f480e92f00e5c7d082ef2?pvs=74",
      title: "Leetcode DSA",
      description: "A collection of all the problems I have solved on Leetcode and my approach to solving them.",
    },
    {
      url: "#",
      title: "160 Days coding journey",
      description: "A blog about my journey of 160 days of coding and how I improved my problem-solving skills.",
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
    <section id="blogs" className="py-20 bg-slate-900 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold text-white mb-4">Blogs</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Works published and journey of coding</p>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
              }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500 transition-all duration-300"
            >
              <motion.div className="mb-4 text-teal-400" whileHover={{ rotate: 5 }}>
                <BookOpen className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-300 mb-4">{blog.description}</p>
              <Button
                variant="ghost"
                className="text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 p-0 flex items-center gap-1"
                asChild
              >
                <a href={blog.url} target="_blank" rel="noopener noreferrer">
                  Read More <ArrowUpRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

