import Immutable from 'immutable';
import {
    SEARCH_SUBMIT,
    SEARCH_CLEANUP,
} from '../actions/search';
import { SUCCESS } from '../constants/meta';

const initialState = Immutable.Map({
    results: Immutable.Map({
        dataIds: Immutable.List(),
        params: Immutable.Map(),
    }),
});

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case SEARCH_SUBMIT + SUCCESS: {
        if (Array.isArray(payload) && payload.length > 0) {
            const results = {
                dataIds: payload.map(item => item.id),
                params: action.meta.params,
            };
            return state.merge({
                results: state.get('results').merge(results),
            });
        }
        return state;
    }
    case SEARCH_CLEANUP: {
        return state.merge({
            results: Immutable.Map({
                dataIds: Immutable.List(),
                params: Immutable.Map(),
            }),
        });
    }
    default: return state;
    }
};
