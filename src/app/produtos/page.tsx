"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MenuList from "../components/utils/MenuList/MenuList";
import ProductCard from "../components/utils/ProductsCard/ProductCard";

const products = [
  {
    id: "1",
    name: "Produto 1",
    price: 99.99,
    description: "item 1",
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "supermercado",
  },
  {
    id: "2",
    name: "Produto 2",
    price: 149.99,
    description: "item 2",
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "supermercado",
  },
  {
    id: "3",
    name: "Produto 3",
    price: 199.99,
    description: "item 3",
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "supermercado",
  },
  {
    id: "4",
    name: "Produto 1",
    price: 99.99,
    description: "item 1",
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "supermercado",
  },
  {
    id: "5",
    name: "Produto 2",
    price: 149.99,
    description: "item 2",
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "supermercado",
  },
  {
    id: "6",
    name: "Produto 3",
    price: 199.99,
    description: "item 3",
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "supermercado",
  },
  {
    id: "6",
    name: "Produto 3",
    price: 199.99,
    description: "item 3",
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "atacadao",
  },
  {
    id: "6",
    name: "Produto 3",
    price: 199.99,
    description: "item 3",
    imageUrl: "/placeholder.svg?height=300&width=300",
    category: "atacadao",
  },
];

export default function ProductsPage() {
  const [category, setCategory] = useState("supermercado");

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    if (!category) return true;
    return product.category === category;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
      <aside className="md:w-64 lg:w-72 p-3 border-b md:border-b-0 md:border-r border-gray-200 bg-white/50 backdrop-blur-sm">
        <MenuList onCategoryChange={handleCategoryChange} />
      </aside>

      <main className="flex-1 p-3 md:p-4 lg:p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 via-sky-600 to-blue-600 bg-clip-text text-transparent"
        >
          Mais vendidos
        </motion.h1>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="flex justify-center"
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
