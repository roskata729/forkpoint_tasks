/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */

const _ = require('underscore');
const mongoUtil = require('../mongo');

//console.log(mongoUtil.getDb());

module.exports = async function routeSub(req, res) {
  const qId = req.params.id;
  const db = mongoUtil.getDb();
  const category = db.collection('Categories');

  const queryCategory = await category
    .find(
      { categories: { $elemMatch: { id: { $in: [qId] } } } },
      { categories: 0 }
    )
    .toArray();
  console.log(qId);

  // queryCategory.categories.each(queryCategory.categories, (mainCat) => {
  //   console.log(mainCat);
  // });

  //console.log(qId);
  console.log(queryCategory);
  console.log(queryCategory.categories);
  //console.log(queryCategory);

  res.render('subCat', {
    _,
    title: queryCategory.name,
    items: [],
    topC: queryCategory,
    filter: qId,
    // parentCat:
    //   queryCategory.parent_category_id === 'root'
    //     ? 'Index'
    //     : queryCategory.parent_category_id,
  });
};
