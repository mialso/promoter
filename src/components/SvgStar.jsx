import React from 'react';
import PropTypes from 'prop-types';

function calculateGradient(number) {
    if (number > 0.95) return '100%';
    const percents = (number % 1) * 100;
    return `${percents}%`;
}

const Star = ({ size, number }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size} height={size} viewBox="0 0 491.977 491.977" style={{ enableBackground: 'new 0 0 491.977 491.977', marginRight: 2, borderRadius: 2 }}>
        <defs>
            <linearGradient id="fillPart">
                <stop offset="0%" stopColor="#f67c3e" />
                <stop offset={calculateGradient(number)} stopColor="#f67c3e" />
                <stop offset={calculateGradient(number)} stopColor="#cccccc" />
                <stop offset="100%" stopColor="#cccccc" />
            </linearGradient>
        </defs>
        <g fill="url(#fillPart)">
            <path d="M470.949,0H21.026C9.413,0,0,9.413,0,21.026v449.925c0,11.613,9.413,21.025,21.026,21.025h449.925    c11.613,0,21.025-9.412,21.025-21.025V21.026C491.977,9.413,482.562,0,470.949,0z M450.535,216.914l-88.268,86.04l20.838,121.49    c1.242,7.244-1.736,14.562-7.68,18.883c-3.365,2.441-7.35,3.688-11.352,3.688c-3.074,0-6.158-0.732-8.984-2.221l-109.102-57.358    l-109.104,57.358c-6.505,3.426-14.388,2.855-20.333-1.467c-5.946-4.32-8.923-11.639-7.68-18.883l20.837-121.49l-88.268-86.04    c-5.263-5.128-7.157-12.802-4.886-19.791c2.272-6.989,8.313-12.083,15.586-13.138l121.983-17.727l54.551-110.535    c3.253-6.59,9.965-10.763,17.313-10.763s14.061,4.173,17.313,10.763l54.552,110.535l121.982,17.727    c7.273,1.056,13.314,6.149,15.586,13.138C457.691,204.112,455.799,211.786,450.535,216.914z" />
        </g>
    </svg>
);

Star.propTypes = {
    number: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
};

export default Star;
