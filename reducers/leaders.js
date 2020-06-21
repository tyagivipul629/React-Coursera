

export const Leaders = (state = {
    errMess: null,
    isLoading: true,
    leaders: []
}, action) => {
    switch (action.type) {
        case 'ADD_LEADERS':
            return {...state, isLoading: false, errMess: null, leaders: action.payload};

        case 'LEADERS_FAILED':
            return {...state, isLoading: false, errMess: action.payload};
        default:
          return state;
      }
};