import React from 'react';
import SearchForm from './SearchForm';

import '../css/Home.css';

export default function Home() {
    return (
        <div className="Home">
            <h2>Connect your Business</h2>
            <SearchForm />
        </div>
    );
}
