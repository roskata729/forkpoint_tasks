const _ = require('underscore');
const mdbClient = require('mongodb').MongoClient;

module.exports = function routeHello(req, res) {
  mdbClient.connect('mongodb+srv://roskata729:12345622@cluster0.ja6gl.mongodb.net/test', (err, client) => {
    
    const db = client.db('Shop');
    const collection = db.collection('Categories');

    collection.find().toArray((collErr, items) => {
      res.render('hello', {
        // Underscore.js lib
        _,

        // Template data
        title: 'Hello World!',
        items,
      });
      client.close();
    });
  });
};
