import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { hadleFilters } from '../redux/slices/filterSlice';
// components
import Categories from '../components/Home/Categories/Categories';
import PizzaBlock from '../components/Home/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Home/PizzaBlock/Skeleton';
import Sort, { sortList } from '../components/Home/Sort/Sort';

const URL = 'https://6474f4317de100807b1bfd4f.mockapi.io';

const Home = ({ searchValue }) => {
   const navigate = useNavigate();

   const { categoryId, sortType } = useSelector((state) => state.filters);
   const dispatch = useDispatch();

   const [items, setItems] = useState(null);
   const isSearch = useRef(false);
   const isMounted = useRef(false);

   const fectchPizzas = useCallback(() => {
      setItems(null);
      const category = categoryId ? `category=${categoryId}` : '';
      const sort = `&sortBy=${sortType.sortProperty}&order=desc`;
      const search = searchValue ? `&search=${searchValue}` : '';

      axios.get(`${URL}/items?${category}${sort}${search}`).then((res) => {
         setItems(res?.data);
      });
   }, [categoryId, searchValue, sortType.sortProperty]);

   useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            sortProperty: sortType.sortProperty,
            categoryId,
         });

         navigate(`?${queryString}`);
      }

      isMounted.current = true;
   }, [categoryId, navigate, sortType]);

   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

         dispatch(
            hadleFilters({
               ...params,
               sort,
            }),
         );

         isSearch.current = true;
      }
   }, [dispatch]);

   // запрос на сервер для получения items
   useEffect(() => {
      window.scrollTo(0, 0);

      if (!isSearch.current) {
         fectchPizzas();
      }

      isSearch.current = false;
   }, [fectchPizzas]);

   const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
   const pizzas = items?.map((pizza) => <PizzaBlock pizza={pizza} key={pizza.id} />);

   return (
      <>
         <div className="content__top">
            <Categories />
            <Sort />
         </div>

         <h2 className="content__title">Все пиццы</h2>

         <div className="content__items">{items ? pizzas : skeletons}</div>
      </>
   );
};
export default Home;
