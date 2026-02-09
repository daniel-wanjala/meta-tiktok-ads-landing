'use client'

const benefits = [
  {
    number: '98%',
    title: 'Open Rate',
    description: 'WhatsApp messages have a 98% open rate compared to 20% for email'
  },
  {
    number: '60%',
    title: 'Cost Reduction',
    description: 'Automate customer service and reduce support costs by up to 60%'
  },
  {
    number: '24/7',
    title: 'Availability',
    description: 'Serve customers round the clock with automated flows and instant responses'
  },
  {
    number: '3x',
    title: 'Conversion Boost',
    description: 'Businesses see 3x higher conversions with WhatsApp compared to traditional channels'
  },
]

export default function Benefits() {
  return (
    <section className="section relative bg-white px-5 py-20 md:py-32" data-section="benefits">
      <div className="drag-handle"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-forest mb-4">
            Why WhatsApp Flows for Your Business?
          </h2>
          <p className="text-xl text-sage">
            The numbers speak for themselves
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-black text-lime mb-4">
                {benefit.number}
              </div>
              <h3 className="text-2xl font-bold text-forest mb-3">
                {benefit.title}
              </h3>
              <p className="text-sage leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
