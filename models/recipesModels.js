const connection = require('./connection');

const createRecipes = async (name, ingredients, preparation, userId) => {
  const { insertedId } = await connection().then((db) => db
    .collection('recipes').insertOne({ name, ingredients, preparation, userId }));
  return { name, ingredients, preparation, userId, _id: insertedId };
};

const getAllRecipes = async () => {
  const db = await connection();
  const recipes = await db.collection('recipes').find().toArray();
  return recipes;
};

module.exports = {
  createRecipes,
  getAllRecipes,
};
