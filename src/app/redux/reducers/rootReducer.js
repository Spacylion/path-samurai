import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

// Объединяем редукторы в один корневой редуктор
export const rootReducer = combineReducers({
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
