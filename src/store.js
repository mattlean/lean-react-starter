import { createStore } from 'redux';

import counter from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export default store;
