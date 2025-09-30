"use client";

import { useState } from 'react';
import Image from 'next/image';
export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Domenic Federico</div>
            
            <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-md text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-3xl">👨‍💻</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dom Federico</h1>
          <p className="text-xl text-gray-300 mb-6">Full Stack Developer</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            This is my codebox bootcamp project. I have been a part of a start up for the past couple months and I had to make a website for it. I used that website a baseline for this project and have been adding to it with my own info. So I did code all of this but it's not new to me. 
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                I have been coding since I was a little kid when my dad first showed me how to. I really enjoyed it and have been coding ever since. When I got to highscool I realized what I could do with it and have been making projects ever since. My favorite projects have been A project that won me the congressional app challenge and I got to go to congress for it, a website that was commissioned by a company I worked for, and a website that was commissioned by the school I used to go to and the start up i have been working on. You can see all of these or the code for them down below.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">20+</div>
                  <div className="text-gray-300 text-sm">Projects</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">5+</div>
                  <div className="text-gray-300 text-sm">Years</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  From Seattle, WA
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Computer Science Student
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Athlete in multiple sports
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  team lead for startup project
                </div>
                
                <div className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1 flex-shrink-0"></span>
                  <span>Won Congressional App Challenge and got to go to Congress to show off app that I made</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Rush start up",
                description: "social media start up for college fraternities and sororities",
                tech: ["React", "Node.js"],
                link: "https://github.com/rush-app-WA/fullstack"
              },
              {
                title: "Congressional App Challenge: AP Grader",
                description: "App that grades AP english essays with a custom built and trained ai so teachers wouldnt have to spend all their time grading essays",
                tech: ["swift", "xcode","swiftUI"],
                link: "https://youtu.be/QUZFEkDLhFA?si=NeCQIC_0kEL2MGsO"
              },
              {
                title: "live face id deterction ",
                description: "a live face detection app that scans for afaces and puts a box around them ",
                tech: ["python","haarcascade"],
                link: "https://github.com/dfed25/livefaceDetect"
              },
              {
                title: "School website",
                description: "a website for the school I used to go to",
                tech: ["html", "css", "nextJs", "supabase"],
                link: "https://github.com/marchfederico/apcoder"
              }
              
            ].map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: "Frontend", skills: ["React", "NextJs", "TypeScript", "Tailwind CSS"] },
              { category: "Backend", skills: ["Python", "supabase"] },
              { category: "Database", skills: ["supabase"] }
            ].map((category, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">📧</span>
                  dfederic@calpoly.edu
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">📱</span>
                  206-473-1020
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
                <div className="flex space-x-3">
                  {[
                    { name: 'GitHub', icon: '💻', url: 'https://github.com/dfed25' },
                    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/domenic-federico-0b85b8298/' },
                    { name: 'Instagram', icon: '/insta.jpg', url: 'https://www.instagram.com/domenic_federico' }
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 transition-colors"
                    >
                      <span className="text-sm">
                        {index === 2 ? <Image src={social.icon} alt="Instagram" width={16} height={16} /> : social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Dom F. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}