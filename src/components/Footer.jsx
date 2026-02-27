import { motion } from 'framer-motion'
import { Github, Heart, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold gradient-text"
          >
            PORTFOLIO
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-gray-400"
          >
            Made with <Heart size={18} className="text-red-500 animate-pulse" fill="currentColor" /> by John Doe
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-6"
          >
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
