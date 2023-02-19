export interface Product {
  id: string;
  name: string;
  price: string;
  images: string[];
  description?: string;
  category: "shampoo" | "crema" | "sal" | "cuerpo";
  reviews: {
    average: number;
    totalRatings: number;
    totalSales: number;
  };
  stock: number;
}
