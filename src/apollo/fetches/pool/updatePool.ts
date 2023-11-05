import { gql } from '@apollo/client';

export const UPDATE_POOL = gql`
  mutation UpdatePool($poolId: Int!, $month: Float, $status: Boolean) {
    updatePool(poolId: $poolId, month: $month, status: $status) {
      id
      userId
      month
      isComplite
    }
  }
`;
