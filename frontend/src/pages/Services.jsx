import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Video, Palette, Calendar, GraduationCap, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { useNavigate } from 'react-router-dom';
const Services = () => {
  const navigate = useNavigate(); 
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  // Icon mapping
  const iconMap = {
    video: Video,
    palette: Palette,
    calendar: Calendar,
    'graduation-cap': GraduationCap,
    shield: Shield,
  };

  // Mock services data
const mockServices = [
  {
    _id: '1',
    title: 'Corporate & Brand Videos',
    description:
      'Impactful video productions that build trust, highlight your company’s strengths, and communicate your brand story with clarity.',
    icon: 'video',
    features: [
      'Executive interviews & testimonials',
      'Company profile storytelling',
      'Customer success stories',
      'Brand awareness campaigns',
    ],
    pricing: 'Starting from $5,000',
  },
  {
    _id: '2',
    title: 'Training & Safety Animations',
    description:
      'Engaging 2D/3D animations designed to train teams effectively and reinforce critical safety practices across operations.',
    icon: 'graduation-cap',
    features: [
      'Process safety training modules',
      'Compliance & regulation visuals',
      'Interactive learning content',
      'Incident prevention guides',
    ],
    pricing: 'Starting from $3,000',
  },
  {
    _id: '3',
    title: 'Product Demos & Explainers',
    description:
      'Simplify technical concepts and showcase your products with visuals that are easy to understand and resonate with your audience.',
    icon: 'palette',
    features: [
      'Step-by-step product explainers',
      'Technical process breakdowns',
      'Customer education videos',
      'Product launch campaigns',
    ],
    pricing: 'Starting from $2,500',
  },
  {
    _id: '4',
    title: '3D Motion Graphics',
    description:
      'High-precision motion graphics and visualizations that bring complex Oil & Gas systems to life with clarity and depth.',
    icon: 'calendar',
    features: [
      '3D asset design & modeling',
      'Pipeline & plant visualization',
      'Engineering process animation',
      'Immersive technical storytelling',
    ],
    pricing: 'Starting from $4,000',
  },
  {
    _id: '5',
    title: 'Website Design & Digital Campaigns',
    description:
      'Stunning websites and digital campaigns that amplify your brand presence and connect you with the right audience.',
    icon: 'shield',
    features: [
      'Custom website design',
      'Digital marketing campaigns',
      'SEO & performance optimization',
      'Cross-platform brand integration',
    ],
    pricing: 'Starting from $3,500',
  },
];

  useEffect(() => {
    setServices(mockServices);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Helmet>
        <title>Services - MotionBarrel</title>
        <meta
          name="description"
          content="Professional Oil & Gas video production services. Corporate videos, animations, training content, and safety videos for industry leaders."
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
              Our Expertise
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive video production and storytelling solutions tailored
              specifically for the Oil & Gas industry.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={iconMap[service.icon]}
                    features={service.features.slice(0, 3)}
                    onClick={() => handleServiceClick(service)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-gray-300 text-xl">
                How we bring your vision to life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description:
                    'We understand your goals, audience, and message requirements.',
                },
                {
                  step: '02',
                  title: 'Planning',
                  description:
                    'Strategic planning and creative development aligned with your objectives.',
                },
                {
                  step: '03',
                  title: 'Production',
                  description:
                    'Professional filming and animation using cutting-edge equipment.',
                },
                {
                  step: '04',
                  title: 'Delivery',
                  description:
                    'Final delivery with ongoing support and optimization recommendations.',
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-300">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-slate-800 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">
                  {selectedService.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  What's Included:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedService.pricing && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Investment:
                  </h3>
                  <p className="text-orange-500 text-lg font-medium">
                    {selectedService.pricing}
                  </p>
                </div>
              )}

              <button
                onClick={() => navigate('/contact')}
               className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                Get Quote for This Service
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Services;
