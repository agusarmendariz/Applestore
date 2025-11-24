import {IProduct} from "../interfaces/interfaces";
import { apiURL } from "./config";

export const getProducts= async  () => {
    try {
        const response= await fetch(`${apiURL}/products`,{
            method:"GET",
        
        })
        const products: IProduct[] = await response.json()
        return products
    } catch (error) {
       throw new Error((error as Error).message)
    }
}

export const getProductById = async(id: string) => {
 try{
    const products =  await getProducts()
    const product = products.find((product) => product.id.toString() === id)
    if (!product) throw new Error("Producto no encontrado")
    return product    
 }catch(error){
     throw new Error((error as Error).message)
 }      
 }