import React from 'react';

import '../css/Provider.css';

const ProviderResults = ({ providerName }) => {
    const providerIconClass = `Provider-icon ${providerName}`;
    return (
        <div className="ProviderResults">
            <div className={providerIconClass}></div>
        </div>
    );
};

export default ProviderResults;
