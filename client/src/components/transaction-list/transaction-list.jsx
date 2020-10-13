import React, { Fragment, useContext } from 'react';

// Context
//import { GlobalContext } from '../../context/global-state';

// Styles
import './transaction-list.styles.scss';

// Components
import Transaction from '../transaction/transaction';

const TransactionList = ({ loading, transactions, update }) => {
    // const { transactions } = useContext(GlobalContext);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Fragment>
            <h3>History</h3>
            <ul className='list'>
                {transactions.map(t => (
                    <Transaction key={t.id} transaction={t} update={update} />
                ))}
            </ul>
        </Fragment>
    );
};

export default TransactionList;
