import { setProducts, setLoading, setError, setPagination } from "../slices/product.js";
import axios from "axios";

export const getProducts = (page, favoriteToggle) => async (dispatch) => {
	dispatch(setLoading());
	try {
		const { data } = await axios(`/api/products`);
		const { products, pagination } = data;
		dispatch(setProducts(products));
		dispatch(setPagination(pagination));
	} catch (error) {
		dispatch(
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: "An unexpected error has occurred. Please try again later."
			)
		);
	}
};
