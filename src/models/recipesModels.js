const { ObjectId } = require('mongodb');
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

const getRecipeById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  return db.collection('recipes').findOne(ObjectId(id));
};

const updateRecipe = async (name, ingredients, preparation, id) => {
  if (!ObjectId.isValid(id)) return null;

  await connection()
    .then((db) => db
      .collection('recipes')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, ingredients, preparation } }));
  const updatedRecipe = await getRecipeById(id);
  return updatedRecipe;
};

const deleteRecipe = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('recipes').deleteOne({ _id: ObjectId(id) });
};

const editRecipeImage = async (id, image) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('recipes')
    .updateOne({ _id: ObjectId(id) }, { $set: { image } });
  const updateImage = await getRecipeById(id);
  console.log(updateImage);
  return updateImage;
};

module.exports = {
  createRecipes,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  editRecipeImage,
};
