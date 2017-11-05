import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BusinessItem = ({ itemData }) => (
    <div className="BusinessItem">
        { itemData.id }
    </div>
);

BusinessItem.propTypes = {
    itemData: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps({ search }, { itemId }) {
    return {
        itemData: search.results.data.find(item => item.id === itemId) || {},
    };
}

export default connect(
    mapStateToProps,
    null,
)(BusinessItem);
