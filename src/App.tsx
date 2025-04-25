import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail, Code2, Database, Server, Globe, Monitor, Layout, Terminal } from 'lucide-react';

import Navbar from './components/Navbar';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';

function App() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "FinTrack Invoice Automation",
      description: "Automated invoice processing system with AI-driven fraud detection, reducing manual errors by 80%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "MongoDB", "AI"],
      link: "#"
    },
    {
      title: "PurpleUnited Kids",
      description: "E-commerce platform with advanced product categorization and custom Magento2 extensions.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      tags: ["Magento2", "PHP", "SEO"],
      link: "#"
    },
    {
      title: "Cohoma Coffee",
      description: "Modern WordPress e-commerce site with optimized performance and responsive design.",
      image: "https://cohomacoffee.com/wp-content/uploads/2024/10/03-Gifting.jpg",
      tags: ["WordPress", "PHP", "SEO"],
      link: "#"
    }
  ];

  const skills = [
    { name: "HTML5, CSS3 & JavaScript", level: 95 },
    { name: "React.js & Next.js", level: 92 },
    { name: "Tailwind CSS & Styled Components", level: 90 },
    { name: "API Integration & RESTful Services", level: 88 },
    { name: "Responsive & Cross-Browser Design", level: 93 },
    { name: "Git, GitHub & Version Control", level: 90 },
    { name: "Performance Optimization & SEO", level: 85 },
    { name: "Web Accessibility (WCAG)", level: 80 },
    { name: "Python (Backend & Automation)", level: 82 },
  ];
  

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cyber-grid opacity-20" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/20 to-transparent"
          />
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>

        {/* Glowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div
            ref={heroRef}
            className="text-center"
          >
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-2xl"
              />
              <h1 className="relative text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                <span className="inline-block cyberpunk-glitch" data-text="Vinay">Vinay</span>{" "}
                <span className="inline-block cyberpunk-glitch" data-text="Chhabra">Chhabra</span>
              </h1>
            </motion.div>

            {/* Role and Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6 relative z-10"
            >
              <div className="relative inline-block">
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.99, 1.01, 0.99],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
                />
                <h2 className="text-2xl md:text-3xl text-white font-light tracking-wider mb-4">
                  Web Developer
                </h2>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                Building modern web experiences with clean code, intuitive UI, and optimized performance — shaping the digital future one line at a time.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                <span className="relative text-white font-medium text-lg">
                  Connect With Me
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex justify-center space-x-6"
            >
              <a
                href="https://linkedin.com/in/vinay-chhabra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:vinaychhabra.dev@gmail.com"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 w-px h-20 bg-gradient-to-b from-gray-500/50 to-transparent" />
      </section>

      <section id="about" className="py-20 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-indigo-700 text-center">About Me</h2>
    <p className="text-lg text-gray-700 mb-6">
      Passionate Web Developer with a strong foundation in building responsive, user-centric web applications using modern JavaScript frameworks. 
      I specialize in React.js, Tailwind CSS, and full-stack integration to craft seamless digital experiences. 
      I thrive in dynamic environments and enjoy transforming creative ideas into high-performing, scalable web solutions. 
      I also leverage Python for backend APIs, automation scripts, and data handling to enhance functionality and efficiency.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      <div className="text-center">
        <Code2 className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
        <h3 className="font-semibold text-indigo-600">Frontend</h3>
      </div>
      <div className="text-center">
        <Layout className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
        <h3 className="font-semibold text-indigo-600">UI/UX Design</h3>
      </div>
      <div className="text-center">
        <Server className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
        <h3 className="font-semibold text-indigo-600">Backend</h3>
      </div>
      <div className="text-center">
        <Terminal className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
        <h3 className="font-semibold text-indigo-600">Python</h3>
      </div>
    </div>
  </div>
</section>



      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-indigo-700 text-center">Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-indigo-700 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl mb-8">
            I'm currently available for freelance work and full-time opportunities.
          </p>
          <a
            href="mailto:vinaychhabra.dev@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors"
          >
            <Mail className="mr-2" size={20} />
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;