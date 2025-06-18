import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Users, Navigation, Database, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Virtual HR",
      description: "Developed a cloud-based HR system to manage employee data, attendance, and records efficiently. Designed an intuitive interface for easy access by both admins and employees.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Cloud Computing", "Database Management", "Web Development", "UI/UX Design"],
      features: [
        "Employee data management",
        "Attendance tracking system",
        "Admin and employee dashboards",
        "Cloud-based architecture",
        "Secure data handling"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "blue"
    },
    {
      title: "Traffic Predictor",
      description: "Built a platform to display real-time traffic updates and suggest optimal routes. Helped users avoid congestion and save time through accurate traffic predictions.",
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Data Analysis", "Real-time Processing", "Route Optimization", "Web Development"],
      features: [
        "Real-time traffic monitoring",
        "Route optimization algorithms",
        "Congestion prediction",
        "User-friendly interface",
        "Time-saving recommendations"
      ],
      icon: <Navigation className="w-8 h-8" />,
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        icon: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-800",
        icon: "text-green-600",
        button: "bg-green-600 hover:bg-green-700"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing my best work with detailed descriptions and technical implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 ${getColorClasses(project.color).bg} ${getColorClasses(project.color).icon} p-3 rounded-full`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${getColorClasses(project.color).bg} ${getColorClasses(project.color).text} px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className={`${getColorClasses(project.color).icon} mt-1`}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 ${getColorClasses(project.color).button} text-white px-4 py-2 rounded-lg transition-colors duration-200`}
                  >
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm continuously working on new projects and expanding my portfolio. 
              Stay tuned for more innovative solutions and technical implementations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;