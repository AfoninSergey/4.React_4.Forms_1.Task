import styles from './module.form.module.css';

export const Form = ({ onSubmit, children }) => (
	<form onSubmit={onSubmit} className={styles.form}>
		{children}
	</form>
);
