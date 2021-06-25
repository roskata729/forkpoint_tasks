/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable spaced-comment */
/*const assert = require('assert');

let _db;
module.exports = {
    getDb,
    initDb,
    _db,
};
// mongodb+srv://roskata729:12345622@cluster0.ja6gl.mongodb.net/test

function getDb() {
    assert.ok(_db, "Db has not been initialized. Please called init first.");
    return _db;
}

function connected(err, db) {
    if (err) {
        return callback(err);
    }
    console.log("DB initialized - connected");
    _db = db;
    return callback(null, _db);
}

function initDb(callback) {
    if (_db) {
        console.warn("Trying to init DB again!");
        return callback(null, _db);
    }
client.connect('mongodb+srv://roskata729:12345622@cluster0.ja6gl.mongodb.net/test', connected);
}
*/
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
