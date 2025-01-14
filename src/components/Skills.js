import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        "Python",
        "JavaScript",
        "Typescript",
        "Java",
        "HTML5",
        "CSS3",
        "C/C++",
      ],
    },
    {
      category: "Frontend Framework",
      items: [
        "React",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      category: "Other",
      items: ["Responsive Design", "UI/UX Design", "Agile/Scrum"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="section-title">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-tertiary p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-secondary">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-textSecondary flex items-center"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
