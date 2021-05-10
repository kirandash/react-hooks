import React, { useState, useRef } from 'react'

function UseRef() {
    const [minutes, setMinutes] = useState(5);
    const [error, setError] = useState(null);

    // useRef to get access to DOM element
    const spanRef = useRef();

    const handleAdd = () => {
        setMinutes(minutes + 1);
        setError(null);
        const span = spanRef.current;
        span.innerText = minutes;
    }

    const handleSubtract = () => {
        if(minutes > 1){
            setMinutes(minutes - 1);
            const span = spanRef.current;
            span.innerText = minutes;
        }
        else setError("Greater than 0 plz")
    }

    const element = (
        <div>
            <div className="minutes">
                <div>
                    <button onClick={handleSubtract}>
                        -
                    </button>
                </div>
                <div>
                    {minutes} Minutes
                </div>
                <span ref={spanRef} />
                <div>
                    <button onClick={handleAdd}>
                        +
                    </button>
                </div>
            </div>
            { error && (
                <div>
                    <button onClick={() => setError(null)}>
                        Dismiss
                    </button>
                    <center><p>{error}</p></center>
                </div>
            )}
        </div>
    )

    return  element
    
}

export default UseRef
