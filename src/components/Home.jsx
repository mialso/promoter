import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchSubmitAction } from '../actions/search';
import SearchForm from './SearchForm';

import '../css/Home.css';

function Home({ searchSubmit }) {
    return (
        <div className="Home">
            <h2>Connect your Business</h2>
            <SearchForm submitAction={searchSubmit} />
        </div>
    );
}

Home.propTypes = {
    searchSubmit: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        searchSubmit: searchSubmitAction,
    },
)(Home);
