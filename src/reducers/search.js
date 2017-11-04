import {
    SEARCH_SUBMIT,
} from '../actions/search';
import { SUCCESS } from '../constants/meta';

const initialState = {
    results: {},
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case SEARCH_SUBMIT + SUCCESS: {
        if (Array.isArray(payload) && payload.length > 0) {
            const results = {
                data: payload,
                params: action.meta.params,
            };
            return Object.assign({}, state, { results });
        }
        return state;
    }
    default: return state;
    }
};
