import ContentLoader from 'react-content-loader';

const Skeleton = (props) => {
   return (
      <ContentLoader
         speed={2}
         width={280}
         height={456}
         viewBox="0 0 280 456"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
         className="pizza-block"
         {...props}>
         <rect x="0" y="271" rx="8" ry="8" width="275" height="29" />
         <circle cx="133" cy="126" r="126" />
         <rect x="0" y="310" rx="15" ry="15" width="275" height="70" />
         <rect x="0" y="403" rx="8" ry="8" width="91" height="36" />
         <rect x="122" y="403" rx="10" ry="10" width="148" height="36" />
      </ContentLoader>
   );
};
export default Skeleton;
