import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PortfolioCard from '../components/PortfolioCard';

const Home = () => {
  const navigate = useNavigate();
  const [portfolioItems, setPortfolioItems] = useState([]);

  // Mock data for portfolio
  const mockPortfolio = [
    {
      _id: '1',
      title: 'Corporate & Brand Videos',
      description:
        'Professional corporate videos that showcase your brand with impact and drive engagement.',
      category: 'Corporate & Brand Videos',
      thumbnailUrl:
        'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      client: 'ExxonMobil',
    },
    {
      _id: '2',
      title: 'Animation & Infographics',
      description:
        'Dynamic animations and infographics that simplify complex Oil & Gas processes.',
      category: 'Animation & Infographics',
      thumbnailUrl:
        'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      client: 'Shell Energy',
    },
    {
      _id: '3',
      title: 'Event & Gas Videos',
      description:
        'Comprehensive event coverage and gas operation documentation for industry leaders.',
      category: 'Event & Gas Videos',
      thumbnailUrl:
        'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      client: 'Chevron',
    },
  ];

  useEffect(() => {
    setPortfolioItems(mockPortfolio);
  }, []);

  const handlePortfolioClick = (item) => {
    console.log('Opening portfolio item:', item.title);
  };

  return (
    <>
      <Helmet>
        <title>MotionBarrel - Oil & Gas Storytelling Creative Agency</title>
        <meta
          name="description"
          content="Where Technology Meets Creativity in Oil & Gas Storytelling. Videos, Animations, and Digital Experiences designed to showcase your brand with impact."
        />
        <meta
          name="keywords"
          content="oil gas video production, corporate videos, animation, infographics, energy sector marketing"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="src\img\hi.mp4" // Make sure hi.mp4 is in public/img/
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Where Technology
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Meets Creativity
              </span>
              <br />
              in Oil & Gas Storytelling.
            </h1>
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Videos, Animations, and Digital Experiences
            <br />
            designed to showcase your brand with impact.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => navigate('/portfolio')}
              className="border-2 border-gray-300 hover:border-orange-500 text-gray-200 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              <span>View Our Work</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* OUR WORK SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of compelling stories that drive results for
              industry leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PortfolioCard
                  {...item}
                  onClick={() => handlePortfolioClick(item)}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Work Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => navigate('/portfolio')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Work</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '250+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Industry Partners' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
