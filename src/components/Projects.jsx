import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "AI Image Generator",
      description: "A full-stack application that uses DALL-E 3 to generate high-quality images from text prompts. Features a community showcase and user profiles.",
      tech: ["React", "Node.js", "OpenAI API", "Cloudinary"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&h=600&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management SaaS",
      description: "A comprehensive project management tool with real-time collaboration, task tracking, and interactive dashboards.",
      tech: ["Next.js", "PostgreSQL", "Tailwind", "Socket.io"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A robust e-commerce platform with stripe integration, inventory management, and a headless CMS for products.",
      tech: ["React", "Stripe", "Sanity.io", "Redux"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&h=600&auto=format&fit=crop",
      github: "#",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work and open-source contributions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-white/5"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-md">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white backdrop-blur-md">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-all">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
