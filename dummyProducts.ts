import { Product } from "./interfaces/Product";
const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Regala amor",
    price: "15.990",
    images: ["/p1.jpg", "/p1.jpg"],
    description: "Hermosos aros color azules y bordado dorado.",
    reviews: {
      average: 5,
      totalRatings: 22,
      totalSales: 45,
    },
  },
  {
    id: "2",
    name: "Brilla",
    price: "15.990",
    images: ["/p2.jpeg", "/p2.jpeg"],
    reviews: {
      average: 3.5,
      totalRatings: 3,
      totalSales: 10,
    },
  },
  {
    id: "3",
    name: "Look natural",
    price: "15.990",
    images: ["/p3.jpeg", "/p3.jpeg"],
    reviews: {
      average: 4,
      totalRatings: 10,
      totalSales: 24,
    },
  },
];

export default dummyProducts;
