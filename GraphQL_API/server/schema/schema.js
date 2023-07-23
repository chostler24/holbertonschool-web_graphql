// schema file for GraphQL
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        // Add your code here to fetch data from the database based on the provided id
        // For simplicity, let's assume we have a tasks array with dummy data
        const tasks = [
          { id: '1', title: 'Task 1', weight: 1, description: 'Description of Task 1' },
          { id: '2', title: 'Task 2', weight: 2, description: 'Description of Task 2' },
          { id: '3', title: 'Task 3', weight: 3, description: 'Description of Task 3' },
        ];
        return tasks.find(task => task.id === args.id);
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = schema;
