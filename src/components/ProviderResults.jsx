import React from 'react';
import PropTypes from 'prop-types';
import BusinessItem from './BusinessItem';

import '../css/Provider.css';

const ProviderResults = ({ providerName, itemIds }) => {
    const providerIconClass = `Provider-icon ${providerName}`;
    return (
        <div className="ProviderResults">
            <div className="ProviderResults-header">
                <div className={providerIconClass} />
            </div>
            <div className="ProviderResults-grid">
                {
                    itemIds.map(itemId => <BusinessItem key={itemId} itemId={itemId} />)
                }
            </div>
        </div>
    );
};

ProviderResults.propTypes = {
    providerName: PropTypes.string.isRequired,
    itemIds: PropTypes.instanceOf(Array).isRequired,
};

export default ProviderResults;
