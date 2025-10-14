"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="scroll-mt-20 relative overflow-hidden">
      {/* Split Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Visual & Info */}
        <div className="relative bg-[#1a1a1a] text-white p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="mb-8">
              <p className="text-sm font-medium tracking-wider text-[#c4a574] mb-4">CONTACT</p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                Let&apos;s start a conversation
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you&apos;re looking to fortify your products, source premium ingredients, or explore partnership
                opportunities, we&apos;re here to help.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6 mt-12">
              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#2d5f3f]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d5f3f]/30 transition-colors">
                    <Phone className="w-5 h-5 text-[#c4a574]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+254750000020" className="text-white hover:text-[#c4a574] transition-colors">
                      +254 750 000 020
                    </a>
                    <p className="text-sm text-gray-400 mt-2">WhatsApp</p>
                    <a href="https://wa.me/254715100100" className="text-white hover:text-[#c4a574] transition-colors">
                      +254 715 100 100
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#2d5f3f]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d5f3f]/30 transition-colors">
                    <Mail className="w-5 h-5 text-[#c4a574]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:info@vitameals.co" className="text-white hover:text-[#c4a574] transition-colors">
                      info@vitameals.co
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#2d5f3f]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d5f3f]/30 transition-colors">
                    <MapPin className="w-5 h-5 text-[#c4a574]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white">
                      Office Suites, Parklands
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#f5f1eb] p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full">
            <div className="mb-12">
              <h3 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">Ready to collaborate?</h3>
              <p className="text-lg text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#2d5f3f]/10 border border-[#2d5f3f]/20 rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#2d5f3f] mx-auto mb-4" />
                <h4 className="text-2xl font-serif text-[#1a1a1a] mb-2">Thank you!</h4>
                <p className="text-gray-600">We&apos;ve received your message and will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-green-700 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]/20 focus:border-[#2d5f3f] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-green-700 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]/20 focus:border-[#2d5f3f] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-green-700 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]/20 focus:border-[#2d5f3f] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-green-700 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]/20 focus:border-[#2d5f3f] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-green-700 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]/20 focus:border-[#2d5f3f] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-green-700 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]/20 focus:border-[#2d5f3f] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2d5f3f] hover:bg-[#234a32] text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
