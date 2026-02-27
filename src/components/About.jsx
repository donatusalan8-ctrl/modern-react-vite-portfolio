import { motion } from 'framer-motion'
import { Code, Eye, Rocket, Zap } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: <Rocket size={24} className="text-blue-500" /> },
    { label: 'Projects Completed', value: '40+', icon: <Zap size={24} className="text-purple-500" /> },
    { label: 'Client Satisfaction', value: '100%', icon: <Eye size={24} className="text-pink-500" /> },
    { label: 'Clean Code', value: '100%', icon: <Code size={24} className="text-emerald-500" /> },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              I am a passionate software developer based in San Francisco, dedicated to building high-performance, responsive, and visually stunning web applications. With expertise in React, Node.js, and modern UI design, I turn complex ideas into seamless digital experiences.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              My approach focuses on clean code, performance optimization, and user-centric design. Whether it's a small landing page or a complex SaaS platform, I always strive for excellence.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl flex items-center gap-4 group hover:bg-white/5 transition-all"
                >
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square md:w-[450px] md:h-[450px] mx-auto overflow-hidden rounded-3xl glow border border-white/10 group">
               <img
                  src="https://images.unsplash.com/photo-1519085184588-495101017367?q=80&w=800&h=800&auto=format&fit=crop"
                  alt="Workspace"
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
