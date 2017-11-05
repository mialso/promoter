import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProviderResults from './ProviderResults';
import Spinner from './common/Spinner';
import { searchSubmitAction } from '../actions/search';

import '../css/Search.css';

class SearchResultsContainer extends Component {
    componentDidMount() {
        if (!this.isDataAvailable()) {
            // no data available
            if (this.isUrlParamsAvailable()) {
                // but we have params - let's make request
                this.props.searchSubmit(this.props.match.params);
            } else {
                // no data or url params -> go Home
                this.props.history.push('/');
            }
        }
    }
    isDataAvailable = () => this.props.searchResults.size > 0
    isUrlParamsAvailable = () => {
        if (!this.props.match) return false;
        if (!this.props.match.params) return false;
        return this.props.match.params.zipcode && this.props.match.params.name;
    }
    hasPromotedItems = () => this.props.searchProviders.valueSeq()
        .reduce((acc, provider) => provider.get('itemToPromote') || acc, false)
    render() {
        const providersArray = this.props.searchProviders.entrySeq().toArray();
        return (
            <div className="Search">
                <h2>Choose your Business</h2>
                {
                    this.isDataAvailable() ?
                        <div className="Providers">
                            {
                                providersArray.map(itemsArr => (
                                    <ProviderResults
                                        key={itemsArr[0]}
                                        providerName={itemsArr[0]}
                                        itemIds={itemsArr[1].get('itemIds')}
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
                {
                    this.hasPromotedItems() ?
                        <div className="Search-bottomLinks">
                            <Link to="/signup">Next</Link>
                        </div> :
                        <div className="Search-bottomLinks">
                            <span>More Results</span>
                            <span>or</span>
                            <Link to="/" >Search again</Link>
                        </div>
                }
            </div>
        );
    }
}

SearchResultsContainer.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    match: PropTypes.instanceOf(Object).isRequired,
    searchResults: PropTypes.instanceOf(Object).isRequired,
    searchProviders: PropTypes.instanceOf(Object).isRequired,
    searchSubmit: PropTypes.func.isRequired,
};

function mapStateToProps({ search, providers }) {
    return {
        searchResults: search.getIn(['results', 'dataIds']),
        searchProviders: providers,
    };
}

export default connect(
    mapStateToProps,
    {
        searchSubmit: searchSubmitAction,
    },
)(SearchResultsContainer);
