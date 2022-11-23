import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import './CatalogFilter.css'
import svg from './filter.svg'

const CatalogFilter = (props) => {
    const {
        products,
        setFilteredProducts,
        categories,
        setCategories,
        filteredProducts,
    } = props
    const [searchQuery, setSearchQuery ] = useState('')
    const onInputChange = ({ target }) => {
        const newSearchQuery = target.value
        const newFilteredProducts = products.filter(( {title} ) => {
            return title.toLowerCase().includes(newSearchQuery.toLowerCase())
        })
        setSearchQuery(newSearchQuery)
        setFilteredProducts(newFilteredProducts)
    }
    const onCategoryButtonClick = (event, categoryId) => {
const newCategories = categories.map((category) => ({
    ...category,
    isActive: category.id === categoryId
}))
        const newFilteredProducts = categoryId === 'category-0'
        ? products
        : products.filter((product) => {
            return product.categoryId === categoryId
        })

        setCategories(newCategories)
        setFilteredProducts(newFilteredProducts)
    }

    return (
        <div className="catalog-filter">
<div className="catalog-filter__title">
    <img src={svg} width="22" height="22" />
    <span>
        Filtering
    </span>
</div>
            <Input
                className="catalog-filter__input"
                placeholder="Search.."
                value={searchQuery}
                onChange={onInputChange}
            />

            <div className="catalog-filter__categories">
                {categories.map(({ id, name, isActive }) => {
                    let classNameFormatted = 'category-filter__category-button'
                    if (isActive) {
                        classNameFormatted += ` is-active`
                    }
                    return (
                        <button
                            key={id}
                            className={classNameFormatted}
                                type="button"
                                onClick={(event) => onCategoryButtonClick(event, id)}

                        >
                            {name}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default CatalogFilter;