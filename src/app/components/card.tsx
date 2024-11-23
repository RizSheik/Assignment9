import Image from 'next/image'

interface CardProps {
  imageUrl: string
  alt: string
  title?: string
  description?: string
}

export default function Card({ imageUrl, alt, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 sm:h-56 md:h-64 w-full">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      {(title || description) && (
        <div className="p-4">
          {title && <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>}
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      )}
    </div>
  )
}

