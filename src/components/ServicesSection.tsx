"use client"

import { motion, type Variants } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const services = [
  {
    title: "Food Fortification Solutions",
    description:
      "Customized vitamin & mineral premix blends, technical consultation on fortification strategies, and comprehensive nutritional enhancement programs.",
    image: "/service-fortification.jpg",
    features: ["Custom Premix Blends", "Technical Consultation", "Nutritional Analysis"],
  },
  {
    title: "International Trade & Sourcing",
    description:
      "Global procurement of premium raw materials, optimized supply chain management, and strategic sourcing partnerships worldwide.",
    image: "/service-sourcing.jpg",
    features: ["Global Procurement", "Supply Chain Optimization", "Quality Assurance"],
  },
  {
    title: "Custom Formulation & Blending",
    description:
      "Precision nutritional blends for food and beverage applications, flexible supply options, and innovative product development.",
    image: "/service-formulation.jpg",
    features: ["Custom Formulations", "Product Development", "Flexible Supply"],
  },
  {
    title: "Bulk Supply & Distribution",
    description:
      "Wholesale trading solutions, comprehensive packaging services, and efficient inventory management systems.",
    image: "/service-distribution.jpg",
    features: ["Wholesale Trading", "Packaging Solutions", "Inventory Management"],
  },
  {
    title: "Turnkey Factory Development",
    description:
      "Complete factory setup and design, process optimization strategies, and comprehensive workforce training programs.",
    image: "/service-factory.jpg",
    features: ["Factory Setup", "Process Optimization", "Workforce Training"],
  },
  {
    title: "Regulatory & Quality Assurance",
    description:
      "Expert compliance advisory, rigorous product testing protocols, and comprehensive certification support for full traceability.",
    image: "/service-quality.jpg",
    features: ["Compliance Advisory", "Product Testing", "Certification Support"],
  },
]

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0)

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="services" className="scroll-mt-20 relative overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative min-h-[60vh] lg:min-h-[70vh] bg-stone-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/service-hero-bg.jpg"
            alt="Services"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-900"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-stone-400"></div>
              <span className="text-sm tracking-[0.3em] text-stone-300 uppercase font-light">Our Services</span>
              <div className="w-12 h-px bg-stone-400"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white mb-6 leading-[1.1]">
            Transform your nutrition
            <br />
            <span className="italic font-normal text-[#789FB3]">solutions with expertise</span>
          </h2>

          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light">
            End-to-end solutions designed for compliance, scalability, and lasting global impact
          </p>
        </motion.div>
      </div>

      {/* SERVICES GRID */}
      <div className="bg-stone-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                onMouseEnter={() => setActiveService(index)}
              >
                {/* IMAGE */}
                <div className="relative h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl md:text-3xl font-serif font-normal text-white mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <div className="w-16 h-px bg-[#789FB3] group-hover:w-24 transition-all duration-500"></div>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="p-6 sm:p-8">
                  <p className="text-stone-600 leading-relaxed text-base md:text-lg mb-5 font-light">
                    {service.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-stone-700 font-light">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative min-h-[50vh] bg-stone-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/service-cta-bg.jpg"
            alt="Contact"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/50"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-6 leading-tight">
            Ready to transform your
            <br />
            <span className="italic font-normal text-[#789FB3]">nutrition solutions?</span>
          </h3>

          <p className="text-lg text-stone-300 mb-10 font-light max-w-2xl mx-auto">
            Let&apos;s discuss how our comprehensive services can help you achieve your goals
          </p>

          <Link
            href="/#contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-[#0f4c81] hover:bg-[#1C506D] text-white font-medium rounded-full transition-all duration-300 text-base"
          >
            <span>Start Your Project</span>
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
