export interface Product {
  id: string;
  name: string;
  price: string;
  images: string[];
  description?: string;
  reviews: {
    average: number;
    totalRatings: number;
    totalSales: number;
  };
}
