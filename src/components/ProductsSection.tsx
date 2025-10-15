"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const productCategories = [
  {
    id: 1,
    title: "Food Fortification & Nutrition",
    subtitle: "Essential Micronutrients",
    description:
      "Customized vitamin and mineral premix blends, single micronutrients, and encapsulated nutrients designed for fortification of staple foods.",
    longDescription:
      "Our fortification solutions are engineered to address nutritional deficiencies at scale. We provide comprehensive premix formulations for wheat flour, maize meal, edible oils, dairy products, and sugars, ensuring optimal bioavailability and stability.",
    image: "/fortification-product.jpg",
    features: ["Vitamin Premixes", "Mineral Blends", "Encapsulated Nutrients", "Custom Formulations"],
    stats: { value: "98%", label: "Bioavailability" },
    applications: ["Wheat Flour", "Edible Oils", "Dairy Products", "Staple Foods"],
  },
  {
    id: 2,
    title: "Human & Sports Nutrition",
    subtitle: "Performance & Wellness",
    description:
      "Dietary supplements, functional ingredients, and sports nutrition products including proteins, amino acids, probiotics, and omega-3 fatty acids.",
    longDescription:
      "From elite athletes to health-conscious consumers, our nutrition portfolio delivers scientifically-backed ingredients that support performance, recovery, and overall wellness.",
    image: "/sports-nutrition-product.jpg",
    features: ["Protein Powders", "Probiotics", "Omega-3 Fatty Acids", "Collagen Peptides"],
    stats: { value: "50+", label: "Formulations" },
    applications: ["Sports Nutrition", "Dietary Supplements", "Functional Foods", "Wellness Products"],
  },
  {
    id: 3,
    title: "Pharmaceutical Ingredients",
    subtitle: "Medical Grade Quality",
    description:
      "High-grade active pharmaceutical ingredients (APIs), excipients, binders, and nutraceutical ingredients for drug manufacturing.",
    longDescription:
      "Our pharmaceutical-grade ingredients meet the strictest global standards, supporting the production of safe, effective medications and nutraceuticals.",
    image: "/pharmaceutical-product.jpg",
    features: ["Active APIs", "Excipients", "Binders", "Nutraceuticals"],
    stats: { value: "GMP", label: "Certified" },
    applications: ["Drug Manufacturing", "Nutraceuticals", "Medical Formulations", "Clinical Nutrition"],
  },
  {
    id: 4,
    title: "Commodities & Raw Materials",
    subtitle: "Global Sourcing Excellence",
    description:
      "Bulk supplies of grains, cereals, pulses, dairy products, edible oils, sweeteners, and industrial additives with competitive pricing.",
    longDescription:
      "Leveraging our global network, we provide reliable access to high-quality commodities, ensuring supply chain stability and cost efficiency for manufacturers worldwide.",
    image: "/commodities-product.jpg",
    features: ["Grains & Cereals", "Edible Oils", "Sweeteners", "Industrial Additives"],
    stats: { value: "Global", label: "Sourcing" },
    applications: ["Food Manufacturing", "Industrial Processing", "Bulk Distribution"],
  },
  {
    id: 5,
    title: "Specialty Ingredients",
    subtitle: "Innovation in Every Blend",
    description:
      "Natural extracts, botanical powders, sugar alternatives, prebiotics, emulsifiers, stabilizers, and antioxidants for specialized applications.",
    longDescription:
      "Our specialty ingredients enable food manufacturers to create innovative products that meet evolving consumer demands for natural, functional, and clean-label solutions.",
    image: "/specialty-product.jpg",
    features: ["Natural Extracts", "Prebiotics", "Emulsifiers", "Antioxidants"],
    stats: { value: "100+", label: "Ingredients" },
    applications: ["Clean Label", "Functional Foods", "Natural Products", "Innovation R&D"],
  },
  {
    id: 6,
    title: "Agricultural & Animal Nutrition",
    subtitle: "Sustainable Growth Solutions",
    description:
      "Animal feed fortificants, soil and plant nutrients, including fortified premixes, fertilizers, and micronutrient blends.",
    longDescription:
      "Supporting sustainable agriculture and livestock production with scientifically formulated nutrition solutions that enhance yield, health, and productivity.",
    image: "/agricultural-product.jpg",
    features: ["Feed Fortificants", "Soil Nutrients", "Aquaculture", "Crop Production"],
    stats: { value: "+40%", label: "Yield Increase" },
    applications: ["Poultry & Livestock", "Aquaculture", "Crop Nutrition", "Soil Health"],
  },
]

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(productCategories[0])
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="products" className="relative py-16 px-6 sm:px-10 lg:px-16 bg-[#faf9f7] overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#0f4c81] mb-4 font-medium">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] mb-6 leading-[1.1] text-balance">
            Precision nutrition for <span className="italic text-[#0f4c81]">every need</span>
          </h2>
          <p className="text-lg md:text-l text-[#666] max-w-3xl mx-auto leading-relaxed">
            From fortified staples to specialized ingredients, our comprehensive range serves global nutrition
            challenges with scientific excellence.
          </p>
        </motion.div>

        {/* Main Product Display - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Featured Product Image */}
          <motion.div
            key={selectedProduct.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#0f4c81] shadow-2xl"
          >
            <Image
              src={selectedProduct.image || "/placeholder.svg"}
              alt={selectedProduct.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            
          </motion.div>

          {/* Right: Product Details */}
          <motion.div
            key={`details-${selectedProduct.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#0f4c81] mb-3 font-medium">
              {selectedProduct.subtitle}
            </p>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6 leading-tight">
              {selectedProduct.title}
            </h3>
            <p className="text-lg text-[#666] mb-6 leading-relaxed">{selectedProduct.longDescription}</p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {selectedProduct.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-2 flex-shrink-0"></div>
                  <span className="text-[#444] text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Applications */}
            <div className="mb-8">
              <p className="text-sm font-medium text-[#1a1a1a] mb-3">Key Applications</p>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.applications.map((app, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-2 bg-white border border-[#0f4c81] text-[#444] rounded-full hover:border-[#2d5f4f] hover:text-[#2d5f4f] transition-colors"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            
          </motion.div>
        </div>

        {/* Product Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {productCategories.map((product, i) => (
            <motion.button
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedProduct(product)}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                selectedProduct.id === product.id ? "ring-4 ring-[#0f4c81] scale-105" : "hover:scale-105"
              }`}
            >
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
              <div
                className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                  selectedProduct.id === product.id || hoveredId === product.id
                    ? "from-[#2d5f4f]/90 via-[#2d5f4f]/50 to-transparent"
                    : "from-black/60 via-black/30 to-transparent"
                }`}
              ></div>

              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <p className="text-white font-medium text-sm leading-tight text-balance">{product.title}</p>
                {(selectedProduct.id === product.id || hoveredId === product.id) && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                    <span className="text-xs text-white/80">{product.subtitle}</span>
                  </motion.div>
                )}
              </div>

              {/* Number Badge */}
              <div
                className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  selectedProduct.id === product.id
                    ? "bg-white text-[#2d5f4f]"
                    : "bg-white/20 text-white backdrop-blur-sm"
                }`}
              >
                {i + 1}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-[#e5e5e5]">
            <h3 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-4">Can&apos;t find what you&apos;re looking for?</h3>
            <p className="text-lg text-[#666] mb-8 leading-relaxed">
              Our team specializes in custom formulations tailored to your specific requirements. Let's discuss your
              unique nutrition challenges.
            </p>
            <Link
                href="/#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#0f4c81] hover:bg-[#0f4c81] text-white font-medium rounded-full transition-all duration-300 text-base"
              >  Schedule a Consultation
              <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
