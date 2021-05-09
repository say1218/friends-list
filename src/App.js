import "./App.css";
import CardContent from "./components/CardContent";
import Card from "./styledComponents/Card";

function App() {
	return (
		<div className='App'>
			<Card>
				<div className='card-container'>
					<div className='card-header'>Friends' List</div>

					<CardContent />
				</div>
			</Card>
		</div>
	);
}

export default App;
