import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {appReducer} from './appReducer';
import {profileReducer} from './profileReducer';
import {authReducer} from './authReducer';
import friendsReducer from './friendsReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

// Combine reducers into a single root reducer
const rootReducer = combineReducers({
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer
