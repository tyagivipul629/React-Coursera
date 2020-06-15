import  DISHES  from './dishes.js';
import COMMENTS  from './comments.js';
import  PROMOTIONS  from './promotions.js';
import  LEADERS  from './leaders.js';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};