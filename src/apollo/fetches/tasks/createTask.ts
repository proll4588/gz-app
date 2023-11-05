import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask(
    $poolId: Int!
    $title: String!
    $startDate: Float
    $endDate: Float
  ) {
    createTask(
      poolId: $poolId
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
