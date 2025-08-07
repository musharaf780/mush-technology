import React from 'react'
import { ROUTES } from '../routes'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href={ROUTES.HOME} className="text-2xl font-bold text-blue-600">
              Mush Tech
            </a>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Portfolio
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                Team
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the Future of
            <span className="text-blue-600 block">Software Development</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We create innovative, scalable, and robust software solutions that
            drive business growth and digital transformation for companies of
            all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              Get Started
            </a>
            <a
              href="#portfolio"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Web Development',
                description:
                  'Modern, responsive web applications built with cutting-edge technologies.',
                icon: '🌐',
              },
              {
                title: 'Mobile Apps',
                description:
                  'Native and cross-platform mobile applications for iOS and Android.',
                icon: '📱',
              },
              {
                title: 'Cloud Solutions',
                description:
                  'Scalable cloud infrastructure and migration services.',
                icon: '☁️',
              },
              {
                title: 'Consulting',
                description:
                  'Expert technical consulting and architecture design.',
                icon: '💡',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#services"
              className="text-blue-600 font-medium hover:text-blue-800 transition duration-200"
            >
              Learn more about our services →
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '25+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our
            expert development team.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mush Tech</h3>
              <p className="text-gray-400">
                Building innovative software solutions for the digital age.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition duration-200"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition duration-200"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition duration-200"
                  >
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition duration-200"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="hover:text-white transition duration-200"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-white transition duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="hover:text-white transition duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-white transition duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-white transition duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mush Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
