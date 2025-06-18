import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.E in Computer Engineering",
      institution: "Pillai HOC College of Engineering",
      location: "Mumbai, Maharashtra",
      duration: "2022 - 2025",
      status: "4th Year Pursuing",
      grade: "Current CGPA: 7.7",
      type: "Bachelor's Degree",
      description: "Comprehensive study of computer engineering fundamentals including programming, data structures, algorithms, software engineering, and emerging technologies."
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Uran Education Society English Medium School and Junior College",
      location: "Uran, Maharashtra",
      duration: "2020 - 2022",
      status: "Completed",
      grade: "Percentage: 77.83%",
      type: "12th Grade",
      description: "Focused on Science stream with Mathematics, Physics, and Chemistry, building a strong foundation for engineering studies."
    },
    {
      degree: "Secondary School Certificate",
      institution: "Uran Education Society English Medium School",
      location: "Uran, Maharashtra",
      duration: "2019 - 2020",
      status: "Completed",
      grade: "Percentage: 90.60%",
      type: "10th Grade",
      description: "Achieved excellent academic performance across all subjects with particular strength in Mathematics and Science."
    }
  ];

  const certifications = [
    {
      title: "AI: Transformative Learning",
      issuer: "Tech Saksham (Microsoft & SAP Initiative)",
      date: "February 2025",
      description: "Comprehensive training in Artificial Intelligence, Machine Learning, and cloud-based platforms."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Academic achievements and continuous learning journey
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Academic Background</h3>
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-blue-200"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-20 bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="text-blue-600" size={20} />
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin size={16} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2 mt-4 lg:mt-0">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <Award size={16} />
                      <span className="text-sm font-semibold">{edu.grade}</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
          
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;