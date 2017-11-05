import { combineReducers } from 'redux';

import search from './search';
import spinner from './spinner';
import businessItems from './businessItems';
import providers from './providers';

export default combineReducers({
    search,
    spinner,
    businessItems,
    providers,
});
