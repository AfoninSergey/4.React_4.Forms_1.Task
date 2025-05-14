import type { FormEventHandler,ReactNode } from 'react';
import styles from './module.form.module.css';

export const Form = ({
	onSubmit,
	children
}: {
	onSubmit: FormEventHandler<HTMLFormElement>;
	children: ReactNode;
}) => (
	<form onSubmit={onSubmit} className={styles.form}>
		{children}
	</form>
);
