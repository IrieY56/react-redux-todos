import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
// defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './redux/reducers';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(persistedReducer, {}, composeEnchancers())
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeEnchancers()),
);
// const persistor = persistStore(store);

// export { store, persistor };
export default store;
