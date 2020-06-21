

export const Comments = (state = {
    errMess: null,
    isLoading: true,
    comments: []
}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            var comment = action.payload;
            return {...state,comments: state.comments.concat(comment)};
        case 'ADD_COMMENTS':
            return {...state, isLoading: false, comments: action.payload}
        case 'COMMENTS_FAILED':
            return {...state, errMess: action.payload};
        default:
          return state;
      }
};