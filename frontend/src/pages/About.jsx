import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // ✅ add this at the top


const About = () => {
  const navigate = useNavigate();
  const timeline = [
    { year: '2009', title: 'Founded', description: 'Started as a small video production company in Houston' },
    { year: '2012', title: 'Oil & Gas Focus', description: 'Specialized in energy sector storytelling' },
    { year: '2016', title: 'Digital Innovation', description: 'Expanded into animations and digital experiences' },
    { year: '2020', title: 'Industry Leader', description: 'Recognized as top Oil & Gas creative agency' },
    { year: '2024', title: 'Global Reach', description: 'Serving clients across 25+ countries' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every project is crafted with meticulous attention to detail and technical accuracy.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to create compelling visual narratives.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships through collaborative excellence and transparency.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering award-winning content that exceeds industry standards.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - MotionBarrel</title>
        <meta name="description" content="Learn about MotionBarrel's journey in Oil & Gas storytelling. 15+ years of experience creating compelling visual narratives for industry leaders." />
      </Helmet>

      <div className="pt-16">

        {/* Intro Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            Our Vision 
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our vision is to be a trustworthy global hub for excellent web development and digital solutions where creativity and technology collaborate for growth and innovation. We are seeking to build a future where every idea-how bold the thought may be-might stand into a smooth-scalable and sustainable digital product.
            </motion.p>
            <motion.a
              href="/about"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More →
            </motion.a>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-5xl sm:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              The Story Behind MotionBarrel
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              MotionBarrel started as a passion project - a vision to merge creativity and
              technology into solutions that truly make a difference.
              From my early days of coding experiments to mastering the art, this journey has
              been fueled by curiosity, problem-solving, and the desire to create meaningful
              digital experiences.
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  At MotionBarrel, we intend to develop ideas into potent digital experiences
                  through innovative, scalable, and user-centric solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We are on the road to empowering individuals, startups, and companies through
                  creativity and the most recent technology,with which we meet the concrete challenges
                  of real life with precision, passion, and purpose.
                </p>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Oil & Gas Operations"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advisors Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
  <div className="max-w-7xl mx-auto">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-4">Our Advisors</h2>
      <p className="text-gray-300 text-xl">Guided by experts with decades of experience</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "Yogashri Pradhan",
          role: "Petroleum Engineer & Advisor",
          bio: "Over a decade of experience across production, reservoir, and completions engineering. She has led projects with Chevron, Devon, and Statoil, delivering measurable gains in asset value.",
          image: "/image/yogashri.png"
        },
        {
          name: "Sivakumar Babu",
          role: "Senior Petroleum Professional",
          bio: "32+ years of experience with ONGC, BAPCO, and PETRONAS. Expert in artificial lift systems, sand control, stimulation, and production optimization.",
          image: "/image/sivakumar.png"
        },
        {
          name: "Dr. Rajesh Kumar Mittal",
          role: "Oil & Gas Consultant",
          bio: "40+ years of expertise in reservoir engineering, enhanced oil recovery, and field development. Former senior leader at ONGC, Oil India, and DGH.",
          image: "/image/rajesh.png"
        }
      ].map((advisor, index) => (
        <motion.div
          key={index}
          className="bg-slate-700 p-8 rounded-2xl shadow-xl text-center flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-500 object-cover"
          />
          <h3 className="text-xl font-bold text-white">{advisor.name}</h3>
          <p className="text-orange-400 mb-3">{advisor.role}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{advisor.bio}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Tell Your Story?
            </motion.h2>
            <motion.p
              className="text-xl text-orange-100 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's create compelling visual narratives that drive results for your business.
            </motion.p>
            <motion.button
              onClick={() => navigate('/contact')} // ✅ updated to use navigate
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
