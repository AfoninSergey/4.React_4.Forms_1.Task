import styles from './module.input.css';

export const Input = (props) => (
	<button
		className={`
			${styles.button}
			${styles[addClass]}
			${sort === SORTING_ORDER.DESCENDING ? styles.up : ''}
			${sort === SORTING_ORDER.ASCENDING ? styles.down : ''}
			`}
		{...props}
		type={type || 'button'}
	>
		{children}
	</button>
);
