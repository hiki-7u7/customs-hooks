import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );


    const increment = () => setCounter( c => c + 1 );
    const reset = () => setCounter( initialValue );
    const decrement = () => setCounter( c => c - 1 );


    return {
        counter,
        increment,
        decrement,
        reset
    }

}