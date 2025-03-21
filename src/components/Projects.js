import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: "Smart Traffic Monitoring System",
      description:
        "A cutting-edge traffic monitoring solution combining computer vision and deep learning for enhanced road safety. Features real-time vehicle detection, speed measurement, and license plate recognition with support for both Nepali and English plates.",
      longDescription: [
        "Implemented YOLOv8-based object detection with >95% accuracy",
        "Developed real-time license plate recognition system with >90% accuracy",
        "Built Django-based dashboard for monitoring and violation management",
        "Integrated multi-threading for processing 25-30 FPS with GPU acceleration",
      ],
      technologies: [
        "Python",
        "YOLOv8",
        "OpenCV",
        "Django",
        "PostgreSQL",
        "Deep Learning",
        "EasyOCR",
      ],
      // image: '/src/assets/images/projects/traffic-monitoring.jpg',
      githubLink: "https://github.com/binod22/Final-Year-Project.git",
      demoLink: "#",
    },
    {
      title: "Where in the World - Country Information App",
      description:
        "A modern React application that provides comprehensive information about countries worldwide. Features an intuitive interface for searching, filtering, and exploring detailed country information with a responsive design and smooth user experience.",
      longDescription: [
        "Built with React 18 and React Router for seamless navigation",
        "Implemented search and filter functionality for easy country exploration",
        "Created responsive layouts with CSS for all device sizes",
        "Added loading states with shimmer effects for better UX",
      ],
      technologies: [
        "React 18",
        "React Router",
        "CSS",
        "Parcel Bundler",
        "REST API",
        "Responsive Design",
      ],
      //image: '/src/assets/images/projects/where-in-world.jpg',
      githubLink: "https://github.com/binod22/Where_in_the_World",
      demoLink: "https://all-countries-information-bybinod.netlify.app",
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-12">My Work</h2>
          <div className="grid gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-tertiary rounded-lg overflow-hidden shadow-xl"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-2 mb-6 text-textSecondary">
                    {project.longDescription.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-secondary mr-2">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary rounded-full text-secondary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {allProjects.length > 2 && (
            <div className="mt-12 text-center">
              <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {showAll ? "Show Less" : "Show More"}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
