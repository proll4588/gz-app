import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query GetTasks($poolId: Int!) {
    getTasks(poolId: $poolId) {
      id
      poolId
      title
      startDate
      endDate
    }
  }
`;
