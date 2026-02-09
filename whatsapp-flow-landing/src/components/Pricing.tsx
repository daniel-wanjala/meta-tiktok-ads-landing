'use client'

const pricingPlans = [
  {
    name: 'Starter',
    price: '45K',
    featured: false,
    description: 'Perfect for small businesses just starting with automation',
    features: [
      'One simple automation (e.g., booking OR customer support)',
      'M-Pesa payment setup',
      '2 weeks of support',
      'Basic analytics',
      'WhatsApp Business setup'
    ]
  },
  {
    name: 'Professional',
    price: '95K',
    featured: true,
    description: 'Most popular. Everything you need to automate and scale',
    features: [
      'Complete automation system (booking + support + sales)',
      'Multi-flow support',
      'Advanced M-Pesa & payment integration',
      'Lead generation & nurturing flows',
      'Performance dashboard with ROI tracking',
      '1 month of optimization & support',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    price: '180K+',
    featured: false,
    description: 'For ambitious businesses. Scale to thousands of customers',
    features: [
      'Unlimited custom flows & automations',
      'API integrations (CRM, inventory, ERP)',
      'Advanced AI chatbot',
      'Multi-location/multi-user support',
      'Custom reporting & analytics',
      'Dedicated account manager',
      '3+ months of optimization',
      '24/7 priority support'
    ]
  }
]

export default function Pricing() {
  return (
    <section className="section relative bg-sand px-5 py-20 md:py-32" data-section="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-forest mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-sage mb-8">
            One-time setup cost. No monthly fees. Unlimited scale.
          </p>
          <p className="text-lg text-forest font-semibold">
            Most clients see ROI within 2 weeks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center ${plan.featured ? 'md:scale-105' : ''
                }`}
            >
              <h3 className="text-2xl font-bold text-forest mb-2">
                {plan.name}
              </h3>
              <p className="text-sage text-sm mb-6">
                {plan.description}
              </p>
              <div className="text-5xl font-black text-charcoal mb-2">
                <span className="text-3xl">KSh </span>{plan.price}
              </div>
              <p className="text-sage mb-8">One-time setup</p>

              <ul className="space-y-3 mb-10 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-charcoal">
                    <span className="text-green-whatsapp font-bold text-xl flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="inline-block px-8 py-3 bg-lime text-charcoal font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 w-full">
                {plan.featured ? 'Get Free Consultation' : 'Start Today'}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-10 rounded-3xl shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-forest mb-6 text-center">
            Questions About Pricing?
          </h3>
          <div className="space-y-4 text-sage">
            <p><strong className="text-forest">Do you offer payment plans?</strong> Yes. Qualified businesses can split payments over 3 months with zero interest.</p>
            <p><strong className="text-forest">How long does implementation take?</strong> Setup typically takes 5-10 business days depending on your flows complexity. You'll have a working system generating results within 2 weeks.</p>
            <p><strong className="text-forest">Will the system work for my specific business?</strong> Works for e-commerce, hotels, fitness, courses, services, clinics, and more. Let's talk in your free consultation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
