const CategoriesItem = ({ category, onClickCategory, classActive }) => {
   return <li className={classActive} onClick={onClickCategory}>{category}</li>;
};
export default CategoriesItem;
