
import React, { useCallback, useState,useEffect } from "react";
import MyDropzone from './imageUpload'


const General = () => {
  //cargar la foto desde la base de datos y pasarla por parametros a mmydropson
  return (
      <div className="flex w-full h-56 items-center justify-center">
     <MyDropzone element="logo"/>
     <MyDropzone element="banner"/>
     <ImagePreview imageUrl={'/assets/logo'} />
     <ImagePreview imageUrl={'/assets/banner'} />
     {/* <img src="/assets/logo" alt="" /> */}
    </div>
  );
};

export default General;

export const layout = {
  areaId: 'content',
  sortOrder: 10
}




function ImagePreview({ imageUrl }) {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    const checkImageExists = async () => {
      try {
        const response = await fetch(imageUrl, { method: 'HEAD' });
        if (response.ok) {
          setImageExists(true);
        } else {
          setImageExists(false);
        }
      } catch (error) {
        console.error('Error verificando la imagen:', error);
        setImageExists(false);
      }
    };

    if (imageUrl) {
      checkImageExists();
    }
  }, [imageUrl]);

  return (
    <>
      {imageExists && <img src={imageUrl} alt="Imagen disponible" />}
    </>
  );
}


