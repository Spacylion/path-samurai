import {configureStore} from '@reduxjs/toolkit';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';


// Create the store using configureStore
const store = configureStore({
    reducer: rootReducer,
    middleware: [ThunkMiddleware],
});

export default store
