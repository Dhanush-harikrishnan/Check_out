"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, GitBranch, Cpu } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      title: "Building efficient, scalable applications with a focus on clean code and performance",
      icon: <Code className="h-6 w-6 text-teal-400" />,
    },
    {
      title: "Developing interactive, responsive Front-end / User Interfaces using modern web technologies",
      icon: <Layout className="h-6 w-6 text-teal-400" />,
    },
    {
      title: "Solving complex problems using Data Structures and Algorithms in competitive coding",
      icon: <Cpu className="h-6 w-6 text-teal-400" />,
    },
    {
      title: "Integrating back-end services and APIs with technologies like Node.js and MongoDB",
      icon: <Server className="h-6 w-6 text-teal-400" />,
    },
    {
      title: "Engaging in real-world projects to continuously enhance coding proficiency",
      icon: <GitBranch className="h-6 w-6 text-teal-400" />,
    },
  ]

  const techSkills = [
    { name: "Java", icon: "fab fa-java" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "Git", icon: "fab fa-git" },
    { name: "Docker", icon: "fab fa-docker" },
  ]

  const techExperience = [
    { stack: "Frontend/Design", percentage: "90%" },
    { stack: "Backend", percentage: "70%" },
    { stack: "Programming", percentage: "60%" },
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
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold text-white mb-4">What I Do</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            PASSIONATE DEVELOPER FOCUSING ON PROJECT DEVELOPMENT & COMPETITIVE CODING
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
              }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500 transition-all duration-300"
            >
              <motion.div
                className="bg-slate-700/50 rounded-full w-12 h-12 flex items-center justify-center mb-4"
                whileHover={{ rotate: 5 }}
              >
                {skill.icon}
              </motion.div>
              <p className="text-gray-200">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6">
            {techSkills.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center hover:border-teal-500 transition-all duration-300"
              >
                <i className={`${tech.icon} text-3xl text-teal-400 mb-2`}></i>
                <span className="text-gray-300 text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Experience Level</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h4 className="text-white font-medium mb-2">{exp.stack}</h4>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: exp.percentage }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-teal-500 to-indigo-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
                <div className="text-right mt-1 text-gray-300 text-sm">{exp.percentage}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

