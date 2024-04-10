import { Products } from "../types/product.type";
import rest from "./rest"

export const getTop10SalesProduct = async () => {
    const product = await rest.get<Products>('/products?limit=8');

    return product;
}