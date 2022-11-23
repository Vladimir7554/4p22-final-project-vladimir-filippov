import React from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";

const CatalogBody = (props) => {
    const  {
        products = []
    } = props

    return (
        <div className="catalog-body">
<ul className="catalog-body__list">
    {products.map(({id, title, thumbnailUrl, categoryName, instructions, price,}) => (
    <li className="catalog-body__item" key={id}>
        <ProductCard id={id}
                     title={title}
                     imgSrc={thumbnailUrl}
                     categoryName={categoryName}
                     description={instructions}
                     price={`${price} $`}
        />
        </li>
    ))}
</ul>
        </div>
    );
};

export default CatalogBody;