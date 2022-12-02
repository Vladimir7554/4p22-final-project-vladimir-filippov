import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../context";
import {API_URL} from "../views/Catalog/Catalog";
import "./BasketPage.css"
import svg from './console.svg'




const BasketPage = () => {
    const {basketItems, setBasketItems} = useContext(AppContext)
    const totalAmount = basketItems.reduce((total, { amount }) => total += amount, 0)
    const [products, setProducts] = useState([])


    const sendBasketItemsToConsole = () => {
            console.log(products)
    }

 const fetchProducts = () => {
        fetch(API_URL)
            .then((response) => response.json())
            .then ((responseData) => {
                const allProducts = responseData.parts
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
        <div className="basket">
            <div className="basket__form">Всего товаров: {totalAmount}</div>
            <ul>
            {products.map((product) => {
              const {
                  category,
                  name,
                  price,
                  productId,
                  amount,
                  photo,
            } = product
               return (
                <li>
                    <div className="basket__form-card">
                    <button onClick={() => onRemoveProductButtonClick(productId)}>x</button>
                    <img
                    src={photo}
                    alt={name}
                    width="292"
                    height="292"
                    loading="lazy"
                />

                    </div>
                    <div>{name}</div>
                <div>{category}</div>
                <div className="basket__form-card-price">Цена: {price} руб x {amount} шт</div>
                <div className="basket__form-card-amount">Сумма: {price * amount} руб</div>
                    <button className="basket__form-checkout" type="button" onClick={sendBasketItemsToConsole}>
                        <img src={svg} width="22" height="22" />
                        В консоль
                    </button>
                </li>
               )
            })}
            </ul>
        </div>
    )
}

export default BasketPage;