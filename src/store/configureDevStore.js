import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import apiMiddleware from '../middleware/api';
import { getDevToolsExtension } from '../util/domUtil';

const enchancer = compose(
    applyMiddleware(apiMiddleware),
    getDevToolsExtension() || (f => f),
);

export default createStore(reducer, {}, enchancer);
