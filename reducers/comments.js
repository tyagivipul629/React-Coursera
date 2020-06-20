

export const Comments = (state = {
    errMess: null,
    isLoading: true,
    comments: []
}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return {...state,comments: state.comments.concat(comment)};
        case 'ADD_COMMENTS':
            return {...state, isLoading: false, comments: action.payload}
        default:
          return state;
      }
};