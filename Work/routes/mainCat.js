/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const _ = require('underscore');
//const mdbClient = require('mongodb').MongoClient;
const mongoUtil = require('../mongo');


//console.log(mongoUtil.getDb());

module.exports = function routeMain(req, res) {
    
    mongoUtil.connectToServer(function( err, client ) {
      if (err) console.log(err);

      const db = mongoUtil.getDb();
      const collection = db.collection('Categories');


    collection.find().toArray((collErr, items) => {
      
      res.render('mainCat', {
        // Underscore.js lib
        _,
        
        // Template data
        title: 'Main Category',
        items,
      });
    });
  });
};


  // app.get('/mainCat/:id', (req, res) => {
  //   //console.log(req.params.id);
  //   res.render('mainCat', { 
  //   _,
  //   title: req.params.id.toUpperCase(),
  //   qs: req.params.id,
  //   items: [],
  //});
  //});
