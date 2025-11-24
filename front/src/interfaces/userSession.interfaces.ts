export interface IUserSession {
    token: string;
    login?: boolean;
    user:{
        email: string;
        name: string;
        id: string;
        orders:[];
        role: string
        phone: string;
        address: string        
    }
    
}