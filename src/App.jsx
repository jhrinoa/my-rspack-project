import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Rspack + React</h1>
			<div>
				{Object.keys(window.__coverage__).map((key) => {
					return <div>Path Key: [{key}]</div>
				})}
			</div>
		</div>
	);
}

export default App;
