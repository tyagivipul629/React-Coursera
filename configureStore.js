import {createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux'
import { Dishes } from './reducers/dishes.js';
import { Comments } from './reducers/comments.js';
import { Promotions } from './reducers/promotions.js';
import { Leaders } from './reducers/leaders.js';
import thunk from 'redux-thunk';
import {createForms} from 'react-redux-form';
 

const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
            feedback1: InitialFeedback
        })
        }),
        applyMiddleware(thunk)
    );
    return store;
}