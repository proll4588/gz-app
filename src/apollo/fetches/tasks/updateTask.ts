import { gql } from '@apollo/client';

export const UPDATE_TASK = gql`
  mutation UpdateTask(
    $taskId: Int!
    $title: String
    $startDate: Float
    $endDate: Float
  ) {
    updateTask(
      taskId: $taskId
      title: $title
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      poolId
      title
      startDate
      endDate
    }
  }
`;
