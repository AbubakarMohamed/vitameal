"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-[#1a1a1a] relative overflow-hidden">
      <div className="relative min-h-[70vh] flex items-center justify-center">
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1a1a1a] z-10" />

        {/* Background image placeholder */}
        <div className="absolute inset-0">
          <Image
            src="/modern-food-production-facility-with-natural-light.jpg"
            alt="Vitameals production"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Hero content */}
        <motion.div
          className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-400 text-sm md:text-base font-medium tracking-wider uppercase mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
            Nourishing the future, <span className="italic text-[#789FB3]">one meal</span> at a time
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            Vitameals Africa is a catalyst for change in global nutrition, bridging science and sustenance to create
            healthier communities across continents.
          </p>
        </motion.div>
      </div>

      <div className="bg-white py-7 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission statement */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-xl text-gray-800 leading-relaxed font-light">
              We specialize in facilitating food fortification and providing comprehensive solutions in commodity
              trading. By leveraging science-backed processes and a robust global network, Vitameals supports clients
              worldwide in achieving optimal nutritional quality.
            </p>
          </motion.div>

          {/* Our Approach - numbered sections */}
          <div className="mb-20">
            <h3 className="text-xl md:text-4xl font-serif text-gray-900 text-center mb-16">Our Approach</h3>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {[
                {
                  number: "1",
                  title: "Science-Backed Solutions",
                  description:
                    "We leverage cutting-edge nutritional science to develop fortification strategies that meet the highest international standards, ensuring every product delivers measurable health benefits.",
                },
                {
                  number: "2",
                  title: "Global Network",
                  description:
                    "Our extensive network spans producers, processors, manufacturers, and wholesalers worldwide, enabling seamless commodity trading and knowledge exchange across borders.",
                },
                {
                  number: "3",
                  title: "Quality Assurance",
                  description:
                    "From sourcing to delivery, we maintain rigorous quality controls backed by ISO, HACCP, and Halal certifications, guaranteeing compliance and excellence at every step.",
                },
                {
                  number: "4",
                  title: "Sustainable Impact",
                  description:
                    "We're committed to creating lasting change by empowering communities with access to fortified foods that combat malnutrition and support healthy development.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0f4c81] text-white flex items-center justify-center text-xl font-serif">
                      {item.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 text-center mb-4">
              Combining innovation, sustainability, and expertise
            </h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our integrated approach ensures that every product meets the highest standards while creating positive
              impact across the value chain.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  image: "/handshake-partnership-business-collaboration.jpg",
                  title: "Strategic Partnerships",
                  description: "Building lasting relationships with industry leaders",
                },
                {
                  image: "/laboratory-food-testing-quality-control.jpg",
                  title: "Rigorous Testing",
                  description: "Every batch meets international quality standards",
                },
                {
                  image: "/fortified-food-grains-nutrition.jpg",
                  title: "Fortified Excellence",
                  description: "Delivering nutrition that transforms lives",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
        </div>
      </div>

      
    </section>
  )
}

export default AboutSection
