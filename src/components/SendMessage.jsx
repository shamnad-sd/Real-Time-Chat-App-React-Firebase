import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase';

const SendMessage = () => {

    const [value, setValue]=useState("")
    const {currentUser} =UserAuth();    


    const handleSendMessage = async (e) =>{
        e.preventDefault();

        if(value.trim()===""){
            alert('Enter Valid Message !!')
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "message"),{
                text: value,
                name:displayName,
                avatar :photoURL,
                createdAt : serverTimestamp(),
                uid,
            })
        } catch (error) {
            console.log(error);
        }
        console.log(value);
        setValue("")
    }

    return (
        <div className='bg-gray-300 fixed bottom-0 w-full py-6 shadow-lg text-black'>
            <form onSubmit={handleSendMessage} action="" className='containerWrap flex px-2'>
                <input value={value} onChange={e =>setValue (e.target.value)} className='bg-gray-200 input w-full focus:outline-none rounded-r-none' type="text"/>
                <button type='submit' className='w-auto bg-green-600 text-white  rounded-r-lg px-5 text-sm'>Send</button>
            </form>
        </div>
    )
}

export default SendMessage