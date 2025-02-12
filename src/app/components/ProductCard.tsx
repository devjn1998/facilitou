import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import type React from "react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, description, imageUrl }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-sky-100">
      <div className="relative group">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="w-full h-56 sm:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">{name}</h3>
        <h5 className="text-base text-gray-600 line-clamp-2 hover:line-clamp-none transition-all duration-300">{description}</h5>
        <p className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-sky-600 bg-clip-text text-transparent">
          R$ {price.toFixed(2)}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <Button 
            asChild 
            variant="outline" 
            className="w-full sm:w-auto hover:bg-sky-50 hover:text-blue-700 hover:border-sky-300"
          >
            <Link href={`/produto/${id}`}>Ver Detalhes</Link>
          </Button>
          <Button 
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 hover:from-blue-700 hover:via-sky-600 hover:to-blue-600 text-white transform hover:scale-105 transition-all duration-300"
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
