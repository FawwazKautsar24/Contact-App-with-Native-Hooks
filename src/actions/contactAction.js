import axios from "axios";

export const GET_CONTACT_LIST = 'GET_CONTACT_LIST';
export const ADD_CONTACT_LIST = 'ADD_CONTACT_LIST';
export const DELETE_CONTACT_LIST = 'DELETE_CONTACT_LIST';

export const getContactList = (dispatch) => {
    // loading
    dispatch({
        type: GET_CONTACT_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    });

    axios({
        method: 'GET',
        url: `http://localhost:3000/contacts`,
        timeout: 120000
    })
        .then((response) => {
            dispatch({
                type: GET_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            });
        })
}

export const addContact = (dispatch, data) => {
    // loading
    dispatch({
        type: ADD_CONTACT_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    });

    axios({
        method: 'POST',
        url: `http://localhost:3000/contacts`,
        timeout: 120000,
        data: data
    })
        .then((response) => {
            dispatch({
                type: ADD_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            });
        })
        .catch((error) => {
            dispatch({
                type: ADD_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            });
        })
}

export const deleteContact = (dispatch, id) => {
    // loading
    console.log('2. Masuk Action');
    dispatch({
        type: DELETE_CONTACT_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    });

    axios({
        method: 'DELETE',
        url: `http://localhost:3000/contacts/${id}`,
        timeout: 120000
    })
        .then((response) => {
            console.log('3. Berhasil Delete : ', response);
            dispatch({
                type: DELETE_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            });
        })
        .catch((error) => {
            console.log('3. Gagal Delete : ', error);
            dispatch({
                type: DELETE_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            });
        })
}
