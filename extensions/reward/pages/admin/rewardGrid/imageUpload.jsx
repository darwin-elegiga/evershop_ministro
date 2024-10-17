import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './imageUpload.scss';

export default function MyDropzone({ defaultImages = [],element='' }) {
  const [images, setImages] = useState(defaultImages); // Almacenamos las imágenes del producto
  const [uploading, setUploading] = useState(false);




  // Lógica para cargar las imágenes arrastradas
  const onDrop = useCallback((acceptedFiles) => {
    if (images.length >= 2) {
      alert('Solo puedes subir dos imágenes.');
      return;
    }

    const reader = new FileReader();
    const newImage = acceptedFiles[0]; 

    reader.readAsDataURL(newImage);
    reader.onload = function () {
      setImages((prev) => [...prev, { preview: reader.result }]); 

      
      uploadImage(newImage);
      console.log(newImage)
    };
  }, [images]);

  // Función para subir la imagen usando la misma lógica del primer código
  const uploadImage = async (file) => {
    setUploading(true);
    const formData = new FormData();
    const targetPath = `${element}`;

    
    
    formData.append('images', file);
    formData.append('targetPath', targetPath);

    try {
      const response = await fetch(`/api/images/${targetPath}`, {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      });

      if (!response.ok) {
        throw new Error('Error en la carga de la imagen');
      }

      const result = await response.json();
      console.log('Imagen subida exitosamente:', result);
      // Actualizamos la imagen con la respuesta del servidor
      setImages((prev) =>
        prev.map((img) => (img.preview === file ? { ...img, url: result.data.files[0].url } : img))
      );
      if (!result.error && result.data && result.data.files.length > 0) {
        console.log('Imagen subida exitosamente:', result.data.files);
        setImages((prev) =>
          prev.map((img) =>
            img.preview === file
              ? { ...img, url: result.data.files[0].url }
              : img
          )
        );
        alert('Imagen subida correctamente');
      } else {
        throw new Error(result.error.message || 'Error desconocido en la subida');
      }
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    } finally {
      setUploading(false);
    }

    
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="image-upload-container">
      {images.length < 2 && (
        <div className="divImagenes" {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '15px', margin: '10px', textAlign: 'center' }}>
          <input {...getInputProps()} />
          <p className="text-sm font-semibold">Arrastra la foto aquí, o haz clic para seleccionar</p>
        </div>
      )}

      <div className="uploaded-images">
        {images.map((image, index) => (
          <div key={index} className="image-preview">
            <img
              src={image.url || image.preview}
              alt={`Preview ${index + 1}`}
              style={{ width: '200px', height: '200px', marginTop: '10px' }}
            />
            <button onClick={() => removeImage(index)} className="remove-image-btn">
              Eliminar
            </button>
          </div>
        ))}
      </div>
      
      {uploading && <p>Cargando imagen...</p>}
    </div>
  );
}



