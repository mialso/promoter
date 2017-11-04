import {
    SEARCH_SUBMIT,
} from '../actions/search';
import { SUCCESS } from '../constants/meta';

const initialState = {
    search: {},
};

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
    case SEARCH_SUBMIT + SUCCESS: {
        return state;
    }
    default: return state;
    }
};
