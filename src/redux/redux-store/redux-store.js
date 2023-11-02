import { combineReducers, createStore } from 'redux';

import profileReducer from '../reducers/profileReducer';
import friendsReducer from '../reducers/friendsReducer';
import dialogsReducer from '../reducers/dialogsReducer';
import usersReducer from '../reducers/usersReducer';
import authReducer from '../reducers/authReducer';

// Объединяем редукторы в один корневой редуктор
let reducers = combineReducers({
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

// Создаем хранилище, используя корневой редуктор
let store = createStore(reducers);

window.store = store

export default store;


