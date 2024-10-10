import React from "react";
import PropTypes from 'prop-types';
import './FeaturedCategories.scss'
function FeaturedCategories({ 
  allCategories
}) {

  const arrayCategories= Array.from(allCategories.items)
  console.log(arrayCategories.length)
  console.log(arrayCategories)
 

  return (
    <div className="page-width containerCategoriesSesion">
      <div className="mb-2 mt-3">
        <h2 className="text-center">OUR CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">


          
      
       
      {arrayCategories.map(item =>{
        return (   
          
          <div className="relative col-span-1 row-span-2 men-cat imagenContainer" >
          {item.image?.url ? (
            <img className="imagenCategories" src={item.image.url} alt={item.name} />
          ) : (
            <svg width="100" className="imagenCategories" height="100" viewBox="0 0 251 276" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M62.2402 34.2864L0.329313 68.5728L0.131725 137.524L0 206.538L62.3061 240.95C96.5546 259.858 124.81 275.363 125.139 275.363C125.468 275.363 142.527 266.035 163.142 254.69C183.691 243.282 211.748 227.841 225.448 220.277L250.278 206.538V191.789V176.978L248.829 177.735C247.973 178.176 219.915 193.617 186.457 212.147C152.933 230.677 125.205 245.677 124.81 245.614C124.349 245.488 102.219 233.387 75.5444 218.639L27.0037 191.853V137.65V83.447L48.9359 71.346C60.9229 64.7282 82.9211 52.6271 97.7401 44.4337C112.493 36.2402 124.876 29.5594 125.139 29.5594C125.402 29.5594 142.593 38.9504 163.339 50.4212L223.801 83.447L233.337 78.0776L250.278 68.5728L223.801 54.1397C202.857 42.2908 125.6 -0.0629802 124.941 4.62725e-05C124.546 4.62725e-05 96.2912 15.4415 62.2402 34.2864Z" fill="#BBBBBB"></path><path d="M188.367 102.796C154.514 121.515 126.325 137.019 125.732 137.146C125.073 137.335 108.542 128.511 87.0045 116.662L49.397 95.8632V110.8L49.4628 125.675L86.0166 145.843C106.105 156.936 123.229 166.264 124.085 166.579C125.402 167.02 134.623 162.167 187.445 132.986C221.43 114.141 249.488 98.5734 249.817 98.3213C250.08 98.0691 250.212 91.3253 250.146 83.321L249.949 68.7618L188.367 102.796Z" fill="#BBBBBB"></path><path d="M243.362 126.557C239.74 128.511 211.814 143.953 181.254 160.844C150.694 177.735 125.468 191.537 125.139 191.537C124.81 191.537 107.751 182.21 87.1363 170.865L49.7263 150.192L49.5288 164.688C49.397 175.781 49.5946 179.373 50.1874 179.941C51.4388 181.012 124.349 221.16 125.139 221.16C125.798 221.16 248.763 153.406 249.817 152.524C250.08 152.272 250.212 145.528 250.146 137.461L249.949 122.902L243.362 126.557Z" fill="#BBBBBB"></path></svg>
          
        )}
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href={item.url}>
              {item.name}
          </a>
        </div>)
      })}

      
       










      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};


FeaturedCategories.propTypes = {
  allCategories: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.shape({
          alt: PropTypes.string,
          url: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};


export const query = `
  query {
    allCategories {
      items {
        name
        url
        description
        image {
          alt
          url
        }
      }
    }
  }
`;

