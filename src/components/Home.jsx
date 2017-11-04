import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchSubmitAction } from '../actions/search';
import SearchForm from './SearchForm';

import '../css/Home.css';

class Home extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.searchResults !== this.props.searchResults) {
            if (newProps.searchResults.data && newProps.searchResults.data.length > 0) {
                const { params } = newProps.searchResults;
                newProps.history.push(`/search/${params.zipcode}/${params.name}`);
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
    searchSubmit: PropTypes.func.isRequired,
    searchResults: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps({ search }) {
    return {
        searchResults: search.results,
    };
}

export default connect(
    mapStateToProps,
    {
        searchSubmit: searchSubmitAction,
    },
)(Home);
