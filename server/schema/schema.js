const { recipes } = require('../sampleData')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require('graphql')

// Recipe type
const RecipeType = new GraphQLObjectType({
    name: 'Recipe',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: { 
        recipe: {
            type: RecipeType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args){
                return recipes.find(recipe => recipe.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})