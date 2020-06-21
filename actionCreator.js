import { baseUrl } from "./baseUrl";

export const addComment = (comment) => ({
    type: 'ADD_COMMENT',
    payload: comment
});

export const fetchDishes = () => (dispatch) => {
    fetch(baseUrl+'dishes').
    then(res=>{
        if(res.ok)
            return res;
        else{
            var error=new Error('Error '+res.status+': '+res.text);
            throw error;
        }
    },(error)=>{
        var errMess=new Error(error.message);
        throw errMess;
    }).
    then(res=>res.json()).
    then(dishes=>dispatch(addDishes(dishes))).
    catch(error=>dispatch(dishesFailed(error.message)));
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

    fetch(baseUrl+'promotions').
    then(res=>{
        if(res.ok)
            return res;
        else{
            var error=new Error('Error '+res.status+': '+res.text);
            throw error;
        }
    },(error)=>{
        
        var errMess=new Error(error.message);
        throw errMess;
    }).
    then(res=>res.json()).
    then(promotions=>dispatch(addPromotions(promotions))).
    catch(error=>dispatch(promotionsFailed(error.message)));
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

    fetch(baseUrl+'leaders').
    then(res=>{
        if(res.ok)
            return res;
        else{
            var error=new Error('Error '+res.status+': '+res.text);
            throw error;
        }
    },(error)=>{
        var errMess=new Error(error.message);
        throw errMess;
    }).
    then(res=>res.json()).
    then(leaders=>dispatch(addLeaders(leaders))).
    catch(error=>dispatch(leadersFailed(error.message)));
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

    fetch(baseUrl+'comments').
    then(res=>{
        if(res.ok)
            return res;
        else{
            var error=new Error('Error '+res.status+': '+res.text);
            throw error;
        }
    },(error)=>{
        var errMess=new Error(error.message);
        throw errMess;
    }).
    then(res=>res.json()).
    then(comments=>dispatch(addComments(comments))).
    catch(error=>dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: 'COMMENTS_FAILED',
    payload: errmess
});

export const addComments = (comments) => ({
    type: 'ADD_COMMENTS',
    payload: comments
});