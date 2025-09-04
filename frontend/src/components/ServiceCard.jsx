import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features,
  image,
  onClick
}) => {
  return (
    <motion.div
      className="relative rounded-xl p-6 cursor-pointer group overflow-hidden"
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-slate-900/70 group-hover:bg-slate-900/60 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-200 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-sm text-gray-200"
            >
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Hover Effect */}
        <motion.div
          className="mt-4 pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <span className="text-orange-400 text-sm font-medium">
            Learn More →
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
