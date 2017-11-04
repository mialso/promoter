import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import apiMiddleware from '../middleware/api';

const enchancer = compose(applyMiddleware(apiMiddleware));

export default createStore(reducer, {}, enchancer);
