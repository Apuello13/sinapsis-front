import { Basic } from "./basic";

export interface Product extends Basic{
    id: number;
    description: string;
    idMark: string;
    idCategory: string;
    price: number;
    dateExpiry: Date;
    taxes: number;
    typeProduct?: any;
    category?: any;
}