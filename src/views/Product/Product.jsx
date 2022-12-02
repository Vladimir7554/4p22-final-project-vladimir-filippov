import React, {useEffect, useState, useContext} from 'react';
import AppContext from "../../context";
import "./Product.css"


const Product = (props) => {

    const { addToBasket } = useContext(AppContext)

    const onBuyButtonClick = () => {
        addToBasket(id)
    }

    const {
        id, title, imgSrc, category, description, price = 0,
    } = props

    return (
        <div className="product">
            <img
                className="product__image"
                src={imgSrc}
                alt={title}
                width="356"
                height="326"
                loading="lazy"
                 />
            <div className="product__body">
                <h1 className="product__title">{title}</h1>
                <div className="product__description">{description}</div>
                <div className="product__info">
                    <div className="product__price">{price} Руб</div>
                    <div className="product__actions">
                        <button className="product__buy-button" type="button" onClick={onBuyButtonClick}>В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;