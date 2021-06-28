/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */

const _ = require('underscore');
const mongoUtil = require('../mongo');

//console.log(mongoUtil.getDb());

module.exports = async function product(req, res) {
  const qId = req.params.id;
  const db = mongoUtil.getDb();
  const category = db.collection('Products');

  const queryCategory = await category.findOne({
    id: qId,
  });
  //console.log(qId);

  //console.log(qId);
  console.log(queryCategory);
  //console.log(queryCategory);

  res.render('product', {
    _,
    title: queryCategory.name,
    items: [],
    product: queryCategory,
    parentCat:
      queryCategory.parent_category_id === 'root'
        ? 'Index'
        : queryCategory.parent_category_id,
  });
};
