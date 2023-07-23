// schema file for GraphQL
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');

// TaskType definition
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

// RootQuery definition
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        const task = {
          id: args.id,
          title: 'Sample Task',
          weight: 5,
          description: 'This is a sample task',
        };
        return task;
      },
    },
  },
});

// Export the GraphQLSchema with RootQuery
module.exports = new GraphQLSchema({
  query: RootQueryType,
});
