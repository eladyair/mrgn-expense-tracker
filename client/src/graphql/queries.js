import { gql } from '@apollo/react-hooks';

export const GET_TRANSACTIONS = gql`
    query GetTransactions {
        transactions {
            id
            text
            amount
        }
    }
`;
