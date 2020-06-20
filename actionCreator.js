import { baseUrl } from "./baseUrl";

export const addComment = (dishId, rating, author, comment) => ({
    type: 'ADD_COMMENT',
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    fetch(baseUrl+'dishes').then(res=>res.json()).
    then(dishes=>dispatch(addDishes(dishes)));
}


export const dishesFailed = (errmess) => ({
    type: 'DISHES_FAILED',
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: 'ADD_DISHES',
    payload: dishes
});

export const fetchPromotions = (PROMOTIONS) => (dispatch) => {

    fetch(baseUrl+'promotions').then(res=>res.json()).
    then(promotions=>dispatch(addPromotions(promotions)));
}

export const promotionsFailed = (errmess) => ({
    type: 'PROMOTIONS_FAILED',
    payload: errmess
});

export const addPromotions = (promotions) => ({
    type: 'ADD_PROMOTIONS',
    payload: promotions
});

export const fetchLeaders = (LEADERS) => (dispatch) => {

    fetch(baseUrl+'leaders').then(res=>res.json()).
    then(leaders=>dispatch(addLeaders(leaders)));
}

export const leadersFailed = (errmess) => ({
    type: 'LEADERS_FAILED',
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: 'ADD_LEADERS',
    payload: leaders
});

export const fetchComments = (COMMENTS) => (dispatch) => {

    fetch(baseUrl+'comments').then(res=>res.json()).
    then(comments=>dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: 'COMMENTS_FAILED',
    payload: errmess
});

export const addComments = (comments) => ({
    type: 'ADD_COMMENTS',
    payload: comments
});