import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SearchResultsContainer extends Component {
    componentWillMount() {
        if (!(this.props.searchResults.data && this.props.searchResults.data.length > 0)) {
            this.props.history.replace('/');
        }
    }
    render() {
        return (
            <div className="Search">
                Search
            </div>
        );
    }
}

SearchResultsContainer.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    searchResults: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps({ search }) {
    return {
        searchResults: search.results,
    };
}

export default connect(
    mapStateToProps,
    null,
)(SearchResultsContainer);
