import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const PortfolioCard = ({
  title,
  description,
  category,
  thumbnailUrl,
  client,
  onClick
}) => {
  return (
    <motion.div
      className="relative group cursor-pointer rounded-xl overflow-hidden bg-slate-800 hover:bg-slate-700 transition-all duration-300"
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </motion.div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-orange-500 font-medium text-sm">
            {client}
          </span>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
