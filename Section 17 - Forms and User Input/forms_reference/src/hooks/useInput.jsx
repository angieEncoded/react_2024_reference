import { useState } from "react";

export function useInput(defaultValue, validationFunction) {

    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [wasTouched, setWasTouched] = useState(false);

    const valueIsValid = validationFunction(enteredValue);


    const handleInputChange = (event) => {
        setEnteredValue(event.target.value);
        setWasTouched(false);
    }

    const handleInputBlur = () => {
        setWasTouched(true);
    }

    // return these back to the caller
    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: wasTouched && !valueIsValid
    }

}