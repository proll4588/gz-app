import { gql } from '@apollo/client';
import { ID } from '../../../types/GeneralTypes';

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

export interface GetPoolResponse {
  getPool: {
    id: ID;
    userId: number;
    month: number;
    isComplite: boolean;
  }[];
}
