const _ = require('underscore');
const mdbClient = require('mongodb').MongoClient;

module.exports = function routeHello(req, res) {
  mdbClient.connect('mongodb+srv://roskata729:12345622@cluster0.ja6gl.mongodb.net/test', (err, client) => {
    
    const db = client.db('Shop');
    const collection = db.collection('Categories');

    let query = { id : "womens" };
    
    collection.find(query).toArray((collErr, items) => {
      
      res.render('mainCat', {
        // Underscore.js lib
        _,

        // Template data
        title: items.name,
        items,
      });
      client.close();
    });
  });
};