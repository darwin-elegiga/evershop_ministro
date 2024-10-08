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
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">OUR CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">


          
      
       
      {arrayCategories.map(item =>{
        return (   
          
          <div className="relative col-span-1 row-span-2 men-cat imagenContainer" >
          {item.image?.url ? (
            <img className="imagenCategorias" src={item.image.url} alt={item.name} />
          ) : (
           <img className="imagenCategorias" src="/main-banner.jpg" alt="Shop men" /> 
          
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

