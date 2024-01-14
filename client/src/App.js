import { ChakraProvider } from "@chakra-ui/react";
import ProductsScreen from "./screens/ProductsScreen.jsx";
function App() {
	return (
		<ChakraProvider>
			<ProductsScreen />
		</ChakraProvider>
	);
}

export default App;
