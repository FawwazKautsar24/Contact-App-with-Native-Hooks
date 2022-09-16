import { GET_CONTACT_LIST, ADD_CONTACT_LIST, DELETE_CONTACT_LIST } from "../../actions/contactAction";

const contact = (state, action) => {
    const { type } = action;

    switch(type){
        case GET_CONTACT_LIST: 
            return {
                ...state,
                getContactResult: action.payload.data,
                getContactLoading: action.payload.loading,
                getContactError: action.payload.errorMessage,
            }
        
        case ADD_CONTACT_LIST: 
            return {
                ...state,
                addContactResult: action.payload.data,
                addContactLoading: action.payload.loading,
                addContactError: action.payload.errorMessage,
            }

        case DELETE_CONTACT_LIST: 
            console.log('4. Masuk Reducer : ', action);
            return {
                ...state,
                deleteContactResult: action.payload.data,
                deleteContactLoading: action.payload.loading,
                deleteContactError: action.payload.errorMessage,
            }
        
        default: 
            return state;
    }
}

export default contact;
