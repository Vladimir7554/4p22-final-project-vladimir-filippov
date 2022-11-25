import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../context";
import {API_URL} from "../views/Catalog/Catalog";
import product from "../views/Product/Product";


const BasketPage = () => {
    const {basketItems, setBasketItems} = useContext(AppContext)
    const totalAmount = basketItems.reduce((total, { amount }) => total += amount, 0)
    const [products, setProducts] = useState([])

 const fetchProducts = () => {
        fetch(API_URL)
            .then((response) => response.json())
            .then ((responseData) => {
                const allProducts = responseData.flowerlist
                const newProducts = []

                allProducts.forEach((product) => {
                    const productInBasket = basketItems.find(( { id }) => id === product.productId)

                    if (productInBasket) {
                        const { amount } = productInBasket
                        newProducts.push({
                            ...product,
                            amount
                        })
                    }
                })
                setProducts(newProducts)
            })
    }

    const onRemoveProductButtonClick = (id) => {
        const newBasketItems = basketItems.filter((basketItem) => basketItem.id !== id)
        const newProducts = products.filter(({ productId }) => productId !== id)

        setBasketItems(newBasketItems)
        setProducts(newProducts)
    }


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            BASKET PAGE
            <div>Total Amount: {totalAmount}</div>
            <ul>
            {products.map((product) => {
              const {
                  category,
                  name,
                  price,
                  productId,
                  amount,
            } = product
               return (
                <li>
                    <button onClick={() => onRemoveProductButtonClick(productId)}>x</button>
                    <img
                    src="https://placekitten.com/146/146"
                    alt={name}
                    width="146"
                    height="146"
                    loading="lazy"
                />
                    <div>{name}</div>
                <div>{category}</div>
                <div>Price: {price} $ x {amount}</div>
                <div>Total: {price * amount} $</div>
                </li>
               )
            })}
            </ul>
        </div>
    )
}

export default BasketPage;