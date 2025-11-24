import { apiURL } from "./config";

export const createOrders = async (products: number[], token: string) =>{
    try {
        const res = await fetch (`${apiURL}/orders`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({products})
        })
        const data= await res.json()
        return data
    } catch (error) {
        throw new Error ((error as Error).message)
    }
}

export const getOrdersService= async ( token: string) =>{
    try {
        const res = await fetch (`${apiURL}/users/orders`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: token
            }
        })
        const data= await res.json()
        return data
    } catch (error) {
        throw new Error ((error as Error).message)
    }
}