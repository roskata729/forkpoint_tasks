/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
const _ = require('underscore');
const mdbClient = require('mongodb').MongoClient;

module.exports = function routeIndex(req, res) {
  mdbClient.connect(
    'mongodb+srv://roskata729:12345622@cluster0.ja6gl.mongodb.net/test',
    (err, client) => {
      const db = client.db('Shop');
      const collection = db.collection('Categories');

      collection.find(req).toArray((collErr, items) => {
        res.render('index', {
          // Underscore.js lib
          _,

          // Template data
          title: 'Online Store',
          parentCat: '',
          topC: [],
          items,
        });
        client.close();
      });
    }
  );
};
