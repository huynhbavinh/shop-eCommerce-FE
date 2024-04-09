import { Product } from "../types/product.type";
import rest from "./rest"

export const getTop10SalesProduct = async () => {
    const product = await rest.get<Product>('/products?limit=10');

    return product;
}