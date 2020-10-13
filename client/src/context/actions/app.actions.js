import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../types';

export const addTransaction = transaction => ({
    type: ADD_TRANSACTION,
    payload: transaction
});

export const deleteTransaction = id => ({
    type: DELETE_TRANSACTION,
    payload: id
});
