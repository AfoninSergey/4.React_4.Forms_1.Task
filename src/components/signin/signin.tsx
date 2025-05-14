import { useState } from 'react';
import { VARIANT, SIZE, RADIUS, REG_EXP, ERROR_MESSAGE } from '../../constants';
import { Input } from '../input/input';
import { Form } from '../form/form';

export const Signin = () => {
	const [variant] = useState(VARIANT.DEFAULT);
	const [size] = useState(SIZE.MD);
	const [radius] = useState(RADIUS.MD);

	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [emailError, setEmailError] = useState<string | null>(null);
	const [passwordError, setPasswordError] = useState<string | null>(null);

	function onEmailChange({ target }: React.ChangeEvent<HTMLInputElement>) {
		setEmailError(null);
		setEmailValue(target.value);
	}
	function onPasswordChange({ target }: React.ChangeEvent<HTMLInputElement>) {
		validatePassword(target);
		setPasswordValue(target.value);
	}

	function validatePassword(target: HTMLInputElement) {
		if (!REG_EXP.PASSWORD.test(target.value)) {
			setPasswordError(ERROR_MESSAGE.PASSWORD);
		} else if (target.value.length > 30) {
			setPasswordError(ERROR_MESSAGE.PASSWORD_LONG);
		} else {
			setPasswordError(null);
		}
	}

	function validatePostPassword(value: string) {
		if (value.length < 7) {
			setPasswordError(ERROR_MESSAGE.PASSWORD_SHORT);
		}
	}

	function validatePostEmail(value: string) {
		if (!REG_EXP.EMAIL.test(value)) {
			setEmailError(ERROR_MESSAGE.EMAIL);
		}
	}

	function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		validatePostEmail(emailValue);
		validatePostPassword(passwordValue);
		console.log(emailValue, passwordValue);
		setEmailValue('');
		setPasswordValue('');
	}

	const disabledButton = emailError || passwordError;
	return (
		<Form onSubmit={onSubmit}>
			<Input
				id="email"
				name="email"
				label="Почта"
				description="Введите Вашу электронную почту"
				placeholder="example@email.com"
				value={emailValue}
				onChange={onEmailChange}
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
				onChange={onPasswordChange}
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
