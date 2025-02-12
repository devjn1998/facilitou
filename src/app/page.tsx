"use client"

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        alert("Login efetuado com sucesso")
      } else {
        alert('Email ou senha inválidos')
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      alert('Erro ao tentar fazer login. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-sky-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-sky-600 to-blue-600 bg-clip-text text-transparent">
              Bem-vindo de volta!
            </h1>
            <p className="text-gray-600 mt-2">Faça login para continuar</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 outline-none"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 hover:from-blue-700 hover:via-sky-600 hover:to-blue-600 text-white transform hover:scale-[1.02] transition-all duration-300"
            >
              Entrar
            </Button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white/80 text-gray-500">Ou continue com</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center"
              >
                <Link 
                  href="/cadastro-usuario"
                  className="block w-full py-3 px-4 rounded-lg border border-sky-200 text-blue-800 hover:bg-sky-50 transition-all duration-300"
                >
                  Criar nova conta
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center"
              >
                <Link 
                  href="/cadastro-estabelecimento"
                  className="block w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-800 via-sky-600 to-blue-600 text-white hover:from-blue-900 hover:via-sky-700 hover:to-blue-700 transition-all duration-300"
                >
                  Cadastrar meu estabelecimento
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
