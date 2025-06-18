import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "Committed to writing clean, efficient code and staying updated with latest technologies."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Always seeking creative solutions to complex problems and embracing new challenges."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal-Oriented",
      description: "Focused on delivering results and achieving objectives through systematic approaches."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Strong believer in teamwork and effective communication for project success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Passionate Computer Engineering Student
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am a dedicated Computer Engineering student with a passion for applying academic 
              knowledge in real-world technology solutions. With practical experience gained through 
              internships and virtual programs, I have honed my programming and problem-solving skills, 
              particularly in Python and Java.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Currently pursuing my B.E. in Computer Engineering at Pillai HOC College of Engineering 
              with a CGPA of 7.7, I am eager to contribute to innovative projects and further develop 
              my expertise in the field of technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                Problem Solver
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                Fast Learner
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                Team Player
              </div>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;