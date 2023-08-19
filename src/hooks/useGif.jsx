import { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
	const [gif, setGif] = useState("");
	const [loading, setLoading] = useState(true);

	async function fetchData() {
		setLoading(true);
		try {
			const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
			const gifUrl = data.data.images.downsized_large.url;
			setGif(gifUrl);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return { gif, loading, fetchData };
};

export default useGif;
