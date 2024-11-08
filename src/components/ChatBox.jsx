import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../Firebase';

const ChatBox = () => {
    const messegesEndRef = useRef();
    const [message, setMassage] = useState([]);

    const scrollToBottom = () => {
        messegesEndRef.current.scrollIntoView({behavior : "smooth"})
    };

    useEffect(scrollToBottom,[message])


    useEffect(() => {
        const q = query(
        collection(db, "message"),
        orderBy("createdAt"),
        limit(50),
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const message = [];
            querySnapshot.forEach((doc) => {
                message.push({...doc.data(), id: doc.id});
            });
            setMassage(message);
            
        });
        return () =>unsubscribe;

    }, [])

    return (
        <div className='pb-44 pt-20 containerWrap'>
            {message.map(message => (
                <Message key={message.id} message={message} />
            ))}
            <div ref={messegesEndRef}></div>
        </div>
    )
}

export default ChatBox