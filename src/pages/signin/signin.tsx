import { useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import { Form, Input } from '../../components';
import type { InputRadius, InputSize, InputVariant } from '../../types';
import { Validators } from '../../validators';

interface FormState {
	email: string;
	password: string;
	emailError: null | string;
	passwordError: null | string;
}

interface SigninProps {
	onSubmit: (state: { [value: string]: string }) => void;
}

const initialState: FormState = {
	email: '',
	password: '',
	emailError: null,
	passwordError: null
};

export const Signin: FC<SigninProps> = ({ onSubmit }) => {
	const [variant] = useState<InputVariant>('default');
	const [size] = useState<InputSize>('sizeMd');
	const [radius] = useState<InputRadius>('radiusMd');

	const [state, setState] = useState(initialState);
	const { email, password, emailError, passwordError } = state;

	function onChange({ target }: ChangeEvent<HTMLInputElement>) {
		const { name, value } = target;
		let error = null;

		if (name === 'password') {
			error = Validators.validatePassword(value);
		}

		setState((prevValues) => ({
			...prevValues,
			[name]: value,
			[`${name}Error`]: error
		}));
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		let error: string | null = null;
	

		error = Validators.validateEmail(email);
		if (error) {
			setState((prevValues) => ({
				...prevValues,
				emailError: error
			}));
			return;
		}

		error = Validators.validateShortPassword(password);
		if (error) {
			setState((prevValues) => ({
				...prevValues,
				passwordError: error
			}));
			return;
		}

		onSubmit({ email, password });
		setState(initialState);
	}

	const disabledButton = emailError || passwordError;
	return (
		<Form onSubmit={handleSubmit}>
			<Input
				id="email"
				name="email"
				label="Почта"
				description="Введите Вашу электронную почту"
				placeholder="example@email.com"
				value={email}
				onChange={onChange}
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
				value={password}
				onChange={onChange}
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
