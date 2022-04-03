import React from 'react';

const CategoriesContext = React.createContext({
    categories: null,
    setCategories: () => {},
});

export default CategoriesContext;