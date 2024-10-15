
import React, { useCallback, useState } from "react";
import MyDropzone from './imageUpload'


const General = () => {
  //cargar la foto desde la base de datos y pasarla por parametros a mmydropson
  return (
      <div className="flex w-full h-56 items-center justify-center">
      <MyDropzone/> 
      <MyDropzone/> 
    </div>
  );
};

export default General;



export const layout = {
  areaId: 'content',
  sortOrder: 10
}