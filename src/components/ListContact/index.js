import React, { useEffect } from "react";
import { getContactList, deleteContact, getEditContact } from "../../actions/contactAction";
import { useAppState } from "../../contexts/appState";
// import { getContactResult, getContactLoading, getContactError } from '../../reducers';

function ListContact(){
    const [state, dispatch] = useAppState();
    const { getContactResult, getContactLoading, getContactError, deleteContactResult } = state;

    useEffect(() => {
        getContactList(dispatch);
    }, [dispatch]);
    
    useEffect(() => {
        if(deleteContactResult){
            getContactList(dispatch);
        }
    }, [dispatch, deleteContactResult]);

    return (
        <div>
            <h4>List Contact</h4>
            {getContactResult ? (
                getContactResult.map((contact) => {
                    return (
                        <p key={contact.id}>
                            {contact.nama} - 
                            {contact.noHP} - 
                            <button style={{ margin: "0 7px" }} onClick={() => deleteContact(dispatch, contact.id)}>Delete</button>
                            <button onClick={() => getEditContact(dispatch, contact)}>Edit</button>
                        </p>
                    )
                })
            ) : getContactLoading ? (
                <p>Loading . . .</p>
            ) : (
                <p>{getContactError ? getContactError : "Tidak Terdapat Data"}</p>
            )}
        </div>
    )
}

export default ListContact;
