import React, { useEffect } from "react";
import { getContactList, deleteContact } from "../../actions/contactAction";
import { useAppState } from "../../contexts/appState";
// import { getContactResult, getContactLoading, getContactError } from '../../reducers';

function ListContact(){
    const [state, dispatch] = useAppState();
    const { getContactResult, getContactLoading, getContactError, deleteContactResult } = state;

    useEffect(() => {
        console.log('1. Masuk ComponentDidMount');
        getContactList(dispatch);
    }, [dispatch]);
    
    useEffect(() => {
        if(deleteContactResult){
            console.log('5. Masuk ComponentDidUpdate');
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
                            <button onClick={() => deleteContact(dispatch, contact.id)}>Delete</button>
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
