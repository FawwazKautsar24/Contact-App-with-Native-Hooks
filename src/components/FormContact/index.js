import React, { useEffect, useState } from 'react';
import { useAppState } from '../../contexts/appState';
import { addContact, editContact } from '../../actions/contactAction'
import { getContactList } from "../../actions/contactAction";

function FormContact(){
    const [nama, setNama] = useState('');
    const [noHP, setNoHP] = useState('');
    const [id, setId] = useState('');

    const [state, dispatch] = useAppState();
    const { addContactResult, getEditContactResult, editContactResult } = state;
    
    const handleSubmit = (e) => {
        console.log('4. Masuk Handle Submit');
        e.preventDefault();

        if(id){
            editContact(dispatch, { id: id, nama: nama, noHP: noHP });
        }else{
            addContact(dispatch, { nama: nama, noHP: noHP });
        }
    }

    // add contact
    useEffect(() => {
        if(addContactResult){
            getContactList(dispatch);
        }
        setNama('');
        setNoHP('');
    }, [addContactResult, dispatch]);

    // get edit data contact
    useEffect(() => {
        if(getEditContactResult){
            console.log('3. Update state nama, noHP, id dari Global State (Reducer)');
            setNama(getEditContactResult.nama);
            setNoHP(getEditContactResult.noHP);
            setId(getEditContactResult.id);
        }
    }, [getEditContactResult]);

    // edit contact
    useEffect(() => {
        if(editContactResult){
            console.log('8. Masuk ComponentDidpdate');
            getContactList(dispatch);
            setNama('');
            setNoHP('');
            setId('');
        }
    }, [editContactResult, dispatch]);
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h4>{id ? 'Edit Data' : 'Add Data'}</h4>
                <input type="text" name="nama" placeholder="Nama . . ." value={nama} onChange={(e) => setNama(e.target.value)} />
                <input type="text" name="noHP" placeholder="No HP . . ." value={noHP} onChange={(e) => setNoHP(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormContact;
