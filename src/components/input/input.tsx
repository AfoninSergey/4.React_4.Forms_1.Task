import type { ChangeEvent } from 'react';
import styles from './input.module.css';

interface InputProps {
	id: string;
	name: string;
	type?: string;
	label: string;
	description: string;
	placeholder: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	variant: string;
	size: string;
	radius: string;
	error?: string | null;
	asterisk?: boolean;
	icon?: boolean;
}

export const Input = (props: InputProps) => {
	const {
		id,
		label,
		description,
		variant,
		size,
		radius,
		error,
		asterisk,
		icon,
		type = 'text',
		...restProps
	} = props;

	return (
		<div
			className={`
		${styles.inputWrapper}
		${styles[size]}
		${icon ? styles.icon : ''}`}
		>
			<label
				className={`
				${styles.label}
				${asterisk ? styles.asterisk : ''}`}
				htmlFor={id}
			>
				{label}
			</label>
			<p className={styles.description}>{description}</p>
			<input
				id={id}
				type={type}
				required={!!asterisk}
				className={`
				${styles.input}
				${styles[radius]}
				${styles[variant]}
				${error ? styles.error : ''}`}
				{...restProps}
			/>
			{error && <p className={styles.errorBlock}>{error}</p>}
		</div>
	);
};
