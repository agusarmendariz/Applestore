'use client'

import { useState, useEffect } from "react"
import { useAppStore } from "@/context/appContext"
import { IProduct } from "@/interfaces/interfaces"
import { createOrders } from "@/services/ordersServices"
import {Trash2} from "lucide-react"
import { toast } from "sonner"

export default function CartProducts() {
    const { cart, setCart, dataUser} = useAppStore(); 
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        let total = 0;
        cart.forEach((product: IProduct) => {
            total += product.price;
        });
        setTotal(total);

    }, [cart]);

     const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = async() => {
    try {
         const productId = cart.map((product:IProduct)=> Number(product.id))
        const response =await createOrders(productId,
        dataUser?.token as string)
        
        if (response){
            toast.success('Orden creada')
            
        }
        setCart([])
    } catch (error) {
        toast.error('Error al crear la orden')
    }
    
  }

    return (
         <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg rounded-xl">
            <h1 className="text-3xl font-bold text-center mb-6">🛒 Tu Carrito</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Tu carrito está vacío</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((product) => (
                        <div 
                            key={product.id} 
                            className="flex justify-between items-center p-4 border rounded-lg hover:shadow-md transition"
                        >
                            <div>
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-gray-600">${product.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                            >
                               <Trash2 />
                            </button>
                        </div>
                    ))}

                    <div className="flex justify-between items-center mt-6 border-t pt-4">
                        <p className="text-xl font-semibold">Total:</p>
                        <p className="text-xl font-bold text-green-600">${total}</p>
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="w-full mt-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Finalizar Compra
                    </button>
                </div>
            )}
        </div>
    );

}
   