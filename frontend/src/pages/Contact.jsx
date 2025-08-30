import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['1234 Energy Corridor', 'Houston, TX 77001', 'United States']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Fri 9AM-6PM CST']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@motionbarrel.com', 'projects@motionbarrel.com', 'support@motionbarrel.com']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - MotionBarrel</title>
        <meta name="description" content="Get in touch with MotionBarrel for your Oil & Gas video production needs. Professional storytelling services with proven results." />
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
              Let's Create Together
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to bring your vision to life? Get in touch and let's discuss 
              how we can help tell your story with impact.
            </motion.p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                  <p className="text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800 rounded-xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-4">Find Us</h3>
                  <div className="bg-slate-700 rounded-lg h-80 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                      <p className="text-gray-400">Interactive map would be embedded here</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Houston Energy Corridor<br />
                        Houston, TX 77001
                      </p>
                    </div>
                  </div>
                  
                  {/* Quick Contact */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Quick Contact</h4>
                    <a 
                      href="tel:+15551234567"
                      className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>+1 (555) 123-4567</span>
                    </a>
                    <a 
                      href="mailto:info@motionbarrel.com"
                      className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>info@motionbarrel.com</span>
                    </a>
                    <a 
                      href="https://wa.me/15551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "What is your typical project timeline?",
                  answer: "Project timelines vary based on scope and complexity. Simple videos can be completed in 2-3 weeks, while comprehensive campaigns may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you work with clients outside of Houston?",
                  answer: "Absolutely! While we're based in Houston, we work with clients globally. We have experience with remote production and can travel to your location when needed."
                },
                {
                  question: "What industries do you serve besides Oil & Gas?",
                  answer: "While Oil & Gas is our specialty, we also serve renewable energy, manufacturing, construction, and other industrial sectors that require technical storytelling expertise."
                },
                {
                  question: "Can you help with ongoing video marketing campaigns?",
                  answer: "Yes! We offer comprehensive video marketing services including strategy, production, and performance optimization to help you achieve your marketing goals."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-700 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;