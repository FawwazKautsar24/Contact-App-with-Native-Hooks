import React, { useEffect, useState } from 'react';
import { useAppState } from '../../contexts/appState';
import { addContact } from '../../actions/contactAction'
import { getContactList } from "../../actions/contactAction";

function FormContact(){
    const [nama, setNama] = useState('');
    const [noHP, setNoHP] = useState('');

    const [state, dispatch] = useAppState();
    const { addContactResult } = state;
    
    const handleSubmit = (e) => {
        console.log('1. Masuk Handle Submit');
        e.preventDefault();

        addContact(dispatch, { nama: nama, noHP: noHP });
    }

    useEffect(() => {
        if(addContactResult){
            getContactList(dispatch);
        }
        setNama('');
        setNoHP('');
    }, [addContactResult, dispatch]);
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="nama" placeholder="Nama . . ." value={nama} onChange={(e) => setNama(e.target.value)} />
                <input type="text" name="noHP" placeholder="No HP . . ." value={noHP} onChange={(e) => setNoHP(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormContact;
