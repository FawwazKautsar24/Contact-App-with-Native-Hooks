import React, { useEffect } from "react";
import { getContactList } from "../../actions/contactAction";
import { useAppState } from "../../contexts/appState";
// import { getContactResult, getContactLoading, getContactError } from '../../reducers';

function ListContact(){
    const [state, dispatch] = useAppState();
    const { getContactResult, getContactLoading, getContactError } = state;

    useEffect(() => {
        getContactList(dispatch);
    }, [dispatch]);
    
    return (
        <div>
            <h4>List Contact</h4>
            {getContactResult ? (
                getContactResult.map((contact) => {
                    return (
                        <p key={contact.id}>{contact.nama} - {contact.noHP}</p>
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
