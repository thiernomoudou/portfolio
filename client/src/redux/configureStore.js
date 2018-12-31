import { createStore } from 'redux';

import { rootReducer, initialState } from './reducers';

const configureStore = () => {
  const store = createStore(
    rootReducer, // root reducer
    initialState, // our initialState
  );

  return store;
};

export default configureStore;
