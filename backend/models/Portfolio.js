import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Corporate & Brand Videos', 'Animation & Infographics', 'Event & Gas Videos', 'Training Videos', 'Safety Videos']
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    default: 'Oil & Gas'
  },
  featured: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String
  }]
}, {
  timestamps: true
});

export default mongoose.model('Portfolio', portfolioSchema);