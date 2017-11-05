import {
    SEARCH_SUBMIT,
} from '../actions/search';
import { SUCCESS } from '../constants/meta';

const initialState = {
    results: {},
    providers: {},
};

function getProvidersData(itemsData) {
    return itemsData.reduce((acc, item) =>  {
        // if no reivew type given don't include this item
        const provider = item.reviewType;
        if (!provider) return acc;
        // initialize provider data in case no one available
        if (!Array.isArray(acc[provider])) {
            acc[provider] = [];
        }
        acc[provider].push(item.id);
        return acc;
    }, {});
}
export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case SEARCH_SUBMIT + SUCCESS: {
        if (Array.isArray(payload) && payload.length > 0) {
            const results = {
                data: payload.filter(item => typeof item.id === 'string' && item.id.length > 0),
                params: action.meta.params,
            };
            const providers = getProvidersData(results.data);
            return Object.assign({}, state, { results, providers });
        }
        return state;
    }
    default: return state;
    }
};
