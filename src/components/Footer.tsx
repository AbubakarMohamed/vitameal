"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")



  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Brand & Newsletter */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group mb-8">
              <img
                src="/Logo.webp"
                alt="Vitameal Logo"
                className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
              />
              <span className="font-serif text-2xl text-white">Vitameal</span>
            </Link>

            <p className="text-[#0f4c81] font-serif text-lg italic mb-8">Empowering healthy generations</p>

            <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
              Your strategic partner in food fortification and nutritional commodities across Africa and beyond.
              Building a healthier future, one meal at a time.
            </p>

            
            
          </div>

          {/* Right Columns - Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Explore */}
            <div>
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Explore</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/#about" },
                  { label: "Services", href: "/#services" },
                  { label: "Products", href: "/#products" },
                  { label: "Our Process", href: "/#process" },
                  { label: "Quality", href: "/#quality" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-[#0f4c81] transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@vitameals.co"
                    className="text-gray-400 hover:text-[#0f4c81] transition-colors text-sm flex items-start gap-2 group"
                  >
                    <Mail className="w-4 h-4 mt-0.5 text-[#0f4c81] group-hover:scale-110 transition-transform" />
                    <span>info@vitameals.co</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+254750000020"
                    className="text-gray-400 hover:text-[#0f4c81] transition-colors text-sm flex items-start gap-2 group"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-[#0f4c81] group-hover:scale-110 transition-transform" />
                    <span>+254 750 000 020</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/254715100100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0f4c81] transition-colors text-sm flex items-start gap-2 group"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-[#0f4c81] group-hover:scale-110 transition-transform" />
                    <span>+254 715 100 100</span>
                  </a>
                </li>
                <li>
                  <div className="text-gray-400 text-sm flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-[#0f4c81] flex-shrink-0" />
                    <span>Parklands, Nairobi, Kenya</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Legal & Certifications */}
            <div>
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Certifications</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { src: "/iso.png", alt: "ISO Certified" },
                  { src: "/hapcc.png", alt: "HACCP Certified" },
                  { src: "/halal.png", alt: "Halal Certified" },
                  { src: "/sgs.png", alt: "SGS Certified" },
                ].map((cert) => (
                  <div
                    key={cert.alt}
                    className="bg-white/5 rounded-lg p-2 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <img
                      src={cert.src || "/placeholder.svg"}
                      alt={cert.alt}
                      className="w-full h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-[#0f4c81] transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-[#0f4c81] transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Vitameal Africa.</p>
                <p className="text-gray-500 text-sm">All rights reserved.</p>
              </ul>
              <div >
        
        </div>
            </div>
          </div>
          
        </div>

        

      </div>
    </footer>
  )
}

export default Footer
