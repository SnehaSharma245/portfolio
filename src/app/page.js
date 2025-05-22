import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 text-gray-800">
      <header className="flex items-center justify-between bg-gradient-to-r from-sky-600 to-sky-900 text-white shadow-lg p-6 rounded-lg">
        <h1 className="text-4xl font-bold">Sneha Sharma</h1>
        <nav className="flex gap-6">
          <a href="#about" className="hover:underline text-lg font-semibold">
            About
          </a>
          <a href="#skills" className="hover:underline text-lg font-semibold">
            Skills
          </a>
          <a href="#projects" className="hover:underline text-lg font-semibold">
            Projects
          </a>
          <a href="#contact" className="hover:underline text-lg font-semibold">
            Contact
          </a>
        </nav>
      </header>

      <main className="mt-10">
        <section id="about" className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi! I am Sneha Sharma, a Computer Science Engineer passionate about
            building impactful projects using MERN stack and Next.js. I am
            driven by innovation and dedicated to continuous learning.
          </p>
        </section>

        <section
          id="skills"
          className="bg-white p-8 rounded-lg shadow-lg mb-10"
        >
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <ul className="list-disc pl-8 text-lg">
            <li>
              <strong>Frontend:</strong> Next.js, React.js, Tailwind,
              JavaScript, HTML, CSS
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, Postman
            </li>
            <li>
              <strong>Database:</strong> MongoDB
            </li>
            <li>
              <strong>Languages:</strong> C, C++, JavaScript
            </li>
            <li>
              <strong>Version Control:</strong> Git
            </li>
          </ul>
        </section>

        <section
          id="projects"
          className="bg-white p-8 rounded-lg shadow-lg mb-10"
        >
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent>
                <h3 className="text-2xl font-medium">InvisiFeed</h3>
                <p className="text-lg mt-4">
                  Anonymous Feedback platform with 1,000+ users, AI-driven
                  insights. Automated invoice generation and coupon management
                  integrated.
                </p>
                <a
                  href="https://invisifeed.vercel.app"
                  className="text-indigo-500 underline text-lg"
                >
                  View Project
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-2xl font-medium">InactiTab</h3>
                <p className="text-lg mt-4">
                  Chrome Extension for advanced tab management using IndexedDB,
                  tracking user activity for seamless browsing.
                </p>
                <a
                  href="https://github.com/SnehaSharma245/Inacti-Tab"
                  className="text-indigo-500 underline text-lg"
                >
                  View Project
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-2xl font-medium">QuickBites</h3>
                <p className="text-lg mt-4">
                  MERN-based food delivery platform with secure Stripe
                  integration and performance optimization.
                </p>
                <a
                  href="https://github.com/SnehaSharma245/Food-Delivery"
                  className="text-indigo-500 underline text-lg"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:snehav2109@gmail.com"
              className="text-indigo-500 underline"
            >
              snehav2109@gmail.com
            </a>
          </p>
          <p className="text-lg">Phone: +91 87705 79552</p>
          <p className="text-lg">
            GitHub:{" "}
            <a
              href="https://github.com/SnehaSharma245"
              className="text-indigo-500 underline"
            >
              SnehaSharma245
            </a>
          </p>
          <p className="text-lg">Address: 146, Shyam Nagar N.X., Indore</p>
        </section>
      </main>

      <footer className="text-center bg-gradient-to-r from-sky-600 to-sky-900text-white p-6 rounded-lg mt-10">
        <p className="text-lg">
          &copy; 2025 Sneha Sharma. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
