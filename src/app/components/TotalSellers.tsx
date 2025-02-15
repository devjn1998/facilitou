"use client";

import { useEffect, useState } from "react";
import Title from "./Title";

interface Sale {
  id: string;
  amount: number;
  date: string;
  customerName: string;
  status: "completed" | "pending" | "cancelled";
}

const TotalSellers = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implementar chamada à API real
    const fetchSales = async () => {
      try {
        // Simular dados de exemplo
        const mockSales: Sale[] = [
          {
            id: "1",
            amount: 150.0,
            date: "2024-01-15",
            customerName:
              process.env.NEXT_PUBLIC_SHOW_SENSITIVE_DATA === "true"
                ? "João Silva"
                : "*******",
            status: "completed",
          },
          {
            id: "2",
            amount: 299.9,
            date: "2024-01-14",
            customerName:
              process.env.NEXT_PUBLIC_SHOW_SENSITIVE_DATA === "true"
                ? "Maria Santos"
                : "*******",
            status: "completed",
          },
        ];

        setSales(mockSales);
      } catch (error) {
        console.error("Erro ao buscar vendas:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSales();
  }, []);

  const totalAmount = sales.reduce((sum, sale) => sum + sale.amount, 0);

  if (isLoading) {
    return (
      <div className="w-full p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <p className="text-gray-500">Carregando dados de vendas...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md mb-2 border border-gray-200">
      <div className="p-6">
        <Title>Total de Vendas</Title>
        <div className="mb-6">
          <p className="text-3xl font-bold text-sky-600">
            R$ {totalAmount.toFixed(2)}
          </p>
          <p className="text-gray-600">Total acumulado</p>
        </div>

        <div className="space-y-4">
          {sales.map((sale) => (
            <div
              key={sale.id}
              className="p-4 border border-gray-200 rounded-lg hover:bg-sky-50 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">
                    {sale.customerName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {new Date(sale.date).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sky-600">
                    R$ {sale.amount.toFixed(2)}
                  </p>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${
                      sale.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : sale.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {sale.status === "completed"
                      ? "Concluída"
                      : sale.status === "pending"
                      ? "Pendente"
                      : "Cancelada"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSellers;
