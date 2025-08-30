import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features,
  onClick
}) => {
  return (
    <motion.div
      className="bg-slate-800 rounded-xl p-6 cursor-pointer group hover:bg-slate-700 transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Hover Effect */}
      <motion.div
        className="mt-4 pt-4 border-t border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="text-orange-500 text-sm font-medium">Learn More →</span>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
