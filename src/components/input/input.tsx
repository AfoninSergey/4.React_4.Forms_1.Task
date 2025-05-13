import styles from './module.input.module.css';

export const Input = (props) => (
	<div className={ `${styles.inputWrapper} ${styles.nick} ${styles.sizeMd}`}>
		<label className={`${styles.label} ${styles.asterisk}`} htmlFor={props.id}>
			{props.label}
		</label>
		<p className={styles.description}>{props.description}</p>
		<input
			id={props.id}
			type={props.type || 'text'}
			name={props.name}
			className={`${styles.input}`}
			placeholder={props.placeholder}
		/>
		{props.error && <p className={styles.error}>{props.error}</p>}
	</div>
);
