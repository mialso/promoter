import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../css/PromotedItem.css';

const PromotedItem = ({ providerName, businessItem }) => {
    if (!(businessItem && businessItem.size > 0)) return null;
    const item = businessItem.toJS();
    const providerIconClass = `Provider-icon ${providerName}`;
    return (
        <div className="Item PromotedItem">
            <div className="PromotedItem-providerLogo">
                <div className={providerIconClass} />
            </div>
            <div className="PromotedItem-businessItem">
                <div className="BusinessItem-name">{ item.name }</div>
                <div>{ item.phone }</div>
            </div>
        </div>
    );
};

PromotedItem.propTypes = {
    businessItem: PropTypes.instanceOf(Object),
    providerName: PropTypes.string.isRequired,
};

PromotedItem.defaultProps = {
    businessItem: null,
};

function mapStateToProps({ businessItems }, { provider }) {
    return {
        businessItem: businessItems.getIn(['byId', provider.get('itemToPromote')]),
    };
}

export default connect(
    mapStateToProps,
    null,
)(PromotedItem);
