'use client'

const services = [
  {
    icon: '💰',
    title: 'Sales Automation Flows',
    description: 'Turn WhatsApp into your 24/7 sales machine. Automated product recommendations, instant checkout, and follow-ups that convert.'
  },
  {
    icon: '📞',
    title: 'Lead Generation & Nurturing',
    description: 'Capture leads from Instagram, TikTok, and Google Ads. Auto-qualify them and nurture with personalized messages.'
  },
  {
    icon: '📅',
    title: 'Booking & Appointment System',
    description: 'Customers book directly via WhatsApp. Auto-confirmations, reminders, and rescheduling—no manual work needed.'
  },
  {
    icon: '💳',
    title: 'Payment Collection (M-Pesa)',
    description: 'Accept payments without leaving WhatsApp. M-Pesa, card payments, and instant confirmations. Secure & compliant.'
  },
  {
    icon: '🤖',
    title: 'Customer Support Automation',
    description: 'Reduce support costs by 60%. Auto-answer FAQs, process returns, handle complaints—24/7 without your team.'
  },
  {
    icon: '📊',
    title: 'Performance Tracking & Optimization',
    description: 'See exactly what\'s working. Track conversions, customer satisfaction, ROI. We optimize continuously for better results.'
  },
]

export default function Services() {
  return (
    <section className="section relative bg-sand px-5 py-20 md:py-32" data-section="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-forest mb-4">
            What You Can Automate (& Make Money From)
          </h2>
          <p className="text-xl text-sage max-w-2xl mx-auto">
            Every service is designed to save you time AND increase your revenue
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-forest mb-3">
                {service.title}
              </h3>
              <p className="text-sage leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
