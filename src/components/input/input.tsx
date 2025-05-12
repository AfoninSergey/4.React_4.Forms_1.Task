import './input.css';

export const Input = (props) => (
	<div
		style={{
			transform: `scale(${1.2})`,
			transformOrigin: 'center left',
			width: `${100 / 1.2}%`
		}}
	>
		<label className="label asterisk" htmlFor={props.id}>
			{props.label}
		</label>
		<p className="description">{props.description}</p>
		<input
			id={props.id}
			name={props.name}
			className="input"
			placeholder={props.placeholder}
			style={{ borderRadius: '20px'}}
		/>
		{props.error && <p className="error">{props.error}</p>}
	</div>
);
