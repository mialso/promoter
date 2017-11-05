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
    providers: Immutable.Map(),
});

function getProvidersData(itemsData) {
    return itemsData.reduce((acc, item) => {
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
                dataIds: payload.map(item => item.id),
                params: action.meta.params,
            };
            const providers = getProvidersData(payload);
            return state.merge({
                results: state.get('results').merge(results),
                providers: state.get('providers').merge(providers),
            });
        }
        return state;
    }
    case SEARCH_CLEANUP: {
        return state.merge({
            dataIds: Immutable.List(),
            params: Immutable.Map(),
        });
    }
    default: return state;
    }
};
