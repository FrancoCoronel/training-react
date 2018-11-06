import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import ItemList from './app/components/ItemList';

const store = configureStore(); // You can also pass in an initialState here
ReactDOM.render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('root')
);