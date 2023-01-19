import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
	// const [products, setProducts] = useState([]);

	// PRIMERA FORMA DE CARGAR LOS PRODUCTOS
	// useEffect(async () => {
	// 	const response = await axios(API);;
	// 	setProducts(response.data);
	// }, []); // [] -> porque no vamos a escuchar sobre ningun elemento

	// SEGUNDA FORMA DE CARGAR LOS PRODUCTOS
	// React.useEffect(() => {
	// 	async function fetchData() {
	// 		const response = await axios(API);
	// 		setProducts(response.data);
	// 		console.log("Lista de productos",response.data)
	// 	}
	// 	fetchData();
	// 	console.log(products);
	// 	}, [])

	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{
					products.map(product => 
						<ProductItem key={product.id} product={product} />
					)
				}
			</div>
		</section>
	);
}

export default ProductList;