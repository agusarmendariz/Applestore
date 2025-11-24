'use client'

import { useParams } from "next/navigation";
import { IProduct } from "@/interfaces/product.interfaces";
import { useEffect, useState } from "react";
import { getProductById } from "@/services/productServices";
import CardDetail from "@/components/CardDetails";

export default function ProductDetailPage() {
  const params = useParams();
  const [productData, setProductData] = useState<IProduct>();

  const getProductData = async () => {
    const product = await getProductById(params.id as string);
    setProductData(product);
  };

  useEffect(() => {
    getProductData();
  }, []);

  if (!productData) return <div>Cargando...</div>;

  return <CardDetail product={productData} />;
}