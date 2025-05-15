import { ERROR_MESSAGE, REG_EXP } from '../constants';

export const validatePostEmail = (value: string) =>
	!REG_EXP.EMAIL.test(value) ? ERROR_MESSAGE.EMAIL : null;
