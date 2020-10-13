import React, { Fragment, useContext } from 'react';

// Context
//import { GlobalContext } from '../../context/global-state';

const Balance = ({ transactions }) => {
    // const { transactions } = useContext(GlobalContext);

    const calcBalance = () => {
        const amounts = transactions.map(t => t.amount);

        const balance = amounts
            .reduce((acc, amount) => {
                acc += amount;

                return acc;
            }, 0)
            .toFixed(2);

        return balance < 0 ? `-$${Math.abs(balance)}` : `+$${balance}`;
    };

    return (
        <Fragment>
            <h4>Your Balance</h4>
            <h1>{calcBalance()}</h1>
        </Fragment>
    );
};

export default Balance;
