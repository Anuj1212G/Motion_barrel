import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';

const testimonials = [
 
  // Partners
  {
    name: "Persian Gulf University",
    role: "International Academic Partner",
    feedback: "Our collaboration with MotionBarrel enriches learning with global perspectives on petroleum and sustainable energy challenges.",
    image: "/image/persian.png"
  },
  {
    name: "Lincoln Professional University",
    role: "Global Education Partner",
    feedback: "Through this partnership, learners access accredited programs that bridge academics with industry practices.",
    image: "/image/lincoln.png"
  },
  {
    name: "PWCI Training Institute",
    role: "Well Control Training Partner",
    feedback: "Together, we ensure professionals gain world-class competence in safety and drilling operations.",
    image: "/image/pwci.png"
  },
  {
    name: "IIT ISM Dhanbad",
    role: "Premier Academic Partner",
    feedback: "With world-class faculty and labs, our collaboration ensures strong technical expertise in petroleum and mining domains.",
    image: "/image/iit-ism.png"
  },
  {
    name: "Manan Oil & Gas",
    role: "Upstream Industry Partner",
    feedback: "Our partnership integrates real-world project experience into MotionBarrel’s training modules.",
    image: "/image/manan.png"
  },
  {
    name: "Techwysh Services & Sols",
    role: "Digital Transformation Partner",
    feedback: "We provide IoT-enabled monitoring and automation solutions, aligning industry with cutting-edge IT.",
    image: "/image/techwysh.png"
  },
  {
    name: "KIRI Oil Field Services",
    role: "Field Operations Partner",
    feedback: "We bring drilling, production, and safety expertise to MotionBarrel’s programs, ensuring operational excellence.",
    image: "/image/kiri.png"
  },
  {
    name: "CYET Global Investments",
    role: "Finance & Investment Partner",
    feedback: "Our insights connect capital markets with technically sound ventures in the energy sector.",
    image: "/image/cyet.png"
  },
  {
    name: "GEMS Global",
    role: "EPC Project Partner",
    feedback: "We provide expertise in project execution for oil & gas and energy, ensuring safety and efficiency.",
    image: "/image/gems.png"
  },
  {
    name: "Greenfield Oil & Trading",
    role: "Upstream Oilfield Partner",
    feedback: "With strong technical expertise, we deliver safe and efficient upstream operations.",
    image: "/image/greenfield.png"
  },
  {
    name: "Data Vedik",
    role: "Data Science Partner",
    feedback: "We empower MotionBarrel’s learners with predictive modeling, machine learning, and analytics.",
    image: "/image/datavedik.png"
  },
  {
    name: "GeoIn Services",
    role: "Geoscience Partner",
    feedback: "We bring advanced geoscience and engineering solutions for exploration and development.",
    image: "/image/geoin.png"
  },
  {
    name: "Rezlytix",
    role: "Reservoir Analytics Partner",
    feedback: "Our digital platforms enhance recovery and reduce operational risks in reservoir management.",
    image: "/image/rezlytix.png"
  },
  {
    name: "OPX AI",
    role: "AI Technology Partner",
    feedback: "By leveraging predictive analytics and machine learning, we help optimize production and safety.",
    image: "/image/opxai.png"
  }
];

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials - MotionBarrel</title>
        <meta
          name="description"
          content="Hear from our advisors and partners about MotionBarrel’s impact in oil & gas, technology, and education."
        />
      </Helmet>

      <div className="pt-16">

        {/* Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Voices of Trust
          </motion.h1>
          <motion.p
            className="text-lg text-orange-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights from our global advisors and collaborative partners.
          </motion.p>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-orange-500 object-cover"
                />
                <h3 className="text-xl font-bold text-white">{t.name}</h3>
                <p className="text-orange-400 mb-4">{t.role}</p>
                <p className="text-gray-300 italic mb-4">“{t.feedback}”</p>
                <div className="flex justify-center space-x-1 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Want to Collaborate With Us?
          </motion.h2>
          <motion.a
            href="/contact"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us →
          </motion.a>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
