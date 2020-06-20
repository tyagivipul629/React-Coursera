

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes:[]
}, action) => {
    switch (action.type) {
        case 'ADD_DISHES':
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case 'DISHES_FAILED':
            return {...state, isLoading: false, errMess: action.payload};
        default:
          return state;
      }
};