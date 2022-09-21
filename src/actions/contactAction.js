import axios from "axios";

export const GET_CONTACT_LIST = 'GET_CONTACT_LIST';
export const ADD_CONTACT_LIST = 'ADD_CONTACT_LIST';
export const DELETE_CONTACT_LIST = 'DELETE_CONTACT_LIST';
export const GET_EDIT_CONTACT = 'GET_EDIT_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';

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

export const getEditContact = (dispatch, data) => {
    // loading
    console.log('1. Masuk Action (getEditContact)');
    dispatch({
        type: GET_EDIT_CONTACT,
        payload: {
            data: data
        }
    });
}

export const editContact = (dispatch, data) => {
    // loading
    console.log('5. Masuk Action (editContact)');
    dispatch({
        type: EDIT_CONTACT,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    });

    axios({
        method: 'PUT',
        url: `http://localhost:3000/contacts/${data.id}`,
        timeout: 120000,
        data: data
    })
        .then((response) => {
            console.log('6. Berhasil Edit : ', response.data);
            dispatch({
                type: EDIT_CONTACT,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            });
        })
        .catch((error) => {
            console.log('6. Gagal Edit : ', error.message);
            dispatch({
                type: EDIT_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            });
        })
}
