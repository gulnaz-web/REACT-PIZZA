const NotFound = () => {
   return (
      <div className="error">
         <h1 className="error__title">
            <span>😒</span>
            <br />
            Ничего не найдено
         </h1>
         <p className="error__description">К сожалению данной страницы не существует</p>
      </div>
   );
};
export default NotFound;
