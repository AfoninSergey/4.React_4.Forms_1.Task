import type { Dispatch, FormEvent, SetStateAction } from 'react';
import {
	validatePostEmail,
	validatePostName,
	validatePostPassword,
	validatePostPasswordRepeat
} from '../utils';

export function onSubmit<T>(
	event: FormEvent<HTMLFormElement>,
	setValues: Dispatch<SetStateAction<T>>,
	postData: { [value: string]: string },
	initialState: T
) {
	event.preventDefault();
	const {
		nameValue,	
		emailValue,		
		passwordValue,
		repeatPasswordValue
	} = postData;

	if (nameValue && validatePostName(nameValue)) {
		setValues((prev) => {
			return {
				...prev,
				nameError: validatePostName(nameValue)
			};
		});
	} else if (emailValue && validatePostEmail(emailValue)) {
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
	} else if (
		repeatPasswordValue &&
		validatePostPasswordRepeat(passwordValue, repeatPasswordValue)
	) {
		const error = validatePostPasswordRepeat(passwordValue, repeatPasswordValue);
		setValues((prev) => {
			return {
				...prev,
				passwordError: error,
				repeatPasswordError: error
			};
		});
	} else {
		console.log(postData);
		setValues(initialState);
	}
}
