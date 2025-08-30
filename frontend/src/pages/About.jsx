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
              Your Creative Partner in the Oil & Gas World
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At MotionBarrel, we blend industry insight with creative brilliance to simplify complex ideas. 
              From high-impact corporate films to immersive 3D animations, we help Oil & Gas companies 
              communicate with clarity, creativity, and confidence.
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
              Our Story
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              For over 15 years, we've been at the forefront of Oil & Gas storytelling, 
              transforming complex industry narratives into compelling visual experiences.
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
                  Bridging Technology & Creativity
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  At MotionBarrel, we understand that the Oil & Gas industry demands both technical 
                  precision and creative storytelling. Our team combines deep industry knowledge 
                  with innovative production techniques to create content that not only informs 
                  but inspires.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  From drilling platforms to renewable energy initiatives, we've documented the 
                  evolution of energy and helped industry leaders communicate their vision to 
                  stakeholders, employees, and the world.
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

        {/* Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-gray-300 text-xl">Milestones that shaped our company</p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-orange-500"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                    }`}
                  >
                    <div className="bg-slate-700 rounded-lg p-6">
                      <div className="text-orange-500 font-bold text-2xl mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-white font-semibold text-xl mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-300 text-xl">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
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
