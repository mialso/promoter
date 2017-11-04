import { combineReducers } from 'redux';

import search from './search';
import spinner from './spinner';

export default combineReducers({
    search,
    spinner,
});
