import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Jawaharlal Nehru Port Authority (JNPA)",
      location: "Mumbai, Maharashtra",
      duration: "June 2024 - July 2024",
      type: "Industrial Exposure Training",
      description: [
        "Completed a one-month industrial exposure training internship where I contributed as a software engineer and managed computer systems in the administration department.",
        "Gained experience in maintaining system efficiency, troubleshooting technical issues, and supporting the integration of technology in port operations and logistics workflows."
      ],
      skills: ["System Administration", "Technical Support", "Port Operations", "Logistics Technology"]
    },
    {
      title: "AI & Machine Learning Trainee",
      company: "Tech Saksham (Microsoft & SAP Initiative)",
      location: "Virtual Program",
      duration: "January 2025 - February 2025",
      type: "Virtual Training Program",
      description: [
        "Participated in AI: Transformative Learning program conducted by Edunet Foundation under Microsoft & SAP initiative.",
        "Learned core concepts of Artificial Intelligence including machine learning, data handling, and model building.",
        "Gained practical exposure through hands-on projects using AI tools and cloud-based platforms."
      ],
      skills: ["Artificial Intelligence", "Machine Learning", "Data Handling", "Cloud Platforms", "Model Building"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Practical experience gained through internships and training programs
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-blue-200"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-20 bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Building size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {exp.type}
                </div>

                <div className="space-y-3 mb-6">
                  {exp.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-gray-600 leading-relaxed">
                      • {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm border border-gray-200 hover:border-blue-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;