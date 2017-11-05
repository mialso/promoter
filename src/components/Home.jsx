import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchSubmitAction, searchCleanUpAction } from '../actions/search';
import SearchForm from './SearchForm';

import '../css/Home.css';

class Home extends Component {
    componentDidMount() {
        // clean up search results
        this.props.searchCleanUp();
        this.props.history.replace('/');
    }
    componentWillReceiveProps(newProps) {
        if (newProps.searchResults !== this.props.searchResults) {
            // if new search results available -> go to searh route and display them
            if (newProps.searchResults.get('dataIds').size > 0) {
                const params = newProps.searchResults.get('params');
                newProps.history.push(`/search/${params.get('zipcode')}/${params.get('name')}`);
            }
        }
    }
    render() {
        return (
            <div className="Home">
                <h2>Connect your Business</h2>
                <SearchForm submitAction={this.props.searchSubmit} />
            </div>
        );
    }
}

Home.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    searchSubmit: PropTypes.func.isRequired,
    searchCleanUp: PropTypes.func.isRequired,
    searchResults: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps({ search }) {
    return {
        searchResults: search.get('results'),
    };
}

export default connect(
    mapStateToProps,
    {
        searchSubmit: searchSubmitAction,
        searchCleanUp: searchCleanUpAction,
    },
)(Home);
