import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    "Data Engineering",
    "SQL",
    "R",
    "Python",
    "Project Management",
    "Microsoft Excel (Advanced)",
    "Public Speaking",
    "AWS",
    "Google Cloud",
    "Azure DevOps",
  ];

  const experiences = [
    {
      title: "Analyst – AI & Engineering",
      company: "Deloitte Consulting – Government & Public Services (GPS)",
      period: "Jul 2024 - Present",
      description: "Serve as a functional analyst supporting data mesh architecture for TSA, facilitating daily touchpoints and collaborating across technical teams using Azure DevOps."
    },
    {
      title: "Summer Scholar – Cloud Engineering",
      company: "Deloitte Consulting – Government & Public Services (GPS)",
      period: "Jun 2023 - Aug 2023",
      description: "Developed and implemented cloud-based solutions for optimizing Agile workflow, leveraging Excel and AWS to provide consistent and accurate project estimates."
    },
    {
      title: "Summer Intern – Data Engineering",
      company: "Johnson & Johnson – Supply Chain",
      period: "May 2022 - Aug 2022",
      description: "Designed and implemented SQL data mapping frameworks and enhanced data ingestion processes using Microsoft Azure and Databricks environments."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Business Administration – Information Systems",
      institution: "University of Florida, Warrington College of Business",
      location: "Gainesville, FL",
      year: "May 2024"
    }
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">About Me</h1>
      
      <div className="max-w-3xl space-y-16">
        <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-lg leading-relaxed mb-4">
            Results-driven AI & Data Analyst with experience delivering enterprise data architecture solutions and supporting strategic alliances within the federal consulting space.
          </p>
          <p className="text-lg leading-relaxed">
            Skilled in cloud platforms (AWS, Google Cloud), data engineering concepts, and bridging the gap between technical teams and business stakeholders. Passionate about leveraging emerging AI technologies to drive innovation while developing go-to-market strategies that accelerate value delivery through strategic partnerships.
          </p>
        </section>
        
        <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-5 h-5" />
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-accent rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        
        <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="border-l-2 border-accent pl-6 relative"
              >
                <div className="w-3 h-3 bg-accent absolute -left-[7px] rounded-full"></div>
                <h3 className="text-xl font-medium">{exp.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-accent pl-6 relative">
                <div className="w-3 h-3 bg-accent absolute -left-[7px] rounded-full"></div>
                <h3 className="text-xl font-medium">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>{edu.institution}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
