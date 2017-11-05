import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProviderResults from './ProviderResults';
import Spinner from './common/Spinner';
import { searchSubmitAction } from '../actions/search';

import '../css/Search.css';

class SearchResultsContainer extends Component {
    componentDidMount() {
        if (!this.isDataAvailable()) {
            this.props.searchSubmit(this.props.match.params);
        }
    }
    isDataAvailable = () => {
        const { searchResults } = this.props;
        return searchResults.data && (searchResults.data.length > 0);
    }
    render() {
        return (
            <div className="Search">
                <h2>Choose you Business</h2>
                {
                    this.isDataAvailable() ?
                        <div className="Providers">
                            {
                                Object.keys(this.props.searchProviders)
                                    .map(key => (
                                        <ProviderResults
                                            key={key}
                                            providerName={key}
                                            itemIds={this.props.searchProviders[key]}
                                        />
                                    ))
                            }
                        </div>
                        : <Spinner
                            model="search"
                            size={30}
                            applyStyle={{ height: '40px' }}
                            messages
                        />
                }
            </div>
        );
    }
}

SearchResultsContainer.propTypes = {
    match: PropTypes.instanceOf(Object).isRequired,
    searchResults: PropTypes.instanceOf(Object).isRequired,
    searchProviders: PropTypes.instanceOf(Object).isRequired,
    searchSubmit: PropTypes.func.isRequired,
};

function mapStateToProps({ search }) {
    return {
        searchResults: search.results,
        searchProviders: search.providers,
    };
}

export default connect(
    mapStateToProps,
    {
        searchSubmit: searchSubmitAction,
    },
)(SearchResultsContainer);
