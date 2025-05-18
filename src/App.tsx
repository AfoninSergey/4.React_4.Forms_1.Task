import { /* Signin */ Signup } from './pages';
import './App.css';

interface PostData {
	[value: string]: string;
}

function App() {
	function onSubmit(values: PostData) {
		console.log(`formData: ${values}`);
	}

	return (
		<>
			{/* <Signin onSubmit={onSubmit}/> */}
			<Signup onSubmit={onSubmit} />
		</>
	);
}

export default App;
