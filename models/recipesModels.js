const connection = require('./connection');

const createRecipes = async (name, ingredients, preparation, userId) => {
  const { insertedId } = await connection().then((db) => db
  .collection('recipes').insertOne({ name, ingredients, preparation, userId }));
return { name, ingredients, preparation, userId, _id: insertedId };
};

module.exports = {
  createRecipes,
};
