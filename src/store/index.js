import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'v1',
    storage,
    whitelist: ['user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const initialState={};

const middleware=[thunk];

export const store  = createStore(persistedReducer,
    initialState,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));
export const persistor = persistStore(store)





















// import { createStore } from 'redux';
// import rootReducer from '../reducers';

// let store = createStore(rootReducer)