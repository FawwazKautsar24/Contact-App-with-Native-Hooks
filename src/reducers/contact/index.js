import { GET_CONTACT_LIST } from "../../actions/contactAction";

const contact = (state, action) => {
    const { type } = action;

    switch(type){
        case GET_CONTACT_LIST: 
            console.log('4. Masuk Reducer : ', action);
            return {
                ...state,
                getContactResult: action.payload.data,
                getContactLoading: action.payload.loading,
                getContactError: action.payload.errorMessage,
            }
        
        default: 
            return state;
    }
}

export default contact;