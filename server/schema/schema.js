// Mongoose models
const Recipe = require("../models/Recipe");
const Ingredient = require("../models/Ingredient");
const Testimonial = require("../models/Testimonial")

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
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

// Testimonial type
const TestimonialType = new GraphQLObjectType({
    name: "Testimonial",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      comment: { type: GraphQLString }
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
    testimonial: {
        type: TestimonialType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Testimonial.findById(args.id);
        },
      },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTestimonial: {
        type: TestimonialType,
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            comment: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve(parent, args){
            const testimonial = new Testimonial({
                name: args.name,
                comment: args.comment
            })
            return testimonial.save()
        }
    },

    addRecipe: {
      type: RecipeType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args){
        const recipe = new Recipe({
            name: args.name,
            description: args.description
        })
        return recipe.save()
      }
    },
    // Delete a recipe
    deleteRecipe: {
        type: RecipeType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args){
            return Recipe.findByIdAndRemove(args.id)
        }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
