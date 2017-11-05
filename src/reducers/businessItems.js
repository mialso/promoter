import Immutable from 'immutable';
import {
    SEARCH_SUBMIT,
} from '../actions/search';
import { SUCCESS } from '../constants/meta';

const initialState = Immutable.Map({
    byId: Immutable.Map(),
});

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case SEARCH_SUBMIT + SUCCESS: {
        if (Array.isArray(payload) && payload.length > 0) {
            return state.set(
                'byId',
                state.get('byId').merge(payload.map(item => [item.id, item])),
            );
        }
        return state;
    }
    default: return state;
    }
};
