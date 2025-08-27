import React from "react";
import "./Experience.css";
import { Briefcase, Code, GraduationCap, PersonStanding, TabletSmartphoneIcon } from "lucide-react"; // nice icons

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance Projects",
      period: "2022 - Present",
      description:
        "Developed responsive websites and apps using React, Bootstrap, and modern JavaScript frameworks.",
      icon: <Code className="text-blue-500 w-6 h-6" />,
    },
    {
      title: "Radiographer",
      company: "Healthcare Institution",
      period: "2019 - Present",
      description:
        "Provided diagnostic imaging services while also building digital health solutions bridging medicine and technology.",
      icon: <Briefcase className="text-green-500 w-6 h-6" />,
    },
    {
      title: "Founder",
      company: "FirstPlace Conect",
      period: "2021 - Present",
      description:
        "Organize and supervised mentorship and educational programs designed to help young people grow in self-development and other neccessary skills",
      icon: <TabletSmartphoneIcon className="text-purple-500 w-6 h-6" />,
    },
  ];

  return (
    <section className="experience-section py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-blue-600">Experience</span>
      </h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{exp.icon}</div>
            <div className="timeline-content">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400 italic">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
