import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Other store configurations go here, such as middleware setup, devTools configuration, etc.
});

export default store;
