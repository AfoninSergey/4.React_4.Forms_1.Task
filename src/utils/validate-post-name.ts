import { ERROR_MESSAGE } from '../constants';

export const validatePostName = (value: string) =>
	value.length < 2 ? ERROR_MESSAGE.LOGIN_SHORT : null;
