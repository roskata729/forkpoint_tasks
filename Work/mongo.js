/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable spaced-comment */

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://roskata729:12345622@cluster0.ja6gl.mongodb.net/test';

let _db;

module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
      _db = client.db('Shop');
      //console.log(_db);
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
