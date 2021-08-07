import React, { useReducer } from 'react'

function ReducerForm() {
    // Note: with useReducer state is usually an object unlie useState where state can be boolean or string etc 
    const initialState = {
        error: null,
        loading: false,
        startDate: new Date("July 3, 2021")
    }

    const reducer = (state, action) =>  {
        switch(action.type) {
            case "SIGNUP": {
                return { ...state, loading: true }
            }
            case "SIGNUP_ERROR": {
                return { ...state, loading: false, error: action.error }
            }
            case "START_DATE_CHANGE": {
                return { ...state, startDate: action.date }
            }
            default:
                // return state
                // to make sure developer is not dispatching an unallowed action
                throw new Error(`Unrecognized action: ${action.type}`)
        }
    }

    // dispatch is used to change the state
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    const { error, loading, startDate } =  state;

    const signUp = () => {}

    const handleSignup = async event => {
        event.preventDefault();
        
        dispatch({ type: "SIGNUP" });
        // setLoading(true);

        const [displayName, photoUrl, email, password] = event.target.elements;
        try {
            await signUp({
                displayName: displayName.value,
                email: email.value,
                password: password.value,
                photoUrl: photoUrl.value,
                startDate
            })
        }
        catch (error) {
            dispatch({ type: "SIGNUP_FAILED", error });
            // setLoading(false)
            // setError(error)
        }
    }

    function setStartDate(date) {
        dispatch({ type: "START_DATE_CHANGE", date: date })
    }

    return (
        <div>
            <button onClick={handleSignup}>Sign up</button>
            {loading}
            {error && error.message}
            <button onClick={setStartDate}>Change date</button>            
        </div>
    )
}

export default ReducerForm
