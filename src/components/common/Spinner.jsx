import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../css/Spinner.css';

const SpinnerComponent = ({
    model,
    applyStyle,
    status,
    size,
    messages,
}) => {
    const spinnerClass = `Spinner-spinner is${size}px`;
    const loadFailMessage = `${model} loadFail`;
    const noDataMessage = `${model} no data available`;
    return (
        <div className="Spinner" style={applyStyle}>
            { status.loading && <div className={spinnerClass} /> }
            { messages && status.loadFail && <p className="Spinner-message">{ loadFailMessage }</p> }
            { messages && !status.loading && !status.loadFail && <p className="Spinner-message">{ noDataMessage }</p> }
        </div>
    );
};

SpinnerComponent.propTypes = {
    model: PropTypes.string.isRequired,
    size: PropTypes.number,
    applyStyle: PropTypes.instanceOf(Object),
    status: PropTypes.shape({
        loading: PropTypes.bool,
        loadFail: PropTypes.bool,
    }),
    messages: PropTypes.bool,
};

SpinnerComponent.defaultProps = {
    applyStyle: {},
    status: {},
    size: 30,
    messages: false,
};

const mapStateToProps = ({ spinner }, props) => ({
    status: spinner[props.model],
});

export default connect(mapStateToProps)(SpinnerComponent);
