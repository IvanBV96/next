import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SkillsSection from "@/components/ui/SkillsSection"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import profilepic from "@/public/images/ivan-lower-quality.png" 

import ContactForm from '@/components/ui/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Ivan Viquez</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p className="text-xl mb-8">I'm a passionate web developer creating amazing digital experiences.</p>
            <a href="#contact-form">
  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
    Get in Touch
  </Button>
</a>
          </div>
        </section>

        <section id="about" className="mb-16">
          <Card className="bg-black text-white p-6 rounded-lg  mx-auto border-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-4xl font-bold text-center">About Me</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-64 h-64 overflow-hidden rounded-full">
                  <Image
                    src={profilepic}
                    alt="Ivan Viquez"
                    width={300}
                    height={300}
                    className="rounded-super"
                  />
                </div>
                <div className="flex-1 space-y-4 md:w-2/3"> 
                  <p className="text-xl text-center md:text-left">
                    Hi, I'm Ivan Viquez, a web developer with a passion for creating responsive and user-friendly websites.
                  </p>
                  <p className="text-xl text-center md:text-left">
                    I specialize in React, Next.js, and Node.js, and I'm dedicated to writing clean, efficient code that solves real-world problems.
                  </p>
                  <p className="text-xl text-center md:text-left">
                    With several years of experience in the field, I've worked on a range of projects, from small business websites to large-scale web applications.
                  </p>
                  <p className="text-xl text-center md:text-left">
                    My approach to development is centered around creating intuitive user experiences and optimizing performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>


        <section id="projects" className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Array of project data including unique images */}
    {[
      {
        id: 1,
        title: "Code a Simple Trading Bot",
        description: "This bot will place a market buy order if the current price is lower than a predefined threshold.",
        imageUrl: "/images/DALL-E-1.webp",
      },
      {
        id: 2,
        title: "Get started with cybersecurity!",
        description: "Creating a virtual machine (VM) with VirtualBox and installing Kali Linux on it involves several steps. Thankfully, theres a guide.",
        imageUrl: "/images/DALL-E-2.webp",
      },
      {
        id: 3,
        title: "Setup a Linux LAMP Server",
        description: " Setting up a LAMP stack (Linux, Apache, MySQL/MariaDB, PHP) on a server is a common task for hosting websites and web applications.",
        imageUrl: "/images/DALL-E-3.webp",
      },
    ].map((project) => (
      <Card key={project.id} className="bg-white text-black">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={200}
            className="rounded-md mb-4"
          />
        </CardContent>
      </Card>
    ))}
  </div>
</section>

        <SkillsSection />

      </main>
            
      <ContactForm />
      <footer className="border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2025 Ivan Viquez. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}