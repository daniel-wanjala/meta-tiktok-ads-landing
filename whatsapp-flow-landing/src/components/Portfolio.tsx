'use client'

const portfolioItems = [
  {
    icon: '🏨',
    title: 'Hotel Booking - 200% Revenue Increase',
    description: 'Automated WhatsApp booking system. Customers book rooms at 2am, get instant confirmations, automatic payment via M-Pesa. Zero manual work.',
    metrics: ['200% more bookings', 'M-Pesa payments', 'Instant confirmations'],
    tags: ['M-Pesa', 'Booking Flow', 'CRM Integration']
  },
  {
    icon: '🛍️',
    title: 'Fashion Store - 40% Lower Support Costs',
    description: 'E-commerce WhatsApp flow handles product questions, size recommendations, returns, and complaints automatically. 24/7 customer support without hiring.',
    metrics: ['40% cost reduction', '98% satisfaction', '24/7 support'],
    tags: ['E-commerce', 'Inventory Sync', 'Automation']
  },
  {
    icon: '📚',
    title: 'Academy - 15 Students→750 Students in 6 Months',
    description: 'Lead generation flow captures students from ads, auto-nurtures them, handles enrollment, and sends daily lesson reminders. Enrollment automation that scales.',
    metrics: ['750 students', 'Auto-enrollment', 'Lead nurture'],
    tags: ['Education', 'Lead Gen', 'Nurturing']
  },
]

export default function Portfolio() {
  return (
    <section className="section relative bg-sand px-5 py-20 md:py-32" data-section="portfolio" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-forest mb-4">
            Real Results From Real Clients
          </h2>
          <p className="text-xl text-sage">
            These businesses are making more money and working less (thanks to WhatsApp automation)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-full h-48 bg-gradient-to-br from-sage to-forest flex items-center justify-center text-6xl">
                {item.icon}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-forest mb-3">
                  {item.title}
                </h3>
                <p className="text-sage leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="space-y-2 mb-6">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-forest font-semibold">
                      <span className="text-lime">✓</span> {metric}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-lime/20 text-forest text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
