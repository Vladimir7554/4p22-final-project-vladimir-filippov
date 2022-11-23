import React, {useEffect, useState} from 'react'
import './Catalog.css'
import CatalogBody from "../CatalogBody/CatalogBody";
import CatalogFilter from "../CatalogFilter/CatalogFilter";

const defaultCategories = [
    {
        name: 'All',
        id: 'category-0',
    },
    {
        name: 'Birthday gifts',
        id: 'category-1',
    },
    {
        name: 'Toys',
        id: 'category-2',
    },
    {
        name: 'Home plant',
        id: 'category-3',
        isActive: true,
    },
]

const Catalog = () => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] =useState([])
    const [categories, setCategories] = useState(defaultCategories)

    const fetchProducts = () => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((responseData) => {
                const formattedData = responseData.map((data, index) => {
                    const categoryIndex = (index % 3 === 0) ? 3 : (index % 2 === 0) ? 2 : 1
                return {
                    ...data,
                    categoryName: categories[categoryIndex].name,
                    categoryId: categories[categoryIndex].id,
                }})
                setProducts(formattedData)
                setFilteredProducts(formattedData)
    })
}

    useEffect(() => {
        fetchProducts()
    },  [] )

    return (
        <div className="catalog">
            <div>
                <CatalogFilter
                products={products}
                setFilteredProducts={setFilteredProducts}
                categories={categories}
                setCategories={setCategories}
                filteredProducts={filteredProducts}
                />
            </div>
            <div>
                <CatalogBody products={filteredProducts}
                />
            </div>
        </div>
)
 }

 export default Catalog