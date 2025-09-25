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

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
  <h2 className="text-center text-3xl font-bold text-white mb-12">
    Our Global Partners
  </h2>

  <div className="relative overflow-hidden">
    {/* Scrolling track */}
    <div className="flex animate-scroll gap-10">
      {[...testimonials, ...testimonials].map((t, idx) => (
        <div
          key={idx}
          className="min-w-[200px] bg-slate-800 p-6 rounded-2xl text-center shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-orange-500"
        >
          <img
            src={t.image}
            alt={t.name}
            className="w-24 h-24 mx-auto mb-4 object-contain rounded-full"
          />
          <h3 className="text-white font-semibold">{t.name}</h3>
          <p className="text-orange-400 text-sm">{t.role}</p>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    .animate-scroll {
      display: flex;
      gap: 2.5rem;
      width: max-content;
      animation: scroll 30s linear infinite;
    }
    @keyframes scroll {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>
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
