import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const galleryDir = path.join(process.cwd(), "public/images/gallery");
  const topImagesDir = path.join(process.cwd(), "public/images/topImages");

  const topImageFiles = fs.readdirSync(topImagesDir);
  const galleryFiles = fs.readdirSync(galleryDir);

  const topImages = topImageFiles.map((file, index) => ({
    id: `top-${index}`, 
    url: `/images/topImages/${file}`,
    alt: `Top image: ${file}`,  
  }));
  
  const galleryImages = galleryFiles.map((file, index) => ({
    id: `gallery-${index}`,  
    url: `/images/gallery/${file}`,
    alt: `Gallery image: ${file}`,  
  }));

  const allImages = [...topImages, ...galleryImages];

  res.status(200).json(allImages);
}