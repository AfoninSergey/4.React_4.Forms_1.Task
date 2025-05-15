import { useState, type Dispatch, type FormEvent, type SetStateAction } from 'react';
import { VARIANT, SIZE, RADIUS } from '../../constants';
import { Input } from '../input/input';
import { Form } from '../form/form';
import { onInputChange } from '../../handlers';
import styles from './module.signup.module.css';

interface FormState {
	nameValue: string;
	nickValue: string;
	emailValue: string;
	genderValue: string;
	passwordValue: string;
	repeatPasswordValue: string;
	nameError: null | string;
	emailError: null | string;
	passwordError: null | string;
	repeatPasswordError: null | string;
}

interface SigninProps {
	onSubmit: (
		event: FormEvent<HTMLFormElement>,
		setValue: Dispatch<SetStateAction<FormState>>,
		state: { [value: string]: string },
		initialState: FormState
	) => void;
}

const initialState: FormState = {
	nameValue: '',
	nickValue: '',
	emailValue: '',
	genderValue: 'male',
	passwordValue: '',
	repeatPasswordValue: '',
	nameError: null,
	emailError: null,
	passwordError: null,
	repeatPasswordError: null
};

export const Signup = ({ onSubmit }: SigninProps) => {
	const [variant] = useState(VARIANT.DEFAULT);
	const [size] = useState(SIZE.MD);
	const [radius] = useState(RADIUS.MD);

	const [state, setState] = useState(initialState);
	const {
		nameValue,
		nickValue,
		emailValue,
		genderValue,
		passwordValue,
		repeatPasswordValue,
		nameError,
		emailError,
		passwordError,
		repeatPasswordError
	} = state;

	const disabledButton =
		nameError || emailError || passwordError || repeatPasswordError;
	return (
		<Form
			onSubmit={(event) =>
				onSubmit(
					event,
					setState,
					{
						nameValue,
						nickValue,
						emailValue,
						genderValue,
						passwordValue,
						repeatPasswordValue
					},
					initialState
				)
			}
		>
			<Input
				id="name"
				name="name"
				label="Имя"
				description="Введите Ваше имя"
				placeholder="Иван"
				value={nameValue}
				onChange={(e) => onInputChange(e.target, setState)}
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
				value={nickValue}
				onChange={(e) => onInputChange(e.target, setState)}
				variant={variant}
				size={size}
				radius={radius}
				nick
			/>
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
			<div className={styles.gender}>
				<label>
					<input
						type="radio"
						name="gender"
						value="male"
						checked={genderValue === 'male'}
						onChange={(e) => onInputChange(e.target, setState)}
					/>
					<span>Мужчина</span>
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="female"
						checked={genderValue === 'female'}
						onChange={(e) => onInputChange(e.target, setState)}
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
				value={passwordValue}
				onChange={(e) => onInputChange(e.target, setState)}
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
				value={repeatPasswordValue}
				onChange={(e) => onInputChange(e.target, setState)}
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
