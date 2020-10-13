import { gql } from '@apollo/react-hooks';

export const CREATE_TRANSACTION = gql`
    mutation CreateTransaction($text: String!, $amount: Int!) {
        createTransaction(text: $text, amount: $amount) {
            text
            amount
        }
    }
`;

export const DELETE_TRANSACTION = gql`
    mutation DeleteTransaction($id: ID!) {
        deleteTransaction(id: $id) {
            id
        }
    }
`;
