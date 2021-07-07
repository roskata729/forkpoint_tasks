/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */

const _ = require('underscore');
const mongoUtil = require('../mongo');

//console.log(mongoUtil.getDb());

module.exports = async function productsOfCat(req, res) {
  const qId = req.params.id;
  const db = mongoUtil.getDb();
  const allProducts = db.collection('Products');
  const categories = db.collection('Categories');

  const queryCategory = await allProducts
    .find({
      primary_category_id: qId,
    })
    .toArray();
  const allCatsQuery = await categories.find({}).toArray();
  //console.log(qId);

  //console.log(qId);
  console.log(allCatsQuery);
  //console.log(queryCategory);

  res.render('productsofcat', {
    _,
    outPutColors: [],
    outPutSizes: [],
    title: queryCategory.primary_category_id,
    items: [],
    productsOfCat: queryCategory,
    allCats: allCatsQuery,
    parentCat:
      queryCategory.parent_category_id === 'root'
        ? 'Index'
        : queryCategory.parent_category_id,
  });
};
