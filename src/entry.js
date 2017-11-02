import React, { Component } from 'react';
import { render } from 'react-dom';

import './App.css';

export default function App() {
    return (
        <div className="App">
            <h2>Promoter</h2>
        </div>
    );
}

render(<App />, document.getElementById('app'));
