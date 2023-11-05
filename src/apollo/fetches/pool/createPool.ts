import { gql } from '@apollo/client';

export const CREATE_POOL = gql`
  mutation CreatePool($month: Float) {
    createPool(month: $month) {
      id
      userId
      month
      isComplite
    }
  }
`;
