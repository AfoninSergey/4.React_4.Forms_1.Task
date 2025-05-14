import styles from './module.input.module.css';

export const Input = (props) => (
	<div
		className={`
		${styles.inputWrapper}
		${styles[props.size]}
		${props.nick ? styles.nick : ''}`}
	>
		<label
			className={`
				${styles.label}
				${props.asterisk ? styles.asterisk : ''}`}
			htmlFor={props.id}
		>
			{props.label}
		</label>
		<p className={styles.description}>{props.description}</p>
		<input
			id={props.id}
			type={props.type || 'text'}
			name={props.name}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
			required={props.asterisk}
			className={`
				${styles.input}
				${styles[props.radius]}
				${styles[props.variant]}
				${props.error ? styles.error : ''}`}
		/>
		{props.error && <p className={styles.errorBlock}>{props.error}</p>}
	</div>
);
