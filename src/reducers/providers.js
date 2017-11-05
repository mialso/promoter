import Immutable from 'immutable';
import { SEARCH_SUBMIT } from '../actions/search';
import { PROMOTE_BUSSINESS_ITEM } from '../actions/promote';
import { SUCCESS } from '../constants/meta';

function getProvidersData(itemsData) {
    return itemsData.reduce((acc, item) => {
        // if no reivew type given don't include this item
        const provider = item.reviewType;
        if (!provider) return acc;
        // initialize provider object
        if (!acc[provider]) {
            acc[provider] = { itemToPromote: '' };
        }
        // initialize provider data in case no one available
        if (!Array.isArray(acc[provider].itemIds)) {
            acc[provider].itemIds = [];
        }
        acc[provider].itemIds.push(item.id);
        return acc;
    }, {});
}

const initialState = Immutable.Map();

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case SEARCH_SUBMIT + SUCCESS: {
        if (Array.isArray(payload) && payload.length > 0) {
            return state.merge(getProvidersData(payload));
        }
        return state;
    }
    case PROMOTE_BUSSINESS_ITEM: {
        if (!payload) return state;
        const { itemId, provider } = payload;
        // do nothing in case provider has no such itemId
        if (!state.get(provider).get('itemIds').includes(itemId)) return state;
        const isPromoted = state.getIn([provider, 'itemToPromote']) === itemId;
        if (isPromoted) {
            // remove from promoted
            return state.setIn([provider, 'itemToPromote'], '');
        }
        // add to promoted
        return state.setIn([provider, 'itemToPromote'], itemId);
    }
    default: return state;
    }
};
