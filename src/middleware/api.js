import { START, SUCCESS, FAIL } from '../constants/meta';

function toQueryString(obj) {
    const parts = [];
    Object.keys(obj).forEach((key) => {
        if (obj[key]) {
            parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
        }
    });
    return parts.join('&');
}

function successHandler(response, action, next, type) {
    next(Object.assign(action, { type: type + SUCCESS, payload: response.data }));
}

function errorHandler(error, action, next, type) {
    next(Object.assign(
        action,
        {
            type: type + FAIL,
            error: true,
            payload: { message: error.message, stack: error.stack },
        },
    ));
}

export default () => next => (action) => {
    // early exit in case there is no need to call API
    if (!(action.meta && action.meta.callAPI)) return next(action);

    const { type, meta } = action;
    // inform app by dispatching START action
    const startAction = Object.assign(action, { type: type + START });
    next(startAction);

    // set authorization headers
    const fetchOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const queryString = toQueryString(meta.params);
    const endpoint = queryString ? meta.endpoint.concat(`?${queryString}`) : meta.endpoint;
    // perform request
    return fetch(endpoint, fetchOptions, meta.body)
        .then((response) => {
            if (response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    return response.json();
                }
                throw new Error(`Response was not JSON: content-type=${contentType}`);
            }
            throw new Error(`Response status is not OK: status=${response.status}`);
        })
        .catch(error => errorHandler(error, action, next, type))
        .then(data => successHandler(data, action, next, type));
};
