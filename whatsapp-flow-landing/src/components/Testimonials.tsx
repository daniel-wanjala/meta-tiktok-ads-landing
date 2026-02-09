'use client'

const testimonials = [
  {
    text: 'Within 3 weeks of launching the WhatsApp flow, our booking rate jumped 200%. Customers love booking at midnight without anyone being awake to help. Our staff is now spending time on quality, not answering "do you have availability?" every 2 minutes.',
    author: 'James Mwangi',
    role: 'Owner, Nairobi Guest House',
    initials: 'JM',
    metric: '+200% Bookings'
  },
  {
    text: 'We were spending KES 500K per month on customer support. The WhatsApp automation handles 80% of questions automatically. We cut our support team from 4 people to 1. The system even handles returns without human intervention. Best business investment I made.',
    author: 'Sarah Kamau',
    role: 'Operations, Kilimani Fashion Store',
    initials: 'SK',
    metric: '-60% Costs'
  },
  {
    text: 'We went from 50 students to 750 in 6 months. The WhatsApp lead flow captures students from ads, sends them lessons automatically, handles billing. We literally run the company from our phones now. Zero overhead per additional student.',
    author: 'David Omondi',
    role: 'Founder, Nairobi Academy',
    initials: 'DO',
    metric: '750 Students'
  },
]

export default function Testimonials() {
  return (
    <section className="section relative bg-white px-5 py-20 md:py-32" data-section="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-forest mb-4">
            See What Happened When They Automated
          </h2>
          <p className="text-xl text-sage">
            Real business owners. Real revenue impact. Real automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card relative bg-sand p-10 rounded-3xl border-l-4 border-lime"
            >
              <div className="absolute top-0 right-6 bg-lime text-charcoal px-4 py-2 rounded-b-lg font-bold text-sm">
                {testimonial.metric}
              </div>
              <p className="text-lg leading-relaxed text-charcoal mb-8 pt-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-lime to-green-whatsapp flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-forest text-lg">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-sage">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
