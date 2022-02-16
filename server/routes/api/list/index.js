const data = require('./data.json');

const handler = (_, res) => {
  setTimeout(() => res.status(200).json({ data, total: data.length }), 500);
};

module.exports = handler;
