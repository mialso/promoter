import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'reducers';
import { getDevToolsExtension } from 'util/domUtil';

const enchancer = compose(
    applyMiddleware(),
    getDevToolsExtension() || (f => f),
);

export default createStore(reducer, {}, enchancer);
