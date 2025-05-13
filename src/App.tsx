import { Input } from './components';
import './App.css';

function App() {
	return (
		<>
			<Input
				id="id"
				name="name"
				label="Input label"
				description="Input description"
				placeholder="Input placeholder"
				variant=""
				size=""
				radius=""
				asterisk=""
				error="error"
			/>		
		</>
	);
}

export default App;
