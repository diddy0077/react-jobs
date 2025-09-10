import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-indigo-700 text-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / App Name */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold tracking-wide">React Jobs</h2>
          <p className="text-sm md:text-base text-gray-200">
            Your go-to platform for tech job listings.
          </p>
        </div>

        {/* Contact / Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/diddy0077"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-gray-200 transition duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-udeh-a03971350/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-gray-200 transition duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:danieludeh007@yahoo.com"
            className="transform hover:scale-110 hover:text-gray-200 transition duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-indigo-800 text-center py-3 text-sm text-gray-300">
        © {new Date().getFullYear()} React Jobs. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
