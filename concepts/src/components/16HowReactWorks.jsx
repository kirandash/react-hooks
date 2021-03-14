import React, { useState } from 'react'

function HowReactWorks() {
    const [minutes, setMinutes] = useState(5);
    const [error, setError] = useState(null);

    const handleAdd = () => {
        setMinutes(minutes + 1);
        setError(null);
    }

    const handleSubtract = () => {
        if(minutes > 1) setMinutes(minutes - 1)
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

    // React element is an JS object that contains all the info about child nodes
    // When any update occurs - React makes a copy of new element and compares it with old element
    // const diff = compare(newElement, oldElement)
    // And just updates the diff instead of repainting the whole DOM
    // That's why React is faster
    console.log(element)

    return  element
    
}

export default HowReactWorks
