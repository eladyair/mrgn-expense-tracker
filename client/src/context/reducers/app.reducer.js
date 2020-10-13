import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../types';

export default (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [payload, ...state.transactions]
            };
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== payload)
            };
        default: {
            return state;
        }
    }
};
