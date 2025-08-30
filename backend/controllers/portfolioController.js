import Portfolio from '../models/Portfolio.js';

export const getAllPortfolio = async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    if (featured === 'true') {
      query.featured = true;
    }

    const portfolio = await Portfolio.find(query).sort({ createdAt: -1 });
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio items' });
  }
};

export const getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio item' });
  }
};

export const createPortfolio = async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(400).json({ message: 'Error creating portfolio item' });
  }
};

export const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(400).json({ message: 'Error updating portfolio item' });
  }
};

export const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }
    res.json({ message: 'Portfolio item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting portfolio item' });
  }
};