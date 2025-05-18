import { useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import type { InputRadius, InputSize, InputVariant } from '../../types';
import { Form, Input } from '../../components';
import { Validators } from '../../validators';
import styles from './signup.module.css';

interface FormState {
	name: string;
	nick: string;
	email: string;
	gender: string;
	password: string;
	repeatPassword: string;
	nameError: null | string;
	emailError: null | string;
	passwordError: null | string;
	repeatPasswordError: null | string;
}

interface SignupProps {
	onSubmit: (state: { [value: string]: string }) => void;
}

const initialState: FormState = {
	name: '',
	nick: '',
	email: '',
	gender: 'male',
	password: '',
	repeatPassword: '',
	nameError: null,
	emailError: null,
	passwordError: null,
	repeatPasswordError: null
};

export const Signup: FC<SignupProps> = ({ onSubmit }) => {
	const [variant] = useState<InputVariant>('default');
	const [size] = useState<InputSize>('sizeMd');
	const [radius] = useState<InputRadius>('radiusMd');

	const [state, setState] = useState(initialState);
	const {
		name,
		nick,
		email,
		gender,
		password,
		repeatPassword,
		nameError,
		emailError,
		passwordError,
		repeatPasswordError
	} = state;

	function onChange({ target }: ChangeEvent<HTMLInputElement>) {
		const { name, value } = target;
		let error = null;

		if (name === 'name') {
			error = Validators.validateName(value);
		}

		if (name === 'password' || name === 'repeatPassword') {
			error = Validators.validatePassword(value);
		}

		setState((prevValues) => ({
			...prevValues,
			passwordError: null,
			repeatPasswordError: null,
			[name]: value,
			[`${name}Error`]: error
		}));
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		let error: string | null = null;

		error = Validators.validateShortName(name);
		if (error) {
			setState((prevValues) => ({
				...prevValues,
				nameError: error
			}));
			return;
		}

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

		error = Validators.validatePasswordRepeat(password, repeatPassword);
		if (error) {
			setState((prevValues) => ({
				...prevValues,
				passwordError: error,
				repeatPasswordError: error
			}));
			return;
		}

		onSubmit({
			name,
			nick,
			email,
			gender,
			password,
			repeatPassword
		});
	}

	const disabledButton =
		nameError || emailError || passwordError || repeatPasswordError;
	return (
		<Form onSubmit={handleSubmit}>
			<Input
				id="name"
				name="name"
				label="Имя"
				description="Введите Ваше имя"
				placeholder="Иван"
				value={name}
				onChange={onChange}
				variant={variant}
				size={size}
				radius={radius}
				error={nameError}
				asterisk
			/>
			<Input
				id="nick"
				name="nick"
				label="Ник"
				description="Введите Ваш никнэйм"
				placeholder="nickname"
				value={nick}
				onChange={onChange}
				variant={variant}
				size={size}
				radius={radius}
				icon
			/>
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
			<div className={styles.gender}>
				<label>
					<input
						type="radio"
						name="gender"
						value="male"
						checked={gender === 'male'}
						onChange={onChange}
					/>
					<span>Мужчина</span>
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="female"
						checked={gender === 'female'}
						onChange={onChange}
					/>
					<span>Женщина</span>
				</label>
			</div>
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
			<Input
				id="repeatPassword"
				name="repeatPassword"
				type="password"
				label="Повтор пароля"
				description="Повторите пароль"
				placeholder="*********"
				value={repeatPassword}
				onChange={onChange}
				variant={variant}
				size={size}
				radius={radius}
				error={repeatPasswordError}
				asterisk
			/>
			<button type="submit" disabled={!!disabledButton}>
				Войти
			</button>
		</Form>
	);
};
