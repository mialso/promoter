import React from 'react';
import PropTypes from 'prop-types';

const HomeLabelInput = ({
    name,
    displayName,
    value,
    onChange,
    onFocus,
    onBlur,
    labelVisibility,
}) => (
    <label className="Home-label" htmlFor={name}>
        <div
            className="Home-labelText"
            style={{ visibility: labelVisibility }}
        >
            { displayName }
        </div>
        <input
            type="text"
            placeholder={labelVisibility === 'visible' ? '' : displayName}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    </label>
);

HomeLabelInput.propTypes = {
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    labelVisibility: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
};

export default HomeLabelInput;
