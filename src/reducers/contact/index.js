import { GET_CONTACT_LIST, ADD_CONTACT_LIST, DELETE_CONTACT_LIST, GET_EDIT_CONTACT, EDIT_CONTACT } from "../../actions/contactAction";

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
            return {
                ...state,
                deleteContactResult: action.payload.data,
                deleteContactLoading: action.payload.loading,
                deleteContactError: action.payload.errorMessage,
            }
        
        case GET_EDIT_CONTACT: 
            return {
                ...state,
                getEditContactResult: action.payload.data,
            }
            
            case EDIT_CONTACT: 
            return {
                ...state,
                editContactResult: action.payload.data,
                editContactLoading: action.payload.loading,
                editContactError: action.payload.errorMessage,
            }
        
        default: 
            return state;
    }
}

export default contact;
