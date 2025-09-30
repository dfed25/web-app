"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [formStatus, setFormStatus] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  // Auto-detect system theme and handle manual toggle
  useEffect(() => {
    // Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Check localStorage for manual preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(systemPrefersDark);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Create mailto link
    const subject = encodeURIComponent('New message from portfolio contact form');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:domfederico21@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setFormStatus('Email client opened! Please send the email to complete your message.');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
        isDarkMode 
          ? 'bg-black/20 border-white/10' 
          : 'bg-white/20 border-gray-200/20'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Domenic Federico
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/10 hover:bg-white/20 text-yellow-400' 
                    : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-600'
                }`}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              
              <div className={`flex space-x-1 backdrop-blur-sm rounded-2xl p-2 transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-gray-200/30 border border-gray-300/20'
              }`}>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : isDarkMode 
                          ? 'text-gray-300 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25">
              <span className="text-4xl">👨‍💻</span>
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent ${
            isDarkMode 
              ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200' 
              : 'bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600'
          }`}>
            Dom Federico
          </h1>
          <p className={`text-2xl mb-8 font-light ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Full Stack Developer</p>
          <p className={`text-lg max-w-3xl mx-auto mb-12 leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            This is my codebox bootcamp project. I have been a part of a start up for the past couple months and I had to make a website for it. I used that website a baseline for this project and have been adding to it with my own info. So I did code all of this but it's not new to me. 
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105 font-medium"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 backdrop-blur-sm transition-all duration-500 ${
        isDarkMode ? 'bg-black/20' : 'bg-white/20'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className={`mb-8 text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I have been coding since I was a little kid when my dad first showed me how to. I really enjoyed it and have been coding ever since. When I got to highscool I realized what I could do with it and have been making projects ever since. My favorite projects have been A project that won me the congressional app challenge and I got to go to congress for it, a website that was commissioned by a company I worked for, and a website that was commissioned by the school I used to go to and the start up i have been working on. You can see all of these or the code for them down below.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className={`backdrop-blur-sm rounded-2xl p-6 text-center border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-white/50 border-gray-200/50 hover:bg-white/70'
                }`}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">20+</div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Projects</div>
                </div>
                <div className={`backdrop-blur-sm rounded-2xl p-6 text-center border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-white/50 border-gray-200/50 hover:bg-white/70'
                }`}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">5+</div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Years</div>
                </div>
              </div>
            </div>
            <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/50 border-gray-200/50'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>Quick Facts</h3>
              <div className="space-y-4">
                <div className={`flex items-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></span>
                  From Seattle, WA
                </div>
                <div className={`flex items-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></span>
                  Computer Science Student
                </div>
                <div className={`flex items-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></span>
                  Athlete in multiple sports
                </div>
                <div className={`flex items-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></span>
                  team lead for startup project
                </div>
                
                <div className={`flex items-start ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4 mt-1 flex-shrink-0"></span>
                  <span>Won Congressional App Challenge and got to go to Congress to show off app that I made</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Rush start up",
                description: "social media start up for college fraternities and sororities - Git hub currently not public ",
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
              <div key={index} className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 group hover:scale-105 ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                  : 'bg-white/50 border-gray-200/50 hover:bg-white/70 hover:border-gray-300/50'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 transition-colors ${
                  isDarkMode 
                    ? 'text-white group-hover:text-blue-300' 
                    : 'text-gray-800 group-hover:text-blue-600'
                }`}>{project.title}</h3>
                <p className={`mb-6 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105"
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
      <section id="skills" className={`py-20 px-6 backdrop-blur-sm transition-all duration-500 ${
        isDarkMode ? 'bg-black/20' : 'bg-white/20'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Frontend", skills: ["React", "NextJs", "TypeScript", "Tailwind CSS"] },
              { category: "Backend", skills: ["Python", "supabase"] },
              { category: "Database", skills: ["supabase"] }
            ].map((category, index) => (
              <div key={index} className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 group hover:scale-105 ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/50 border-gray-200/50 hover:bg-white/70'
              }`}>
                <h3 className={`text-xl font-semibold mb-6 transition-colors ${
                  isDarkMode 
                    ? 'text-white group-hover:text-blue-300' 
                    : 'text-gray-800 group-hover:text-blue-600'
                }`}>{category.category}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={`font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
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
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>Let's Connect</h3>
              <div className="space-y-6">
                <div className={`flex items-center text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className="mr-4 text-2xl">📧</span>
                  dfederic@calpoly.edu
                </div>
                <div className={`flex items-center text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className="mr-4 text-2xl">📱</span>
                  206-473-1020
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className={`text-xl font-semibold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Follow Me</h4>
                <div className="flex space-x-4">
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
                      className={`w-14 h-14 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 border transform hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border-white/10 hover:border-white/20'
                          : 'bg-white/50 text-gray-600 hover:bg-white/70 hover:text-gray-800 border-gray-200/50 hover:border-gray-300/50'
                      }`}
                    >
                      <span className="text-lg">
                        {index === 2 ? <Image src={social.icon} alt="Instagram" width={20} height={20} /> : social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/50 border-gray-200/50'
            }`}>
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={`w-full p-4 border rounded-xl focus:outline-none transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/10'
                      : 'bg-white/50 border-gray-200/50 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:bg-white/70'
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className={`w-full p-4 border rounded-xl focus:outline-none transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/10'
                      : 'bg-white/50 border-gray-200/50 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:bg-white/70'
                  }`}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className={`w-full p-4 border rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                    isDarkMode 
                      ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/10'
                      : 'bg-white/50 border-gray-200/50 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:bg-white/70'
                  }`}
                ></textarea>
                <input type="hidden" name="_replyto" value="domfederico21@gmail.com" />
                <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105">
                  Send Message
                </button>
                {formStatus && (
                  <div className={`text-center text-sm font-medium ${
                    formStatus.includes('successfully') ? 'text-green-400' : 
                    formStatus.includes('Error') ? 'text-red-400' : 'text-blue-400'
                  }`}>
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t backdrop-blur-sm transition-all duration-500 ${
        isDarkMode 
          ? 'border-white/10 bg-black/20' 
          : 'border-gray-200/20 bg-white/20'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            © 2025 Dom F. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}