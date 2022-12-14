import React, {useEffect, useState} from 'react';
import Input from "../../components/Input/Input";
import './CatalogFilter.css'
// import svg from './filter.svg'
import {defaultCategory} from "../Catalog/Catalog";

const CatalogFilter = (props) => {
    const {
        products,
        setFilteredProducts,
        categories,
    } = props

    const [searchQuery, setSearchQuery ] = useState('')
    const [activeCategory, setActiveCategory] = useState(defaultCategory)

    const filter = () => {
        const newFilteredProducts = products.filter(({ name, category }) => {
            const isCategoryTheSame = category === activeCategory
            const isDefaultCategory = activeCategory === defaultCategory
            const nameFormatted = name.toLowerCase()
            const searchQueryFormatted = searchQuery.toLowerCase()
            const isNameIncludesSearchQuery = nameFormatted.includes(searchQueryFormatted)

            return (isCategoryTheSame || isDefaultCategory) && isNameIncludesSearchQuery
        })

        setFilteredProducts(newFilteredProducts)
    }

    const onInputChange = ({ target }) => {
        setSearchQuery(target.value)
    }

    const onCategoryButtonClick = (categoryName) => {
        setActiveCategory(categoryName)
    }


    useEffect(() => {
        filter()
    }, [searchQuery, activeCategory])

    return (
        <div className="catalog-filter">

{/*<div className="catalog-filter__title">*/}
{/*    <img src={svg} width="22" height="22" />*/}
{/*    <span>*/}
{/*        Фильтрация*/}
{/*    </span>*/}
{/*</div>*/}


            <div className="catalog-filter__categories">
                {categories.map((categoryName) => {
                    const isActive = categoryName === activeCategory
                    let classNameFormatted = 'catalog-filter__category-button'
                    if (isActive) {
                        classNameFormatted += ' is-active'
                    }

                    return (
                        <button
                            key={categoryName}
                            className={classNameFormatted}
                            type="button"
                            onClick={() => onCategoryButtonClick(categoryName)}
                        >
                            {categoryName}
                        </button>
                    )
                })}
            </div>

            <Input
                className="catalog-filter__input"
                placeholder="Введите в поле слова для быстрого поиска по названиям моделей"
                value={searchQuery}
                onChange={onInputChange}
            />
        </div>
    );
};

export default CatalogFilter;