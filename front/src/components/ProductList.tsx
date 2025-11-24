'use client'
import { useAppStore } from "@/context/appContext"
import Card from "./Card"
import { IProduct } from "@/interfaces/interfaces"  

function ProductList({products}: {products: IProduct[]}) {
  const {search} = useAppStore();
  const filteredProducts = products.filter((product: IProduct) => product.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="flex gap-10 justify-center items-center flex-wrap my-5 ">
      {filteredProducts.map((product: IProduct) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList;