// ContactSection.tsx
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20 py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In <span className="text-emerald-600">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you have a query, need more information, or are ready to kickstart your project, we are just a message away.
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Strategic Message + Details */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Your Strategic Partner in Nutrition
            </h3>
            <p className="text-gray-700 mb-8">
              At Vitameals Africa, we pride ourselves on being your strategic partner in the international food fortification and nutritional commodities markets. From our very first consultation to final delivery and ongoing support, we ensure you’re equipped with the latest technological and regulatory insights.
            </p>

            <div className="space-y-4">
              <ContactItem
                label="Phone"
                value="+254 750 000 020"
                href="tel:+254750000020"
              />
              <ContactItem
                label="WhatsApp"
                value="+254 715 100 100"
                href="https://wa.me/254715100100"
                isWhatsApp
              />
              <ContactItem
                label="Email"
                value="info@vitameals.co"
                href="mailto:info@vitameals.co"
              />
              <ContactItem
                label="Website"
                value="www.vitameals.co"
                href="https://www.vitameals.co"
                target="_blank"
              />
              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-gray-600 mt-1">Office Suites, Parklands, Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Right: Visual + CTA */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full flex flex-col justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to Collaborate?</h3>
              <p className="text-gray-600 mb-6">
                Reach out today to discuss how we can support your nutrition, fortification, or supply chain goals.
              </p>
              <a
                href="mailto:info@vitameals.co"
                className="inline-block w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition duration-300"
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Contact Item Component
const ContactItem = ({
  label,
  value,
  href,
  isWhatsApp = false,
  target = "_self"
}: {
  label: string;
  value: string;
  href: string;
  isWhatsApp?: boolean;
  target?: string;
}) => (
  <div>
    <p className="font-medium text-gray-900">{label}</p>
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`text-emerald-600 hover:text-emerald-800 inline-flex items-center mt-1 ${isWhatsApp ? 'font-medium' : ''}`}
    >
      {value}
      {isWhatsApp && (
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.48 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )}
    </a>
  </div>
);

export default ContactSection;