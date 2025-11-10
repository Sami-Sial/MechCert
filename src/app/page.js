"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Shield,
  Gauge,
  Wrench,
  Settings,
  Award,
  GraduationCap,
  TrendingUp,
  Users,
  Target,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function MechCertClone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1920&h=1080&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Asset Integrity & Reliability",
      description:
        "Ensuring the safety and longevity of your assets through comprehensive integrity assessments and reliability engineering.",
      icon: Shield,
    },
    {
      title: "Industrial Services",
      description:
        "Providing specialized industrial solutions, including maintenance, repair, and operational support, to optimize your facility's performance.",
      icon: Settings,
    },
    {
      title: "Lifting Equipment & Tubular Inspection",
      description:
        "Conducting thorough inspections of lifting equipment and tubular structures to ensure compliance with safety standards.",
      icon: Gauge,
    },
    {
      title: "Calibration & Testing",
      description:
        "Offering precise calibration and testing services for instruments to maintain accuracy and reliability in measurements.",
      icon: Target,
    },
    {
      title: "NDT Services",
      description:
        "Utilizing advanced NDT techniques to detect material defects and ensure structural integrity without causing damage to the equipment.",
      icon: Wrench,
    },
    {
      title: "Training Services",
      description:
        "Providing comprehensive training programs to equip your team with the necessary skills and knowledge for industry best practices.",
      icon: GraduationCap,
    },
  ];

  const accreditations = [
    { name: "ISO 9001", logo: "ISO" },
    { name: "ASNT", logo: "ASNT" },
    { name: "PCB", logo: "PCB" },
    { name: "PCSIR", logo: "PCSIR" },
    { name: "PSQCA", logo: "PSQCA" },
    { name: "DRAP", logo: "DRAP" },
  ];

  const clients = [
    "Pyramid Gas",
    "Imperial Gases",
    "Links International",
    "Innovative Biscuits",
    "Fatima Group",
    "Packages Group",
    "Jadeed Group",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>00923005188767</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>mechcertinfo@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 cursor-pointer hover:text-teal-200 transition" />
            <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 cursor-pointer hover:text-teal-200 transition" />
            <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 cursor-pointer hover:text-teal-200 transition" />
            <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 cursor-pointer hover:text-teal-200 transition" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl sm:text-3xl font-black tracking-tight">
                <span
                  className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  Mech
                </span>
                <span
                  className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  Cert
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                Home
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-teal-600 font-medium flex items-center gap-1 transition">
                  About Us
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-teal-600 font-medium flex items-center gap-1 transition">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                Sectors
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                News & Events
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-teal-600 font-medium transition"
              >
                Contact
              </a>
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-1.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-sm">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t">
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-600 font-medium transition"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-600 font-medium transition"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-600 font-medium transition"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-600 font-medium transition"
                >
                  Sectors
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-600 font-medium transition"
                >
                  News & Events
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-teal-600 font-medium transition"
                >
                  Contact
                </a>
                <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-1.5 rounded-lg hover:shadow-lg transition font-semibold w-full text-sm">
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Animated Background */}
      <div className="relative h-[calc(100vh-5rem)] overflow-hidden">
        {/* Animated Background Images */}
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: index === currentImage ? 1 : 0,
              scale: index === currentImage ? 1.2 : 1,
            }}
            transition={{ duration: 3 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/85 to-cyan-900/90" />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-start pt-8 pb-20 sm:pb-8">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              Industrial Inspection And Testing Services In Pakistan
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-teal-100">
              Pakistan's leading third party inspection service provider in
              Testing, Inspection, Certification, Assurance, Supply Chain, and
              Project Execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-base sm:text-lg"
              >
                Our Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-teal-900 transition-all duration-300 font-semibold text-base sm:text-lg"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImage(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-white w-6 sm:w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                MechCert
              </span>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              MechCert (Private) Limited is Pakistan's top third-party
              Industrial Inspection Company and a leading service provider in
              the areas of Third-party Testing, Certification, Assurance, Supply
              Chain management, and Project Execution.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Since its inception in 1998, MechCert has been endeavoring to
              offer Testing Inspection Certification and Compliance (TICC)
              services to the highest levels of professionalism and integrity,
              with the help of our skilled, qualified human capital as well as
              state of the art inspection equipment.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              We offer Third-Party Inspection services across Pakistan, and our
              top priority remains the safety and profitability of our
              customer's operations. With our offices and staff located in
              Lahore, Islamabad, and Karachi, our speed of service delivery is
              unmatched.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              Learn More
            </motion.button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop"
              alt="Industrial Inspection"
              className="rounded-2xl shadow-2xl w-full h-80 sm:h-96 object-cover"
            />
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 sm:p-6 rounded-xl shadow-xl max-w-[120px] sm:max-w-[150px]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl sm:text-4xl font-black">25+</div>
              <div className="text-xs sm:text-sm font-medium">
                Years Experience
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="bg-gradient-to-br from-gray-50 to-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive industrial inspection and testing solutions tailored
              to meet your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="mt-4">
                  <span className="text-teal-500 font-semibold group-hover:underline inline-flex items-center gap-2">
                    Learn More{" "}
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <motion.div
        className="bg-gradient-to-r from-teal-700 to-cyan-600 text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Clock, value: "25+", label: "Years of Experience" },
              { icon: Users, value: "500+", label: "Clients Served" },
              { icon: TrendingUp, value: "1000+", label: "Projects Completed" },
              { icon: Award, value: "50+", label: "Expert Team" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group hover:scale-110 transition-transform duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-teal-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Clients Section */}
      <motion.div
        className="py-16 md:py-24 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Clients
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trusted by leading organizations across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 flex items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="font-bold text-teal-800 text-lg">{client}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Accreditations Section */}
      <motion.div
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Accreditations &{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Memberships
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our extensive accreditations and memberships are a testament to
              our unwavering commitment to quality, safety, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {accreditations.map((accreditation, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-teal-700 mb-2">
                    {accreditation.logo}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {accreditation.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* News & Events Section */}
      <motion.div
        className="bg-white py-16 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              News &{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Stay Updated with MechCert. Explore the Latest Events, News, and
              Industry Insights That Drive Innovation and Excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center text-white relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      item === 1
                        ? "1504917595217-d4dc5ebe6122"
                        : item === 2
                        ? "1581094794329-c8112a89af12"
                        : "1530124566582-a618bc2615dc"
                    }?w=800&h=400&fit=crop`}
                    alt={`News ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-teal-500 font-bold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Nov {item}, 2025
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition">
                    Industry Update {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Latest developments in industrial inspection and testing
                    services across Pakistan.
                  </p>
                  <span className="text-teal-600 font-semibold group-hover:underline inline-flex items-center gap-2">
                    Read More{" "}
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-white py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Contact us today for reliable inspection and testing services
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-teal-600 px-8 sm:px-10 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          >
            Request a Quote
          </motion.button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-black mb-4 tracking-tight">
                <span className="text-teal-400">Mech</span>
                <span className="text-cyan-400">Cert</span>
              </div>
              <p className="text-gray-400 mb-4">
                Pakistan's leading third party inspection service provider.
              </p>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-500 transition">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-500 transition">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-500 transition">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-500 transition">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-teal-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    Sectors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-teal-400">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    Asset Integrity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    NDT Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    Calibration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    Training
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-teal-400">
                Contact Info
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <div className="font-semibold text-white mb-1">Office:</div>
                    <span>69-B Khyban-e-Ameen, Lahore</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <div className="font-semibold text-white mb-1">
                      Factory:
                    </div>
                    <span>35-km Shamkay Bhattian Main Multan Road, Lahore</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                  <span>00923005188767</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <div className="font-semibold text-white">WhatsApp:</div>
                    <span>00923414292846</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                  <span>mechcertinfo@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MechCert (Private) Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
