import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative bg-[#faf9f7] min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #2d5f3f 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Typography focused */}
          <div className="space-y-8 lg:space-y-10 py-12 lg:py-0">

            {/* Main headline with elegant serif-style */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a1a1a] leading-[0.95] tracking-tight">
              <span className="block text-balance">Empowering</span>
              <span className="block text-balance italic font-light">healthy generations</span>
              <span className="block text-balance">through innovation</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#6b7280] leading-relaxed max-w-xl font-light">
              Vitameals Africa delivers end-to-end food fortification, global commodity trading, and custom nutritional
              solutions across Africa and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

              <Link
                href="/#products"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#2d5f3f] text-[#2d5f3f] hover:bg-[#2d5f3f] hover:text-white font-medium rounded-full transition-all duration-300 text-base"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

            
          </div>

          {/* Right Content - Image showcase */}
          <div className="relative h-[500px] lg:h-[400px]">
            {/* Main image */}
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Rectangle14.webp"
                alt="Vitameals Nutrition Solutions"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
