'use client'

import Link from "next/link";
import {IProduct} from "../interfaces/interfaces";


export default function CardProduct({ product }: { product: IProduct }) {
  return (
    
    <div className="py-4 w-[300px] h-[350px] rounded-xl border border-gray-200 bg-gray-50  p-4 shadow-md transition hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
      <div className="block h-[250px] w-full  rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-2">
        
          <h3 className="text-base font-medium text-gray-900 group-hover:underline">
            {product.name}
          </h3>
        <p className="text-xl font-semibold text-black">${product.price}</p>

      </div>
      </Link>
    </div>
  );
}











