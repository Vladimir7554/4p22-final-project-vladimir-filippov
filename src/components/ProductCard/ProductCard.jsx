import React, {useEffect, useState, useContext} from 'react';
import "./ProductCard.css"
import {Link} from "react-router-dom"
import svg from './basket.svg'
import AppContext from "../../context";

const ProductCard = (props) => {
    const { basketItems, addToBasket } = useContext(AppContext)


    const onBuyButtonClick = () => {
        addToBasket(id)
    }

    const { id, title, imgSrc, category, description, price = 0, } = props

    const href = `catalog/${id}`

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
                        {price} руб
                    </div>
                    <button className="product-card__buy-button" type="button" onClick={onBuyButtonClick}>
                        <img src={svg} width="22" height="22" />
                      <span>В корзину</span>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard