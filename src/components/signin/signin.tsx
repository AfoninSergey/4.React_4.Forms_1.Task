import { useState, type Dispatch, type FormEvent, type SetStateAction } from 'react';
import { VARIANT, SIZE, RADIUS } from '../../constants';
import { Input } from '../input/input';
import { Form } from '../form/form';
import { onInputChange } from '../../handlers';

interface FormState {
	emailValue: string;
	passwordValue: string;
	emailError: null | string;
	passwordError: null | string;
}

interface SigninProps {
	onSubmit: (
		event: FormEvent<HTMLFormElement>,
		setValue: Dispatch<SetStateAction<FormState>>,
		state: {[value: string]: string},
		initialState: FormState
	) => void;
}

const initialState: FormState = {
	emailValue: '',
	passwordValue: '',
	emailError: null,
	passwordError: null
};

export const Signin = ({ onSubmit }: SigninProps) => {
	const [variant] = useState(VARIANT.DEFAULT);
	const [size] = useState(SIZE.MD);
	const [radius] = useState(RADIUS.MD);

	const [state, setState] = useState(initialState);
	const { emailValue, passwordValue, emailError, passwordError } = state;

	const disabledButton = emailError || passwordError;
	return (
		<Form onSubmit={(e) => onSubmit(e, setState, {emailValue, passwordValue,}, initialState)}>
			<Input
				id="email"
				name="email"
				label="Почта"
				description="Введите Вашу электронную почту"
				placeholder="example@email.com"
				value={emailValue}
				onChange={(e) => onInputChange(e.target, setState)}
				variant={variant}
				size={size}
				radius={radius}
				error={emailError}
				asterisk
			/>
			<Input
				id="password"
				name="password"
				type="password"
				label="Пароль"
				description="Введите Ваш пароль"
				placeholder="*********"
				value={passwordValue}
				onChange={(e) => onInputChange(e.target, setState)}
				variant={variant}
				size={size}
				radius={radius}
				error={passwordError}
				asterisk
			/>
			<button type="submit" disabled={!!disabledButton}>
				Войти
			</button>
		</Form>
	);
};
