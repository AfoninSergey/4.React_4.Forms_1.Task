import { ERROR_MESSAGE } from '../constants';

export const validatePostPasswordRepeat = (
	password: string,
	repeatPassword: string
) => (password !== repeatPassword ? ERROR_MESSAGE.PASSWORD_REPEAT : null);
