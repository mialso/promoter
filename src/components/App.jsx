import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

import 'css/App.css';

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h2>Promoter</h2>
            </div>
        </Provider>
    );
}
