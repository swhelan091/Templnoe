const betsController = require('../controllers').bets;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Templenoe API!',
  }));

  app.get('/api/bets', betsController.list);
  app.post('/api/bets', betsController.create);
};