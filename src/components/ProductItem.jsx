import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCartImage from "@icons/bt_add_to_cart.svg";
import iconClose from '@icons/icon_close.png';

const ProductItem = ({ product }) => {

	//const [cart, setCart] = useState([]);

	const { addToCart, removeFromCart } = useContext(AppContext);
	const [addedToCart, setAddedToCart] = useState(false);

	const handleAddToCart = item => {
		console.log("Add to cart");
		// setCart([]);
		addToCart(item);
		setAddedToCart(true);
	};

	const handleRemove = item => {
		console.log("remove to cart");
		removeFromCart(item);
		setAddedToCart(false);
	};

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price} </p>
					<p>{product.title} </p>
				</div>
				{/* <figure onClick={() => handleAddToCart(product)}>
					<img src={addToCartImage} alt="btn Add to Card" />
				</figure> */}

				{
					!addedToCart ?
						<figure onClick={() => handleAddToCart(product)} >
							<img src={addToCartImage} alt="btn Add to Card" />
						</figure>
						:
						<figure onClick={() => handleRemove(product)} >
							<img src={iconClose} alt="" />
						</figure>
				}

			</div>
		</div>
	);
}

export default ProductItem;