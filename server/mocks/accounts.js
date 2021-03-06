module.exports = function(app) {
  var express        = require('express');
  var accountsRouter = express.Router();

  accountsRouter.get('/1', function(req, res) {
    if (/Bearer .+/.test(req.headers.authorization)) {
      const response = {
        data: {
          type: 'accounts',
          id: '1',
          attributes: {
            login: 'letme',
            name: 'Some person'
          }
        }
      };
      res.status(200).send(response);
      res.status(200).send('{ "account": { "id": 1, "login": "letme", "name": "Some Person"} }');
    } else {
      res.status(401).end();
    }
  });

  app.use('/accounts', accountsRouter);
};
