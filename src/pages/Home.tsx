import { Github, Mail, Linkedin, ArrowRight } from "lucide-react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import SolanaArchitecture from "../components/SolanaArchitecture";
// import ResumeSection from "../components/ResumeSection";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

export default function Home() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Victor Obasi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            Full-stack Developer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-8">
            Web3 · AI · GIS · React Native
          </p>

          <div className="flex gap-4 justify-center mb-8">
            <a
              href="https://github.com/ovpn-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:vobasi15@gmail.com"
              className="flex items-center gap-2 px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/vobasi14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
          >
            <span>View My Work</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="absolute bottom-10 animate-float">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <Section title="About" id="about">
        <div className="max-w-3xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm a full-stack developer passionate about building innovative solutions
            at the intersection of blockchain, AI, and spatial technologies. With
            experience spanning Web3 dApps on Solana, mobile applications, and
            enterprise systems, I bring ideas to life through clean code and
            user-centric design.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently focused on decentralized applications, machine learning
            integration, and creating impactful tools that solve real-world problems.
          </p>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section title="Featured Projects" id="projects">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-12">Other Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
        </div>

        {/* Solana Architecture Diagram */}
        <SolanaArchitecture />
      </Section>

      {/* SKILLS */}
      <Section title="Skills & Technologies" id="skills">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.category} skill={skill} />
          ))}
        </div>
      </Section>

      {/* RESUME */}
      {/* <Section title="Resume" id="resume">
        <ResumeSection />
      </Section> */}

      {/* CONTACT */}
      <Section title="Get In Touch" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach
            out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:vobasi15@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            <a
              href="https://github.com/ovpn-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/victor-obasi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Victor Obasi. Built with React +
              TypeScript + Tailwind.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ovpn-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vobasi14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vobasi15@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
