import React, { useEffect } from 'react'

function SavePost() {
    const makeNewPostKey = (date) => {};
    const setLocalStorage = () => {}
    // when the component comes back, I want to get the message
    // that was perviously entered in the localStorage
    // when the message changes, save it to localStorage
    const date  = new Date();
    const key = makeNewPostKey(date);
    useEffect(() => {
        setLocalStorage(key, message);
    }, [message])
    return (
        <div>
            
        </div>
    )
}

export default SavePost
