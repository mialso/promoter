import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProviderResults from './ProviderResults';

class SearchResultsContainer extends Component {
    componentWillMount() {
        // TODO replace this with url parameters parsing on didMount
        if (!(this.props.searchResults.data && this.props.searchResults.data.length > 0)) {
            this.props.history.replace('/');
        }
    }
    render() {
        return (
            <div className="Search">
                Search
                <div className="Providers">
                {
                    Object.keys(this.props.searchProviders)
                        .map(key => <ProviderResults key={key} providerName={key} />)
                }
                </div>
            </div>
        );
    }
}

SearchResultsContainer.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    searchResults: PropTypes.instanceOf(Object).isRequired,
    searchProviders: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps({ search }) {
    return {
        searchResults: search.results,
        searchProviders: search.providers,
    };
}

export default connect(
    mapStateToProps,
    null,
)(SearchResultsContainer);
