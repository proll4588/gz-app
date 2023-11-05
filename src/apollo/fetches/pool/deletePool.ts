import { gql } from '@apollo/client';

export const DELETE_POOL = gql`
  mutation DeletePool($poolId: Int!) {
    deletePool(poolId: $poolId) {
      id
      userId
      month
      isComplite
    }
  }
`;
