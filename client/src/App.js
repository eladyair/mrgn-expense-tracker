import React, { useState, useEffect } from 'react';

// Context
import { GlobalProvider } from './context/global-state';

// Apollo
import { useQuery } from '@apollo/react-hooks';
import { GET_TRANSACTIONS } from './graphql/queries';

// Styles
import './App.css';

// Components
import Header from './components/header/header';
import Balance from './components/balance/balance';
import IncomeExpenses from './components/income-expenses/income-expenses';
import TransactionList from './components/transaction-list/transaction-list';
import AddTransaction from './components/add-transaction/add-transaction';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const { loading, error, data, refetch } = useQuery(GET_TRANSACTIONS);

    useEffect(() => {
        if (data && data.transactions) {
            setTransactions(data.transactions);
        }
    }, [data]);

    if (error) {
        console.log('Query Error: ', error);
    }

    return (
        <GlobalProvider>
            <div className='app'>
                <Header />
                <div className='container'>
                    <Balance transactions={transactions} />
                    <IncomeExpenses transactions={transactions} />
                    <TransactionList loading={loading} transactions={transactions} update={refetch} />
                    <AddTransaction update={refetch} />
                </div>
            </div>
        </GlobalProvider>
    );
};

export default App;
