

export const Promotions = (state = {
    errMess: null,
    isLoading: true,
    promotions: []
}, action) => {
    switch (action.type) {
        case 'ADD_PROMOTIONS':
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case 'PROMOTIONS_FAILED':
            return {...state, isLoading: false, errMess: action.payload};
        default:
          return state;
      }
};