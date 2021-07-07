/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const _ = require('underscore');
//const mdbClient = require('mongodb').MongoClient;
const mongoUtil = require('../mongo');

//console.log(mongoUtil.getDb());

module.exports = async function routeMain(req, res) {
  const qId = req.params.id;
  const db = mongoUtil.getDb();
  const category = db.collection('Categories');

  const queryCategory = await category.findOne({ id: qId });
  //console.log(queryCategory);

  res.render('mainCat', {
    _,
    title: queryCategory.name,
    items: [],
    topC: queryCategory,
    parentCat:
      queryCategory.parent_category_id === 'root'
        ? 'Index'
        : queryCategory.parent_category_id,
  });
};
