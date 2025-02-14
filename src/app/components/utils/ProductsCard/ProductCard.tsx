import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100 w-full sm:w-[180px] md:w-[200px]">
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={200}
          height={200}
          className="w-full h-28 object-cover"
        />
      </div>
      <div className="p-2 space-y-1 text-center">
        <h3 className="text-xs font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-xs text-gray-600 line-clamp-1">{description}</p>
        <p className="text-sm font-bold text-blue-600">R$ {price.toFixed(2)}</p>
        <div className="flex justify-center">
          <Button asChild variant="outline" className="text-xs h-7 w-full">
            <Link href={`/produto/${id}`}>Ver mais</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
