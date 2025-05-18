import type { FC, FormEventHandler, ReactNode } from 'react';
import styles from './form.module.css';

interface FormProps {
	onSubmit: FormEventHandler<HTMLFormElement>;
	children: ReactNode;
}

export const Form: FC<FormProps> = ({ onSubmit, children }) => (
	<form onSubmit={onSubmit} className={styles.form}>
		{children}
	</form>
);
