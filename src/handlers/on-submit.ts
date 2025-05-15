import type { Dispatch, FormEvent, SetStateAction } from 'react';
import { validatePostEmail, validatePostPassword } from '../utils';

export function onSubmit<T>(
	event: FormEvent<HTMLFormElement>,
	setValues: Dispatch<SetStateAction<T>>,
	postData: { [value: string]: string },
	initialState: T
) {
	event.preventDefault();
	const { emailValue, passwordValue } = postData;
    
	if (emailValue && validatePostEmail(emailValue)) {
		setValues((prev) => {		
			return {
				...prev,
				emailError: validatePostEmail(emailValue)
			};
		});
	} else if (passwordValue && validatePostPassword(passwordValue)) {
		setValues((prev) => {			
			return {
				...prev,
				passwordError: validatePostPassword(passwordValue)
			};
		});
	} else {
        console.log(postData)
        setValues(initialState)
    }
}


