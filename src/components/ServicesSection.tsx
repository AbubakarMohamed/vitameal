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
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
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
      <div className="relative min-h-[60vh] lg:min-h-[70vh] bg-stone-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/service-hero-bg.jpg" alt="Services" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-900"></div>
        </div>

        <motion.div
          className="relative z-5 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-8">
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-stone-400"></div>
              <span className="text-sm tracking-[0.3em] text-stone-300 uppercase font-light">Our Services</span>
              <div className="w-16 h-px bg-stone-400"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white mb-8 leading-[1.1] text-balance">
            Transform your nutrition
            <br />
            <span className="italic font-normal text-amber-200">solutions with expertise</span>
          </h2>

          <p className="text-lg md:text-l lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light">
            End-to-end solutions designed for compliance, scalability, and lasting global impact
          </p>
        </motion.div>
      </div>

      <div className="bg-stone-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-white overflow-hidden"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>

                  <div className="absolute top-8 left-8 text-7xl lg:text-8xl font-serif font-light text-white/10 group-hover:text-white/20 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-normal text-white mb-3 leading-tight text-balance">
                      {service.title}
                    </h3>
                    <div className="w-16 h-px bg-amber-400 group-hover:w-24 transition-all duration-500"></div>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <p className="text-stone-600 leading-relaxed text-base lg:text-lg mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="mb-8">
  <ul className="list-disc list-inside space-y-2 text-sm text-stone-700 font-light">
    {service.features.map((feature, idx) => (
      <li key={idx}>{feature}</li>
    ))}
  </ul>
</div>


                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative min-h-[50vh] bg-stone-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/service-cta-bg.jpg" alt="Contact" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/50"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-6 leading-tight text-balance">
            Ready to transform your
            <br />
            <span className="italic font-normal text-amber-200">nutrition solutions?</span>
          </h3>

          <p className="text-lg text-stone-300 mb-10 font-light max-w-2xl mx-auto">
            Let's discuss how our comprehensive services can help you achieve your goals
          </p>

          <Link
                href="/#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#2d5f3f] hover:bg-[#234a32] text-white font-medium rounded-full transition-all duration-300 text-base"
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
