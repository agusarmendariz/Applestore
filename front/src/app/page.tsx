
import  {getProducts}  from "../services/productServices";
import ProductList from "../components/ProductList";


export default async function Home() {
const dataProducts = await getProducts();
  // const dataProducts: IProduct[] = await getProducts();


  return (
    
    <ProductList products={dataProducts} />
   
  );
}