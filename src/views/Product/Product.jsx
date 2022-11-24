import React from 'react';

const Product = (props) => {
    const {
        id, title, imgSrc, category, description, price = '0 $',
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
                    <div className="product__price">{price}</div>
                    <div className="product__actions">
                        <button className="product__buy-button" type="button">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;