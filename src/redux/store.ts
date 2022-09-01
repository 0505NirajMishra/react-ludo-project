import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = compose;
const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { persistor, store };
