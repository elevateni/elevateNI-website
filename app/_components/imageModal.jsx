'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ImageModal({ src, alt, onClose }) {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 300)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
      <Card className="relative max-w-2xl max-h-[80vh] w-[90%] bg-black border-gray-800 overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-gray-400 hover:text-white z-10"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <CardContent className="p-0">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[calc(80vh-4rem)] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </CardContent>
      </Card>
    </div>
  )
}

