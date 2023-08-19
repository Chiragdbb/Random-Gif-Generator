import Random from "./components/Random";
import Tag from "./components/Tag";
import "./index.css";

function App() {
	return (
		<div className="min-w-screen min-h-screen background pb-8">
			<div className="pt-10">
				<h1 className="bg-white mx-auto w-[93vw] h-10 md:h-16 flex justify-center items-center text-xl md:text-3xl font-bold rounded-xl uppercase">
					Random Gifs
				</h1>
			</div>
			<Random />
			<Tag />
		</div>
	);
}

export default App;
