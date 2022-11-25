import React, {useContext} from 'react'
import "./ProductCard.css"
import {Link} from "react-router-dom"
import svg from './basket.svg'
import AppContext from "../../context";

const ProductCard = (props) => {
    const { id, title, imgSrc, category, description, price = 0, } = props

    const {
        basketItems,
        setBasketItems, } = useContext(AppContext)

    const href = `catalog/${id}`

    const onBuyButtonClick = () => {
        const existingBasketProductIndex = basketItems.findIndex((basketItem) => basketItem.id === id)
        const isExistInBasket  = existingBasketProductIndex >= 0 && typeof existingBasketProductIndex === 'number'
        let newBasketItems = [...basketItems]

        if (isExistInBasket) {
            newBasketItems[existingBasketProductIndex].amount++
        } else {
            newBasketItems = [...newBasketItems, {
                id,
                amount: 1,
            }]
        }

        setBasketItems(newBasketItems)

    }

    return (
        <article className="product-card">
            <Link className="product-card__image-wrapper" to={href}>
            <img
                 src={imgSrc}
                 alt={title}
                 className="product-card__image"
                 width="250"
                 height="230"
                 loading="lazy"
            />
            </Link>
            <div className="product-card__category-name">{category}</div>
            <div className="product-card__body">
            <Link className="product-card__title" to={href}>{title}</Link>
            <div className="product-card__description" title={description}>{description}</div>
                <div className="product-card__info">
                    <div className="product-card__price">
                        {price}
                    </div>
                    <button className="product-card_buy-button" type="button" onClick={onBuyButtonClick}>
                        <img src={svg} width="22" height="22" />
                      <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard