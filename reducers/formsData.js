const InitialFeedback={
    firstname: 'Vipul',
    lastname: 'Tyagi',
    telnum: '12345',
    email: 'vipultyagi629@gmail.com',
    agree: '',
    contactType: 'Email',
    message: 'Hello'
};

export const formsData=(state=InitialFeedback,action)=>{
    switch(action.type){
        case 'CHANGE_FIELD':
                return {...state, [action.payload.name]: action.payload.value};
        default:
            return state
    }
}