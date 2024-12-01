import React from 'react';
import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-primary"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-lg sm:text-xl mb-4"
          >
            Hi, my name is
          </motion.h2>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            <TypeWriter 
              text="Binod Regmi"
              speed={150}
              className="bg-gradient-to-r from-secondary to-textPrimary bg-clip-text text-transparent"
            />
          </h1>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-textSecondary text-2xl sm:text-4xl mb-8"
          >
            I build things for the web
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-textSecondary max-w-lg mx-auto mb-8"
          >
            I'm a Computer Engineering graduate (2019-2024) passionate about creating exceptional digital experiences.
            I specialize in building modern web applications with cutting-edge technologies.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="btn-primary"
          >
            Check out my work!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
