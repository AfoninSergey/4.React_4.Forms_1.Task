import { /* Signin */ Signup } from './components';
import { onSubmit } from './handlers';
import './App.css';

function App() {
	return (
		<>
			{/* <Signin onSubmit={onSubmit}/> */}
			<Signup onSubmit={onSubmit}/>
		</>
	);
}

export default App;
