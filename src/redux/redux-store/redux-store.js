import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from '../reducers/profileReducer';
import friendsReducer from '../reducers/friendsReducer';
import dialogsReducer from '../reducers/dialogsReducer';

// Объединяем редукторы в один корневой редуктор
let reducers = combineReducers({
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer,
});

// Создаем хранилище, используя корневой редуктор
let store = configureStore({
    reducer: reducers,
});

export default store;
