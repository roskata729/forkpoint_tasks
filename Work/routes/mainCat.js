/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const _ = require('underscore');
const mdbClient = require('mongodb').MongoClient;


module.exports = function routeMain(req, res) {
  mdbClient.connect('mongodb+srv://roskata729:12345622@cluster0.ja6gl.mongodb.net/test', (err, client) => {
    
    const db = client.db('Shop');
    const collection = db.collection('Categories');

    
    collection.find().toArray((collErr, items) => {
      
      res.render('mainCat', {
        // Underscore.js lib
        _,
        
        // Template data
        qs: req.params.query,
        title: 'Main Category',
        items,
      });
      client.close();
    });
  });
};
