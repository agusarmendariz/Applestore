export interface IProduct{
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categoryId: number
}

export interface IUser{
  id:string;
  name:string;
  email:string; 
  address:string;
  phone:string
}

export interface IOrder{
id:number;
status:string;  
date: string;
userId: number;
products:IProduct[]

}

export interface UserData {
    login: boolean;
    token: string;
    user: IUser
}
export interface ProtectedRoutesProps {
  children: React.ReactNode
}