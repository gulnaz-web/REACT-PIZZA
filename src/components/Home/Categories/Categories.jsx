import React from 'react';
import CategoriesItem from './CategoriesItem';
import { categories } from './data';
import { useDispatch, useSelector } from 'react-redux';
import { handleCategory } from '../../../redux/slices/filterSlice';

const Categories = () => {
   const activeCategoryId = useSelector((state) => state.filters.categoryId);
   const dispatch = useDispatch();

   return (
      <div className="categories">
         <ul>
            {categories.map((category, index) => (
               <CategoriesItem
                  category={category}
                  key={category}
                  classActive={activeCategoryId === index ? 'active' : 0}
                  onClickCategory={() => {
                     dispatch(handleCategory(index));
                  }}
               />
            ))}
         </ul>
      </div>
   );
};
export default Categories;
