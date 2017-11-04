import { SEARCH_SUBMIT } from '../actions/search';
import { START, FAIL, SUCCESS } from '../constants/meta';

const initialState = {
    search: {
        loading: false,
        loadFail: false,
    },
};

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
    case SEARCH_SUBMIT + START: {
        return Object.assign({}, state, { search: { loading: true, loadFail: false } });
    }
    case SEARCH_SUBMIT + FAIL: {
        return Object.assign({}, state, { search: { loading: false, loadFail: true } });
    }
    case SEARCH_SUBMIT + SUCCESS: {
        return Object.assign({}, state, { search: { loading: false, loadFail: false } });
    }
    default: return state;
    }
};
