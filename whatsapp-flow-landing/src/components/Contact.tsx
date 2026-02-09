'use client'

export default function Contact() {
  return (
    <section
      className="section relative bg-gradient-to-br from-forest to-sage px-5 py-24 md:py-32 text-center text-white"
      data-section="contact"
      id="contact"
    >
      <div className="drag-handle"></div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl md:text-2xl opacity-90 mb-12">
          Let's discuss how WhatsApp Flows can help you scale and automate
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center flex-wrap">
          <a
            href="https://wa.me/254700000000?text=Hi,%20I'm%20interested%20in%20your%20WhatsApp%20Flow%20services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime text-charcoal font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
          >
            💬 WhatsApp Me
          </a>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime text-charcoal font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
          >
            ✉️ Email Me
          </a>
          <a
            href="tel:+254700000000"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime text-charcoal font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
          >
            📞 Call Me
          </a>
        </div>
      </div>
    </section>
  )
}
