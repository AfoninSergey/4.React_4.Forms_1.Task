import { ERROR_MESSAGE } from '../constants';

export const validatePostPassword = (value: string) =>
	value.length < 7 ? ERROR_MESSAGE.PASSWORD_SHORT : null;
