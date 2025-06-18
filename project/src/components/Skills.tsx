import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Monitor, Users, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["C Programming", "Java", "Python", "HTML/CSS", "JavaScript"],
      color: "blue"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "green"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      skills: ["MySQL", "MongoDB"],
      color: "purple"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Operating Systems",
      skills: ["Windows"],
      color: "orange"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Technical Skills",
      skills: ["Problem Solving", "Logical Thinking", "Time Management"],
      color: "red"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      skills: ["Adaptability", "Teamwork", "Communication", "Fast Learner"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      red: "bg-red-100 text-red-800 border-red-200",
      indigo: "bg-indigo-100 text-indigo-800 border-indigo-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      red: "text-red-600",
      indigo: "text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`${getIconColor(category.color)} mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-6">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className={`px-4 py-2 rounded-lg border ${getColorClasses(category.color)} text-sm font-medium`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Continuously expanding my skill set through hands-on projects, online courses, 
            and staying updated with the latest technology trends and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;