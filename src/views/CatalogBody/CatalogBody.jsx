import React from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";

const CatalogBody = (props) => {
    const  {
        products = []
    } = props

    return (
        <div className="catalog-body">
<ul className="catalog-body__list">
    {products.map(({productId, name, category, instructions, price, photo}) => (
    <li className="catalog-body__item" key={productId}>
        <ProductCard id={productId}
                     title={name}
                     imgSrc={photo}
                     category={category}
                     description={instructions}
                     price={price}
        />
        </li>
    ))}
</ul>
        </div>
    );
};

export default CatalogBody;