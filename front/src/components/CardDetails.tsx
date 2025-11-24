'use client'

import { IProduct } from "@/interfaces/interfaces";
import { useAppStore } from "@/context/appContext";
import { toast } from "sonner";



export default function CardDetail({ product }: { product: IProduct }) {
  const { dataUser, cart, setCart } = useAppStore();

  const addToCart = (product: IProduct) => {
    if (dataUser?.token) {
      const productExist = cart.some((item) => item.id === product.id);
      if (productExist) {
        toast('El producto ya se encuentra en el carrito',{
          duration: 1000,
        });
        return;
      }
      setCart([...cart, product]);
      toast.success('Producto agregado al carrito',{
  duration: 1000,
})
    } else {
      toast.error('Por favor inicie sesión',{
        duration: 1000,
      });
    }
  };

  return (

    <div className="flex justify-center items-center px-6 py-12 w-full">
  <div className="flex items-center gap-8 w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    
    <img
      src={product.image}
      alt={product.name}
      className="max-h-[280px] w-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
    />

    <div className="flex flex-col justify-between flex-1">
      <h3 className="text-lg font-semibold text-gray-900 hover:underline cursor-pointer line-clamp-2">
        {product.name}
      </h3>

      <p className="text-xl font-bold text-black mt-1">${product.price}</p>

      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        {product.description}
      </p>

      <button
        className="mt-4 w-full rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black"
        onClick={() => addToCart(product)}
      >
        Agregar al carrito
      </button>
    </div>

  </div>
</div>
  );
}