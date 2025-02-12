"use client"


import ProductCard from "../components/ProductCard"
import { motion } from "framer-motion"

// Simule dados de produtos (em um projeto real, você buscaria esses dados de uma API)
const products = [
  { id: "1", name: "Produto 1", price: 99.99, description: "item 1", imageUrl: "/placeholder.svg?height=300&width=300" },
  { id: "2", name: "Produto 2", price: 149.99, description: "item 2", imageUrl: "/placeholder.svg?height=300&width=300" },
  { id: "3", name: "Produto 3", price: 199.99, description: "item 3", imageUrl: "/placeholder.svg?height=300&width=300" },
  // Adicione mais produtos conforme necessário
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-800 via-sky-600 to-blue-600 bg-clip-text text-transparent">
          Nossos Produtos
        </h1>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
