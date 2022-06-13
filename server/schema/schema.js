// Mongoose models
const Recipe = require("../models/Recipe");
const Ingredient = require("../models/Ingredient");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

// Recipe type
const RecipeType = new GraphQLObjectType({
  name: "Recipe",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    ingredient: {
      type: IngredientType,
      resolve(parent, args) {
        return Recipe.findById(parent.recipeId);
      },
    },
  }),
});

// Ingredient type
const IngredientType = new GraphQLObjectType({
  name: "Ingredient",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    amount: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ingredients: {
      type: new GraphQLList(IngredientType),
      resolve(parent, args) {
        return Ingredient.find();
      },
    },
    ingredient: {
      type: IngredientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Ingredient.findById(args.id);
      },
    },
    recipes: {
      type: new GraphQLList(RecipeType),
      resolve(parent, args) {
        return Recipe.find();
      },
    },
    recipe: {
      type: RecipeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Recipe.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
