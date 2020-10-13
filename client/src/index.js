import React from 'react';
import ReactDOM from 'react-dom';

// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// Styles
import './index.css';

// Components
import App from './App';

// Initializing the apollo client
const apClient = new ApolloClient({
    uri: 'http://localhost:4000'
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={apClient}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
