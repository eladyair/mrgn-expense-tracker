import React, { useContext } from 'react';

// Context
//import { GlobalContext } from '../../context/global-state';

// Styles
import './income-expenses.styles.scss';

const IncomeExpenses = ({ transactions }) => {
    // const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(t => t.amount);

    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, amount) => {
            acc += amount;

            return acc;
        }, 0)
        .toFixed(2);

    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((acc, amount) => {
            acc -= amount;

            return acc;
        }, 0)
        .toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div className='money'>
                <h4>Income</h4>
                <p className='money__income money--plus'>+${income}</p>
            </div>
            <div className='money'>
                <h4>Expense</h4>
                <p className='money__expense money--minus'>-${expense}</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
