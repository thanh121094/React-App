import {combineReducers} from 'redux'
import {Admin} from './AdminReducer';
import {routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


const AppReducers = combineReducers({
    admin: Admin,
    router: routerReducer,
    form: formReducer
});

export default AppReducers;