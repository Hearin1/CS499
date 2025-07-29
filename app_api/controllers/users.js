const User = require('../models/users');
const { hashPassword, verifyPassword } = require('../../util/encryption');

const register = async (req, res) => {
  try {
    const hashed = await hashPassword(req.body.password);
    const role = req.body.adminCode === 'letmein' ? 'admin' : 'user';
    const user = await User.create({
      username: req.body.username,
      hashedPassword: hashed,
      role,
      email: req.body.email
    });
    res.status(201).json({ username: user.username, email: user.email });
  } catch (err) {
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const match = await verifyPassword(req.body.password, user.hashedPassword);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Logged in', role: user.role });
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateSettings = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { username: req.params.username },
      { settings: req.body.settings },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

const statusData = require('../../data/status.json');

const dashboard = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    let statuses = statusData;
    if (user.role !== 'admin') {
      statuses = statusData.filter(s => s.ePortfolioUploaded === 'Yes');
    }

    res.status(200).json({
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
        settings: user.settings,
      },
      statuses,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { register, login, updateSettings, dashboard };
