import React, {useEffect, useState} from 'react'
import './Catalog.css'
import CatalogBody from "../CatalogBody/CatalogBody";
import CatalogFilter from "../CatalogFilter/CatalogFilter";

export const API_URL = 'https://raw.githubusercontent.com/SoraMaruyama/flowerAPI/master/flowers.json'
export const defaultCategory = 'All'

const Catalog = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([defaultCategory])

    const getCategoriesFromProducts = (products) => {
        const allCategoryNames = products.map(({ category }) => category)
        const uniqueCategoryNames = new Set(allCategoryNames)

        return Array.from(uniqueCategoryNames)
    }

    const fetchProducts = () => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((response) => {
                const newProducts = response.flowerlist.map((product) => ({
                    ...product,
                    imgSrc: 'https://placekitten.com/250/230'
                }))
                const newCategories = getCategoriesFromProducts(newProducts)

                setProducts(newProducts)
                setFilteredProducts(newProducts)
                setCategories([...categories, ...newCategories])
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="catalog">
            <CatalogFilter
                className="catalog__filter"
                products={products}
                filteredProducts={filteredProducts}
                setFilteredProducts={setFilteredProducts}
                categories={categories}
            />
            <CatalogBody className="catalog__body" products={filteredProducts}/>
        </div>
    )
}

export default Catalog
