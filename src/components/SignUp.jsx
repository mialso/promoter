import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PromotedItem from './PromotedItem';

import '../css/SignUp.css';

class SignUpContainer extends Component {
    componentDidMount() {
        const items = this.getItems();
        if (!(Array.isArray(items) && items.length !== 0)) {
            this.props.history.replace('/');
        }
    }
    getItems() {
        return this.props.providers.valueSeq()
            .reduce(
                (acc, provider) => {
                    acc.push(provider.get('itemToPromote'));
                    return acc;
                },
                [],
            ).filter(item => item.length > 0);
    }
    render() {
        const { providers } = this.props;
        return (
            <div className="SignUp">
                <div className="SignUp-header">
                    <h2>Sign Up and Promote</h2>
                </div>
                <div className="SignUp-content">
                    <div className="PromotedItems">
                        {
                            providers.entrySeq().toArray().map(itemArr => (
                                <PromotedItem
                                    key={itemArr[0]}
                                    provider={itemArr[1]}
                                    providerName={itemArr[0]}
                                />
                            ))
                        }
                    </div>
                    <div className="Auth0Container" />
                </div>
                <div className="Search-bottomLinks">
                    <span>update search(go back works now)</span>
                    <span>or</span>
                    <Link to="/">Search again</Link>
                </div>
            </div>
        );
    }
}

SignUpContainer.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    providers: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps({ providers }) {
    return {
        providers,
    };
}

export default connect(
    mapStateToProps,
    null,
)(SignUpContainer);
