"use client"
import { useState } from "react"
import Image from "next/image"

const processSteps = [
  {
    number: "01",
    title: "Consultation & Needs Assessment",
    description:
      "An initial discussion to determine fortification requirements, commodity specifications, or factory development needs; supported by market and regulatory analysis.",
    image: "/process-consultation.jpg",
    details:
      "We begin by understanding your unique requirements, market position, and regulatory landscape to create a tailored solution.",
  },
  {
    number: "02",
    title: "Sourcing & Procurement",
    description:
      "Leveraging a global network to procure the highest quality raw materials and ingredients while ensuring transparent supplier verification.",
    image: "/process-sourcing.jpg",
    details:
      "Our extensive global network ensures access to premium ingredients with complete traceability and quality assurance.",
  },
  {
    number: "03",
    title: "Custom Formulation & Blending",
    description:
      "Tailoring nutritional blends with extensive lab testing for stability, bioavailability, and compliance with international standards.",
    image: "/process-formulation.jpg",
    details:
      "Advanced laboratory testing and formulation expertise ensure optimal nutrition delivery and product stability.",
  },
  {
    number: "04",
    title: "Quality Assurance & Compliance",
    description:
      "Implementation of rigorous testing protocols, documentation support, and third-party certification to meet all regulatory mandates.",
    image: "/process-quality.jpg",
    details:
      "Multi-layered quality control systems and international certifications guarantee product excellence and safety.",
  },
  {
    number: "05",
    title: "Logistics & Delivery",
    description:
      "Utilizing streamlined global shipping practices and inventory management systems to ensure timely delivery and efficiency.",
    image: "/process-logistics.jpg",
    details:
      "Sophisticated supply chain management ensures your products arrive on time, every time, anywhere in the world.",
  },
  {
    number: "06",
    title: "Implementation & Ongoing Support",
    description:
      "For factory setups, this includes turnkey installation, process optimization, comprehensive training, and continuous after-sales support.",
    image: "/process-support.jpg",
    details: "Long-term partnership with dedicated support teams ensures sustained success and continuous improvement.",
  },
]

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section
      id="process"
      className="scroll-mt-20 py-10 md:py-12 lg:py-10 px-4 sm:px-6 lg:px-8 bg-stone-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase mb-6">Our Process</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-8 leading-tight">
            From Vision to
            <br />
            <span className="italic font-normal">Reality</span>
          </h2>
          <p className="text-lg md:text-l text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Six meticulously crafted steps that transform your nutrition goals into tangible impact across communities
            worldwide.
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-10 mb-20">
          {/* Left: Featured Step with Large Image */}
          <div className="sticky top-24 h-fit">
            <div className="relative aspect-[4/3.4] rounded-3xl overflow-hidden bg-stone-200 group">
              <Image
                src={processSteps[activeStep].image || "/placeholder.svg"}
                alt={processSteps[activeStep].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>

              

              {/* Step info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-sm font-medium tracking-wider uppercase mb-3 text-stone-300">
                  Step {processSteps[activeStep].number}
                </div>
                <h3 className="font-serif text-3xl font-light mb-4 leading-tight">{processSteps[activeStep].title}</h3>
                <p className="text-stone-200 leading-relaxed text-sm">{processSteps[activeStep].details}</p>
              </div>
            </div>
          </div>

          {/* Right: Step List */}
          <div >
            {processSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                  index === activeStep
                    ? "bg-[#0f4c81] text-white shadow-xl"
                    : "bg-white text-stone-900 hover:bg-stone-100"
                }`}
              >
                <div className="flex items-start gap-1">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-serif text-2xl transition-all duration-300 ${
                      index === activeStep ? "bg-white/20 text-white" : "bg-stone-100 text-stone-400"
                    }`}
                  >
                    {step.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-serif text-2xl font-light mb-3 transition-colors duration-300 ${
                        index === activeStep ? "text-white" : "text-stone-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    
                  </div>

                  
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-3">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10]">
                <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>

                {/* Step number */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-serif text-xl text-white">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-light text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm mb-4">{step.description}</p>
                <p className="text-stone-500 text-xs leading-relaxed">{step.details}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default ProcessSection
