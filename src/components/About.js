import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile/IMG_6362-2-3.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-textSecondary">
              <p className="mb-4">
                Hello! My name is Binod Regmi, and I'm passionate about creating things that live on the
                internet. I'm a recent Computer Engineering graduate (2019-2024) with a strong foundation
                in web development and software engineering.
              </p>
              <p className="mb-4">
                During my academic journey, I've developed a deep understanding of software development
                principles and modern web technologies. I'm constantly learning and exploring new
                technologies to create better digital experiences.
              </p>
              <p className="mb-4">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 list-disc list-inside mb-4">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Python</li>
              </ul>
            </div>
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative max-w-md mx-auto">
                <div className="relative z-10">
                  <img
                    src={profileImage}
                    alt="Binod Regmi"
                    className="rounded-full w-80 h-80 object-cover mx-auto
                             border-6 border-secondary
                             shadow-xl
                             transition-transform duration-300
                             group-hover:shadow-2xl
                             group-hover:border-opacity-70"
                  />
                  {/* Decorative circle */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-tertiary rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                </div>
                {/* Background decorative elements */}
                <div className="absolute top-0 -left-4 w-96 h-96 bg-secondary/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 -right-4 w-96 h-96 bg-tertiary/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
