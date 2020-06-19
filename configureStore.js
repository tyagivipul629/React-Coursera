import {createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux'
import { Dishes } from './reducers/dishes.js';
import { Comments } from './reducers/comments.js';
import { Promotions } from './reducers/promotions.js';
import { Leaders } from './reducers/leaders.js';
import thunk from 'redux-thunk';
import {createForms} from 'react-redux-form';
import {formsData} from './reducers/formsData.js';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            formsData: formsData
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}