import { Signin } from './components';
import { onSubmit } from './handlers';
import './App.css';

function App() {
	return (
		<>
			<Signin onSubmit={onSubmit}/>
		</>
	);
}

export default App;
