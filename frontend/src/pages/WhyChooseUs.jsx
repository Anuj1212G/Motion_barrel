import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Clock, Users, Award, Globe, Shield, Zap, Target, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Clock,
      title: 'Speed & Efficiency',
      description: 'Fast turnaround times without compromising quality. Our streamlined process ensures your projects are delivered on schedule.',
      details: ['24-48 hour response time', 'Streamlined approval process', 'Efficient project management', 'Quick revisions and updates']
    },
    {
      icon: Users,
      title: 'Industry Expertise',
      description: 'Deep understanding of Oil & Gas sector complexities, regulations, and technical requirements.',
      details: ['15+ years in energy sector', 'Technical accuracy guaranteed', 'Industry compliance knowledge', 'Specialized equipment handling']
    },
    {
      icon: Award,
      title: 'Award-Winning Quality',
      description: 'Recognized excellence in video production with multiple industry awards and client testimonials.',
      details: ['Multiple industry awards', '98% client satisfaction rate', 'Premium production standards', 'Continuous quality improvement']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Experience working across different markets, cultures, and regulatory environments worldwide.',
      details: ['25+ countries served', 'Multi-language capabilities', 'Cultural sensitivity training', 'International compliance knowledge']
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Comprehensive safety protocols and regulatory compliance for high-risk environments.',
      details: ['OSHA certified crew', 'Hazard identification training', 'Insurance and bonding', 'Emergency response protocols']
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Latest equipment and techniques including 4K/8K video, drone footage, and advanced animation.',
      details: ['4K/8K video production', 'Professional drone operations', 'Advanced 3D animation', 'VR/AR capabilities']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'VP of Communications',
      company: 'ExxonMobil',
      text: 'MotionBarrel delivered exceptional corporate videos that perfectly captured our company culture and values. Their attention to detail and industry knowledge is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Safety Director',
      company: 'Shell Energy',
      text: 'The safety training videos created by MotionBarrel have significantly improved our safety compliance rates. Their technical accuracy and engaging presentation style is outstanding.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      position: 'Marketing Manager',
      company: 'Chevron',
      text: 'Working with MotionBarrel was a game-changer for our event coverage. They captured every important moment and delivered professional results that exceeded our expectations.',
      rating: 5
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your goals, audience, and message requirements through detailed consultation.',
      timeline: '1-2 days'
    },
    {
      step: '02',
      title: 'Strategy & Creative',
      description: 'Our team develops a comprehensive strategy and creative approach tailored to your specific needs.',
      timeline: '3-5 days'
    },
    {
      step: '03',
      title: 'Production & Filming',
      description: 'Professional filming and production using cutting-edge equipment and industry-leading techniques.',
      timeline: '1-3 weeks'
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Expert editing, animation, and post-production to create compelling final deliverables.',
      timeline: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Delivery & Support',
      description: 'Final delivery with ongoing support and optimization recommendations for maximum impact.',
      timeline: '1-2 days'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose MotionBarrel - Oil & Gas Video Production Excellence</title>
        <meta name="description" content="Discover why industry leaders choose MotionBarrel for Oil & Gas video production. Speed, expertise, quality, and global reach with proven results." />
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
              Why Choose 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {' '}MotionBarrel
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover what sets us apart as the premier choice for Oil & Gas 
              storytelling and video production services.
            </motion.p>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Competitive Advantages</h2>
              <p className="text-gray-300 text-xl">What makes us the industry's preferred partner</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {advantage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ... (Process, Testimonials, Comparison Table, CTA remain unchanged) */}
      </div>
    </>
  );
};

export default WhyChooseUs;
