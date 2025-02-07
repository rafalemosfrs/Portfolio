import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Brain, Send } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQL', level: 70 },
  ];

  const projects = [
    {
      name: 'Cash App',
      description: 'Um front-end desenvolvido como "desafio de replicação" na Digital College',
      tech: ['React', 'HTML', 'CSS', 'TailwindCSS'],
      link: 'https://cash-app-digitalcollege.vercel.app'
    },
    {
      name: 'Busca por Região',
      description: 'Um site que consulta a API do IBGE para mostrar na tela todos munícipios por estado do Brasil.',
      tech: ['HTML', 'CSS', 'JS'],
      link: 'https://busca-por-regiao.vercel.app'
    },
    {
      name: 'Landing Page',
      description: 'Uma Landing Page moderna e clean para um consultório de dentista.',
      tech: ['HTML', 'CSS', 'TailwindCSS', 'JS'],
      link: 'https://rafalemosfrs.github.io/LandingPage-Dentista/'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Rafael Lemos
            </h1>
            <div className="space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Desenvolvedor Full Stack
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Construindo soluções web modernas
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/rafalemosfrs" className="p-2 hover:text-blue-400 transition-colors"><Github /></a>
            <a href="https://www.linkedin.com/in/rafalemosfrs/" className="p-2 hover:text-blue-400 transition-colors"><Linkedin /></a>
            <a href="mailto:rafaelemosfr@gmail.com" className="p-2 hover:text-blue-400 transition-colors"><Mail /></a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <User className="w-8 h-8" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
            <div>
              <p className="text-gray-300 leading-relaxed">
              Oi! Sou Rafael Lemos, um Desenvolvedor Full Stack de 25 anos em constante evolução.
Embora ainda não tenha trabalhado formalmente na área, desenvolvi diversos projetos individuais que demonstram minha capacidade de criar soluções completas, do front-end ao back-end.
Sou apaixonado por tecnologia, autodidata e estou sempre em busca de aprender novas ferramentas e frameworks para entregar resultados que combinem funcionalidade, design e inovação.
Estou pronto para enfrentar novos desafios e contribuir para projetos impactantes!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Code2 className="w-8 h-8" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Brain className="w-8 h-8" />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Mail className="w-8 h-8" />
            Contact
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Rafael Lemos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;