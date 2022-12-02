import React, {useEffect, useState, useContext} from 'react';
import {useParams} from "react-router";
import {API_URL} from "../views/Catalog/Catalog";
import Product from "../views/Product/Product";
import AppContext from "../context";


const ProductPage = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {
        category,
        price,
        name,
        instructions,
        productId,
        photo,
    } = product

    const fetchProductInfo = () => {
      fetch(API_URL)
          .then((response ) => response.json())
          .then((responseData) => {
              const product = responseData.parts.find(({ productId }) => productId.toString() === id)

              setProduct(product)
              setIsLoading(false)
          })
    }

    useEffect(() => {
        fetchProductInfo()
    }, [])

    if (isLoading)
        return <div>Загрузка...</div>

    return (
   <Product id={productId}
            title={name}
            imgSrc={photo}
            category={category}
            description={instructions}
            price={price}
   />
    );
};

export default ProductPage;