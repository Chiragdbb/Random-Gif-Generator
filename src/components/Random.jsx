import useGif from "../hooks/useGif";
import Loader from "./Loader";

const Random = () => {
	const { gif, loading, fetchData } = useGif();

	return (
		<div className="mt-6 md:mt-12 mx-auto bg-green-400 flex flex-col gap-y-6 items-center justify-center w-[95%] md:max-w-[700px] h-fit border-2 border-gray-500 rounded-xl p-3 lg:p-6">
			<h2 className="underline text-lg md:text-2xl font-bold uppercase">
				A Random gif
			</h2>
			<div className="max-w-[500px]">
				{loading ? (
					<Loader />
				) : (
					<img className="" src={gif} alt="random gif" width={500} />
				)}
			</div>
			<button
				onClick={() => fetchData()}
				className="uppercase text-sm md:text-base font-semibold py-1 md:py-2 rounded-md w-full md:w-[85%] bg-white bg-opacity-60 hover:bg-opacity-100 transition-color duration-150"
			>
				Generate
			</button>
		</div>
	);
};

export default Random;
