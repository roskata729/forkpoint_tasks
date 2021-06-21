const _ = require('underscore');
const mdbClient = require('mongodb').MongoClient;

module.exports = function routeHello(req, res) {
  mdbClient.connect('mongodb://localhost:27017', (err, client) => {
    
    const db = client.db('Shop');
    const collection = db.collection('Categories');

    collection.find().toArray((collErr, items) => {
      res.render('index', {
        // Underscore.js lib
        _,

        // Template data
        title: 'Main Category Name',
        items,
      });
      client.close();
    });
  });
};
