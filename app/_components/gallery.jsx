'use client'

import * as React from "react"
import { useState, useEffect } from "react"

export default function Gallery() {
    const [galleryImages, setGalleryImages] = useState([]);


    useEffect(() => {
      async function fetchImages() {
        try {
          const res = await fetch("/api/images");
          const data = await res.json();
          setGalleryImages(data); 
        } catch (error) {
          console.error("Failed to fetch gallery images:", error);
        }
      }
      fetchImages();
    }, []);

    return (
      <div className="container mx-auto px-4 h-[800px]">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
          Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryImages.map((galleryImage) => (
            <div key={galleryImage.id} className="bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10">
              <img 
                src={galleryImage.url} 
                alt={galleryImage.alt} 
                className="w-full h-48 object-cover rounded-lg" 
              />
            </div>
          ))}
        </div>
      </div>
    )
}