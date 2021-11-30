import React from 'react'

const CollectionFilter = ({ collectionCategories, categoryFilter, handleCategoryFilter }) => {
    return (
        <div className="collection-filter">
            <ul>
              <li className={categoryFilter == 'All' ? 'active' : ''} onClick={() => handleCategoryFilter("All")}>All</li>
              { collectionCategories.map((category) => (
                <li className={categoryFilter == category.name ? 'active' : ''}
                 onClick={() => handleCategoryFilter(category.name)}>{category.name}</li> )
              )}
            </ul>
        </div>
    )
}

export default CollectionFilter
