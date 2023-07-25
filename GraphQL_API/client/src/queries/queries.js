// externalized queries

import { gql } from 'apollo-boost';

const getTasksQuery = gql`
  {
    tasks {
      id
      title
      weight
      description
      project {
        id
        title
      }
    }
  }
`;

const getProjectsQuery = gql`
  {
    projects {
      id
      title
    }
  }
`;

const addTaskMutation = gql`
  mutation($title: String!, $weight: Int!, $description: String!, $projectId: ID!) {
    addTask(title: $title, weight: $weight, description: $description, projectId: $projectId) {
      title
      id
    }
  }
`;

const addProjectMutation = gql`
  mutation($title: String!) {
    addProject(title: $title) {
      title
    }
  }
`;

const getTaskDetailQuery = gql`
  query($id: ID) {
    task(id: $id) {
      id
      title
      weight
      description
      project {
        id
        title
        weight
        tasks {
          id
          title
          weight
        }
      }
    }
  }
`;

export {
  getTasksQuery,
  getProjectsQuery,
  addTaskMutation,
  addProjectMutation,
  getTaskDetailQuery
};
