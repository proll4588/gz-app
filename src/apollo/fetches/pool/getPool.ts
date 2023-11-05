import { gql } from '@apollo/client';

export const GET_POOL = gql`
  query GetPool {
    getPool {
      id
      userId
      month
      isComplite
    }
  }
`;
