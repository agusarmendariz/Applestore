'use client'

import { useEffect, useState } from "react";
import { useAppStore } from "@/context/appContext";
import { getOrdersService } from "@/services/ordersServices";
import { IOrder } from "@/interfaces/interfaces";



export default function DashboardView() {

    const { dataUser } = useAppStore();
    const [orders, setOrders] = useState <IOrder[]>([]);
     //const isPremium = orders.length > 3;
     const isPremium = orders.some(order => order.products.length >= 3);

     const fetchOrders = async () => {
            const response = await getOrdersService(dataUser?.token as string);
            setOrders(response);
            
        }
    useEffect (() => {
       if (dataUser?.token) {
    fetchOrders();
  }
}, [dataUser?.token]);

   return (
    
  <div className="flex justify-center items-start min-h-screen p-6 shadow-lg">
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
      <div className="rounded-2xl shadow-lg p-6 flex-1">
        <div className="flex flex-col items-center md:items-center text-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl font-bold mb-4">
            {dataUser?.user.name?.charAt(0)}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Hola, {dataUser?.user.name}! 👋
          </h2>
        
          <div className="space-y-3 text-left">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {dataUser?.user.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Dirección:</span> {dataUser?.user.address}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Teléfono:</span> {dataUser?.user.phone}
            </p>
          </div>

          <div className="mt-6">
            {isPremium ? (
              <p className="text-green-500">¡Eres un usuario Premium! 🎉</p>
            ) : (
              <p className="text-red-500">No eres un usuario Premium.</p>
            )}
          </div>
        </div>
      </div>

      <div className= "rounded-2xl shadow-lg p-8 flex-1">
        <h3 className="text-lg text-center font-semibold text-gray-800 mb-4">Aquí puedes ver tus órdenes</h3>
        {orders.length > 0 ? (
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {orders.map(order => (
              <div
                key={order.id}
              >
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Orden:</span> {order.id}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Estado:</span> {order.status}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Fecha:</span> {new Date(order.date).toLocaleDateString()} 
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No tienes órdenes aún.</p>
        )}
      </div>
    </div>
  </div>
)
}