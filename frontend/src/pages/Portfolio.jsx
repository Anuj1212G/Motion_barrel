import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Play } from 'lucide-react';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    'All',
    'Corporate & Brand Videos',
    'Training & Safety Animations',
    'Product Demos & Explainers',
    '3D Motion Graphics',
    'Website Design & Digital Campaigns'
  ];

  // Mock portfolio data
  const mockPortfolio = [
    {
      _id: '1',
      title: 'ExxonMobil Corporate Excellence',
      description: "A comprehensive corporate video showcasing ExxonMobil's commitment to innovation and sustainability in the energy sector.",
      category: 'Corporate & Brand Videos',
      thumbnailUrl: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      client: 'ExxonMobil',
      industry: 'Oil & Gas',
      tags: ['Corporate', 'Sustainability', 'Innovation']
    },
    {
      _id: '2',
      title: 'Shell Refinery Process Animation',
      description: "Technical 3D animation explaining the complex refinery processes and safety protocols for Shell's operations.",
      category: 'Training & Safety Animations',
      thumbnailUrl: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      client: 'Shell Energy',
      industry: 'Oil & Gas',
      tags: ['Animation', '3D', 'Technical', 'Process']
    },
    {
      _id: '3',
      title: 'Chevron Annual Conference 2024',
      description: "Complete event coverage of Chevron's annual industry conference, featuring keynote speakers and networking sessions.",
      category: 'Product Demos & Explainers',
      thumbnailUrl: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      client: 'Chevron',
      industry: 'Oil & Gas',
      tags: ['Event', 'Conference', 'Documentation']
    },
    {
      _id: '4',
      title: 'BP Safety Training Series',
      description: 'Comprehensive safety training video series covering offshore drilling safety protocols and emergency procedures.',
      category: 'Website Design & Digital Campaigns',
      thumbnailUrl: 'https://images.pexels.com/photos/3862127/pexels-photo-3862127.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      client: 'BP',
      industry: 'Oil & Gas',
      tags: ['Safety', 'Training', 'Offshore', 'Protocols']
    },
    {
      _id: '5',
      title: 'ConocoPhillips New Employee Onboarding',
      description: 'Engaging training videos designed to onboard new employees with company culture and operational procedures.',
      category: '3D Motion Graphics',
      thumbnailUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      client: 'ConocoPhillips',
      industry: 'Oil & Gas',
      tags: ['Training', 'Onboarding', 'Culture']
    },
    {
      _id: '6',
      title: 'Total Energies Brand Campaign',
      description: "Multi-platform brand campaign highlighting Total Energies' transition to renewable energy sources.",
      category: 'Corporate & Brand Videos',
      thumbnailUrl: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: '#',
      client: 'Total Energies',
      industry: 'Renewable Energy',
      tags: ['Brand', 'Campaign', 'Renewable', 'Transition']
    }
  ];

  useEffect(() => {
    setPortfolioItems(mockPortfolio);
    setFilteredItems(mockPortfolio);
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  };

  const handlePortfolioClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - MotionBarrel</title>
        <meta
          name="description"
          content="Explore MotionBarrel's portfolio of Oil & Gas video productions, animations, and corporate storytelling projects for industry leaders."
        />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-5xl sm:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover how we've helped industry leaders tell their stories through 
              compelling visual narratives and cutting-edge production techniques.
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PortfolioCard
                    {...item}
                    onClick={() => handlePortfolioClick(item)}
                  />
                </motion.div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Video Modal */}
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-slate-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedItem.title}</h2>
                  <p className="text-orange-500 font-medium">{selectedItem.client}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Video Player Placeholder */}
              <div className="aspect-video bg-slate-700 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-400">Video Player</p>
                  <p className="text-sm text-gray-500">Click to play video</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Project Details</h3>
                  <p className="text-gray-300 mb-4">{selectedItem.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-gray-400">
                      <span className="text-white font-medium">Client:</span> {selectedItem.client}
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white font-medium">Industry:</span> {selectedItem.industry}
                    </p>
                    <p className="text-gray-400">
                      <span className="text-white font-medium">Category:</span> {selectedItem.category}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                    Start Similar Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
