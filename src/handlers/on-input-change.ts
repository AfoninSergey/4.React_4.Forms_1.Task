import type { Dispatch, SetStateAction } from "react";
import { validatePassword } from "../utils";



export function onInputChange<T>(
    target: HTMLInputElement,
    setValue: Dispatch<SetStateAction<T>>
) {
    const {name, value} = target
    let error = null
    
    if(name === 'password') {
        error = validatePassword(value)
    }

    setValue((prevValues) => ({
        ...prevValues,
        [`${name}Error`]: error,
        [`${name}Value`]: value
    }));
}