"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Award, CheckCircle2, Microscope } from "lucide-react"

const certifications = [
  {
    title: "Kosher Certification",
    body: "Certified by Kosher SA, ensuring adherence to strict kosher dietary guidelines.",
    logo: "/bd.png",
    standard: "Kosher SA",
  },
  {
    title: "SGS FSSC 22000",
    body: "Certified by SGS for Food Safety System Certification, a globally recognized food safety standard.",
    logo: "/sgs.png",
    standard: "FSSC 22000",
  },
  {
    title: "HACCP Food Safety Standards",
    body: "Complies with Hazard Analysis and Critical Control Points (HACCP) protocols for food safety management.",
    logo: "/hapcc.png",
    standard: "HACCP",
  },
  
  {
    title: "Halaal Certification – Turkey",
    body: "Approved for Halaal production, meeting the requirements of Islamic dietary laws in Turkey.",
    logo: "/halal.png",
    standard: "Halaal TR",
  },
  {
    title: "ISO Certifications",
    body: "Various ISO certifications, showcasing commitment to quality management systems.",
    logo: "/iso.png",
    standard: "ISO Certified",
  },
]

const qualityPillars = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every product undergoes rigorous testing protocols",
  },
  {
    icon: Award,
    title: "Global Standards",
    description: "Certified by internationally recognized bodies",
  },
  {
    icon: Microscope,
    title: "Lab Tested",
    description: "Advanced quality control at every production stage",
  },
  {
    icon: CheckCircle2,
    title: "Compliance",
    description: "Meeting the highest regulatory requirements",
  },
]

const QualitySection = () => {
  const [activeCert, setActiveCert] = useState(0)

  return (
    <section id="quality" className="scroll-mt-20 relative overflow-hidden bg-[#1a1a1a]">
      <div className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="/process-quality.jpg" alt="Quality Control" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full border border-stone-400/30 bg-stone-900/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-stone-300 text-sm font-light tracking-wider uppercase">Certified Excellence</span>
          </motion.div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-100 mb-8 leading-tight">
            Quality you can <span className="italic text-stone-300">trust</span>
          </h2>

          <p className="text-l md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            We exclusively partner with manufacturing plants certified by internationally recognized standards, ensuring
            the highest quality and compliance with industry regulations.
          </p>

          {/* Quality Pillars */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {qualityPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2d5016]/20 border border-[#2d5016]/30 mb-3">
                  <pillar.icon className="w-6 h-6 text-[#9cb88f]" />
                </div>
                <h3 className="text-stone-100 font-medium mb-1">{pillar.title}</h3>
                <p className="text-stone-400 text-sm font-light">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-stone-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4">Our Certifications</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
              Recognized by the world's most respected certification bodies
            </p>
          </motion.div>

          <motion.div
  className="flex flex-row flex-wrap justify-center gap-6" // ✅ Added this line
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  }}
>
  {certifications.map((cert, index) => (
    <motion.div
      key={index}
      className="group relative bg-white rounded-2xl p-8 border border-stone-200 hover:border-[#2d5016] transition-all duration-500 cursor-pointer flex items-center justify-center"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      }}
    >
      <img
        src={cert.logo || '/placeholder.svg'}
        alt={cert.title}
        className="max-h-20 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  ))}
</motion.div>



          <motion.div
            className="text-center max-w-3xl mx-auto pt-12 border-t border-stone-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-2xl text-stone-800 leading-relaxed italic">
              Every product we deliver meets rigorous global safety, ethical, and quality benchmarks—so you can focus on
              impact, not compliance risk.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default QualitySection
