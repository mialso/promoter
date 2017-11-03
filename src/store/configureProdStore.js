import { createStore, applyMiddleware, compose } from 'redux'
import reducer from 'reducers'

const enchancer = compose(
    applyMiddleware(),
);

export default createStore(reducer, {}, enchancer);
