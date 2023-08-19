import { useState } from "react";
import Loader from "./Loader";
import useGif from "../hooks/useGif";

const Tag = () => {
	const [tag, setTag] = useState("cute dogs");
	const { gif, loading, fetchData } = useGif(tag);

	return (
		<div className="mt-6 md:mt-12 mx-auto bg-blue-400 flex flex-col gap-y-6 items-center justify-center w-[95%] md:max-w-[700px] h-fit border-2 border-gray-500 rounded-xl p-3 lg:p-6">
			<h2 className="underline text-lg md:text-2xl font-bold uppercase">
				{`Random ${tag} gif`}
			</h2>
			<div className="max-w-[500px]">
				{loading ? (
					<Loader />
				) : (
					<img className="" src={gif} alt="random gif" width={500} />
				)}
			</div>
			<div className="w-full md:w-[85%] mx-auto">
				<input
					onChange={(event) => setTag(event.target.value)}
					className="text-center text-base md:text-lg py-1 md:py-2 rounded-md w-full"
					type="text"
					value={tag}
				/>
				<button
					onClick={() => fetchData()}
					className="mt-[0.7rem] md:mt-4 uppercase text-sm md:text-base font-semibold py-1 md:py-2 rounded-md w-full  bg-white bg-opacity-60 hover:bg-opacity-100 transition-color duration-150"
				>
					Generate
				</button>
			</div>
		</div>
	);
};

export default Tag;
