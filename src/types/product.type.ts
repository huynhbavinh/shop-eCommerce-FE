type Product = {
    "id": string,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": Array<string>,
}

type Products = Array<Product>;

export type {
    Product,
    Products
}