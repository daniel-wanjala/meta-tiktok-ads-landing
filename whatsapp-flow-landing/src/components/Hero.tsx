'use client'

export default function Hero() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-forest to-sage px-5 py-20 md:py-28 text-center" data-section="hero">
      {/* Animated background glow */}
      <div className="absolute -top-48 -right-32 w-96 h-96 rounded-full opacity-50 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, rgba(184, 210, 59, 0.15) 0%, transparent 70%)' }}>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-block bg-lime/20 text-lime px-6 py-2 rounded-full font-semibold mb-6 animate-slide-up">
          ✨ Proven Results For Kenyan Businesses
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight animate-slide-up">
          Get More Customers & Sales <span className="hero-highlight text-lime">Without Hiring More Staff</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto animate-slide-up"
          style={{ animationDelay: '0.2s' }}>
          WhatsApp Flows automate your entire customer journey—from first contact to payment. Works 24/7. Converts 3x better than email. Trusted by 50+ Kenya businesses.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12 mt-8">
          <div className="text-white">
            <div className="text-3xl font-black text-lime">3x</div>
            <p className="text-sm text-white/80">Higher conversion</p>
          </div>
          <div className="text-white">
            <div className="text-3xl font-black text-lime">60%</div>
            <p className="text-sm text-white/80">Cost reduction</p>
          </div>
          <div className="text-white">
            <div className="text-3xl font-black text-lime">24/7</div>
            <p className="text-sm text-white/80">Auto responses</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center flex-wrap animate-slide-up"
          style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-lime text-charcoal font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg">
            🚀 Start Your Free Consultation
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 text-white border-2 border-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 text-lg">
            See Case Studies
          </a>
        </div>
      </div>
    </section>
  )
}
