import type { Dispatch, SetStateAction } from "react";
import { validatePassword } from "../utils";
import { validateName } from "../utils/validate-name";



export function onInputChange<T>(
    target: HTMLInputElement,
    setValue: Dispatch<SetStateAction<T>>
) {
    const {name, value} = target
    let error = null
    
    if(name === 'name') {
        error = validateName(value)
    }

    if(name === 'password' || name === 'repeatPassword') {
        error = validatePassword(value)
    }

    setValue((prevValues) => ({
        ...prevValues,
        passwordError: null,
        repeatPasswordError: null,
        [`${name}Error`]: error,
        [`${name}Value`]: value
    }));
}