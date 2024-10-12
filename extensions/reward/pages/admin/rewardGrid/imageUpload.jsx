'use client'

import { useState, useRef } from 'react'

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = (events) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const imageUrl = URL.createObjectURL(file)
      setPreviewUrl(imageUrl)
    }
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files?.[0]
    if (file) {
      setSelectedImage(file)
      const imageUrl = URL.createObjectURL(file)
      setPreviewUrl(imageUrl)
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleUpload = async () => {
    if (!selectedImage) return

    const formData = new FormData()
    formData.append('image', selectedImage)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        console.log('Image uploaded successfully')
        // Aquí puedes agregar lógica adicional después de una carga exitosa
      } else {
        console.error('Failed to upload image')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Media</h2>
      </div>
      <div className="px-6 py-4">
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="max-w-full h-auto" />
          ) : (
            <div className="flex flex-col items-center justify-center h-40">
              <svg
                className="w-12 h-12 text-teal-500 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm text-gray-500">Click or drag and drop to upload an image</p>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageSelect}
            accept="image/*"
            className="hidden"
          />
        </div>
        <button
          onClick={handleUpload}
          className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={!selectedImage}
        >
          Upload Image
        </button>
      </div>
    </div>
  )
}