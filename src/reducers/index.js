import { combineReducers } from 'redux';

import search from './search';
import spinner from './spinner';
import businessItems from './businessItems';

export default combineReducers({
    search,
    spinner,
    businessItems,
});
