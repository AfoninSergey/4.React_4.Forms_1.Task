import { REG_EXP } from './regexp';
import { ERROR_MESSAGE } from './messages';

export class Validators {
	static validateName = (value: string) => {
		let error = null;
		if (!REG_EXP.LOGIN.test(value)) {
			error = ERROR_MESSAGE.LOGIN;
		} else if (value.length > 30) {
			error = ERROR_MESSAGE.LOGIN_LONG;
		}
		return error;
	};

	static validatePassword = (value: string) => {
		let error = null;
		if (!REG_EXP.PASSWORD.test(value)) {
			error = ERROR_MESSAGE.PASSWORD;
		} else if (value.length > 30) {
			error = ERROR_MESSAGE.PASSWORD_LONG;
		}
		return error;
	};

	static validateEmail = (value: string) =>
		!REG_EXP.EMAIL.test(value) ? ERROR_MESSAGE.EMAIL : null;

	static validateShortName = (value: string) =>
		value.length < 2 ? ERROR_MESSAGE.LOGIN_SHORT : null;

	static validateShortPassword = (value: string) =>
		value.length < 7 ? ERROR_MESSAGE.PASSWORD_SHORT : null;

	static validatePasswordRepeat = (password: string, repeatPassword: string) =>
		password !== repeatPassword ? ERROR_MESSAGE.PASSWORD_REPEAT : null;
}
