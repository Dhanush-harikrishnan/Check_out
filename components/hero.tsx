"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Lottie from "lottie-react"
import splashAnimation from "@/lib/splash-animation"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [particles, setParticles] = useState<Array<{
    width: number
    height: number
    left: number
    top: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    setIsLoaded(true)
    // Initialize particles with stable values
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        width: 2 + (6 * Math.random()),
        height: 2 + (6 * Math.random()),
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + (Math.random() * 5),
        delay: Math.random() * 5
      }))
    )

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated background elements */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"
        style={{
          transform: `translateX(${(mousePosition.x - 0.5) * 10}px) translateY(${(mousePosition.y - 0.5) * 10}px)`,
        }}
      ></div>

      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute rounded-full w-[500px] h-[500px] bg-teal-900/20 blur-3xl"
          style={{
            left: `calc(${mousePosition.x * 100}% - 250px)`,
            top: `calc(${mousePosition.y * 100}% - 250px)`,
            transition: "left 0.5s ease-out, top 0.5s ease-out",
          }}
        ></div>
        <div
          className="absolute rounded-full w-[300px] h-[300px] bg-indigo-900/20 blur-3xl"
          style={{
            right: `calc(${(1 - mousePosition.x) * 100}% - 150px)`,
            bottom: `calc(${(1 - mousePosition.y) * 100}% - 150px)`,
            transition: "right 0.7s ease-out, bottom 0.7s ease-out",
          }}
        ></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                Dhanush
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Full Stack Developer specializing in modern web technologies and scalable solutions. Building innovative applications with React, Node.js, and cutting-edge frameworks.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button
                className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1DzvmyLNuLVunjWt2OUcdp1qHc4ChBcjL/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>
              <Button variant="outline" className="border-teal-500 text-white hover:bg-teal-500/20" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
            {...floatingAnimation}
          >
            <div className="w-full max-w-md relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-indigo-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 70%)",
                    "radial-gradient(circle at 70% 70%, rgba(79, 70, 229, 0.3) 0%, transparent 70%)",
                    "radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 70%)"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear"
                }}
              />
              <motion.div
                className="relative z-10 w-full h-full"
                animate={{
                  rotateY: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear"
                }}
              >
                <Lottie animationData={splashAnimation} loop={true} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1 },
          y: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
        }}
        className="absolute bottom-8"
      >
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  )
}

