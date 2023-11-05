import { gql } from '@apollo/client';

export const DELETE_TASK = gql`
  mutation DeleteTask($taskId: Int!) {
    deleteTask(taskId: $taskId) {
      id
      poolId
      title
      startDate
      endDate
    }
  }
`;
