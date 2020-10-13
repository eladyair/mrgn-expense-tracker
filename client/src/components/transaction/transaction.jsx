import React, { useContext } from 'react';

// Context
//import { GlobalContext } from '../../context/global-state';
//import { deleteTransaction } from '../../context/actions/app.actions';

// Apollo
import { useMutation } from '@apollo/react-hooks';
import { DELETE_TRANSACTION } from '../../graphql/mutations.js';

// Styles
import './transaction.styles.scss';

const Transaction = ({ transaction, update }) => {
    //const { dispatch } = useContext(GlobalContext);

    const [deleteTransaction, { data }] = useMutation(DELETE_TRANSACTION);

    const amountSign = transaction.amount < 0 ? '-' : '+';

    const handleDelete = () => {
        //dispatch(deleteTransaction(transaction.id));
        deleteTransaction({ variables: { id: transaction.id } });

        update();
    };

    return (
        <li key={transaction.id} className={`list__item list__item--${amountSign === '-' ? 'minus' : 'plus'}`}>
            {transaction.text}{' '}
            <span>
                {amountSign}${Math.abs(transaction.amount)}
            </span>
            <button className='delete-btn' onClick={handleDelete}>
                X
            </button>
        </li>
    );
};

export default Transaction;
