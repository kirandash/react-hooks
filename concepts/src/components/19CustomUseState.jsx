import React from 'react'

// Global states variable to Keep track of all states [[]]
const states = [];
// Global call count to check which state data is requested - that's why hooks can not be in conditional blocks
let callCount = -1;

// Custom useState hook
const useState = (initialValue) => {
    const id = ++callCount;

    if(states[id]) return states[id];

    // Set global state
    const setValue = newValue => {
        // set value in states
        states[id][0] = newValue;
        // re render react component
        CustomUseState();
    }

    const tuple = [initialValue, setValue]
    // create global state
    states.push(tuple);
    return tuple;
}

function CustomUseState() {
    // reset call count on each render
    callCount = -1;

    const [minutes, setMinutes] = useState(5);
    const [error, setError] = useState(null);

    console.log(states)

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

    return  element
    
}

export default CustomUseState
