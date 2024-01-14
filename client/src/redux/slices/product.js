import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	loading: false,
	error: null,
	products: [],
	product: null,
	pagination: {},
	favoritesToggled: true,
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setLoading: (state) => {
			state.loading = true;
		},
		setProducts: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.products = payload;
		},
		setError: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		setPagination: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.pagination = payload;
		},
	},
});

export const { setLoading, setError, setPagination, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
export const productSelector = (state) => state.products;
