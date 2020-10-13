import React, { Fragment, useState, useContext } from 'react';

// Context
//import { GlobalContext } from '../../context/global-state';
//import { addTransaction } from '../../context/actions/app.actions';

// Apollo
import { useMutation } from '@apollo/react-hooks';
import { CREATE_TRANSACTION } from '../../graphql/mutations.js';

// Styles
import './add-transaction.styles.scss';

// Utils
//import { generateID } from '../../utils/utils';

const AddTransaction = ({ update }) => {
    // const { dispatch } = useContext(GlobalContext);

    const [transactionDetails, setTransactionDetails] = useState({ text: '', amount: 0 });

    const [addTransaction, { data }] = useMutation(CREATE_TRANSACTION);

    const handleChange = e => {
        let { name, value } = e.target;

        if (name === 'amount' && value !== '') {
            value = +value;
        }

        setTransactionDetails({ ...transactionDetails, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // const newTran = {
        //     id: generateID(),
        //     ...transactionDetails
        // };

        // dispatch(addTransaction(newTran));

        addTransaction({ variables: { text: transactionDetails.text, amount: transactionDetails.amount } });

        update();

        setTransactionDetails({ ...transactionDetails, text: '', amount: 0 });
    };

    return (
        <Fragment>
            <h3>Add New Transaction</h3>
            <form className='form' action=''>
                <div className='form__control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' name='text' placeholder='Enter text...' onChange={handleChange} value={transactionDetails.text} />
                </div>
                <div className='form__control'>
                    <div className='amount'>
                        <label htmlFor='amount'>Amount</label>
                        <ul>
                            <li>Expense: (-value)</li>
                            <li>Income: (+value)</li>
                        </ul>
                    </div>
                    <input type='number' name='amount' placeholder='Enter amount...' onChange={handleChange} value={transactionDetails.amount} />
                </div>
                <button className='btn' onClick={handleSubmit}>
                    Add Transaction
                </button>
            </form>
        </Fragment>
    );
};

export default AddTransaction;
