import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function MyDropzone({ defaultImage }) {
  const [image, setImage] = useState(defaultImage);

  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();

    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = function () {
      setImage(reader.result);
      
      // Aquí puedes llamar a tu endpoint para subir la imagen
      uploadImage(acceptedFiles[0]);
    };
  }, []);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch('/api/upload-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error en la carga de la imagen');
      }

      const result = await response.json();
      console.log('Imagen subida exitosamente:', result);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '15px', margin: '10px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p className="text-sm font-semibold">Arrastra la foto aquí, o haz clic para seleccionar</p>
      {image && (
        <img
          src={image}
          alt="Vista previa"
          style={{ width: '200px', height: '200px', marginTop: '10px' }} // Ajusta el tamaño según tus necesidades
        />
      )}
    </div>
  );
}