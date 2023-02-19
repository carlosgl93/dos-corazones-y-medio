import { Product } from "./interfaces/Product";
const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Regala amor",
    price: "15.990",
    images: ["/p1.jpg", "/p1.jpg"],
    description: "Hermosos aros color azules y bordado dorado.",
    category: "shampoo",
    reviews: {
      average: 5,
      totalRatings: 22,
      totalSales: 45,
    },
    stock: 0,
  },
  {
    id: "5",
    name: "Regala amor",
    price: "15.990",
    images: ["/p1.jpg", "/p1.jpg"],
    description: "Hermosos aros color azules y bordado dorado.",
    category: "shampoo",
    reviews: {
      average: 5,
      totalRatings: 22,
      totalSales: 45,
    },
    stock: 3,
  },
  {
    id: "2",
    name: "Brilla",
    price: "15.990",
    images: ["/p2.jpeg", "/p2.jpeg"],
    category: "crema",
    reviews: {
      average: 3.5,
      totalRatings: 3,
      totalSales: 10,
    },
    stock: 3,
  },
  {
    id: "55",
    name: "Brilla",
    price: "15.990",
    images: ["/p2.jpeg", "/p2.jpeg"],
    category: "crema",
    reviews: {
      average: 3.5,
      totalRatings: 3,
      totalSales: 10,
    },
    stock: 3,
  },
  {
    id: "3",
    name: "Look natural",
    price: "15.990",
    images: ["/p3.jpeg", "/p3.jpeg"],
    category: "cuerpo",
    reviews: {
      average: 4,
      totalRatings: 10,
      totalSales: 24,
    },
    stock: 3,
  },
  {
    id: "11",
    name: "Look natural",
    price: "15.990",
    images: ["/p3.jpeg", "/p3.jpeg"],
    category: "cuerpo",
    reviews: {
      average: 4,
      totalRatings: 10,
      totalSales: 24,
    },
    stock: 3,
  },

  {
    id: "4",
    name: "Look natural",
    price: "15.990",
    images: ["/p3.jpeg", "/p3.jpeg"],
    category: "sal",
    reviews: {
      average: 4,
      totalRatings: 10,
      totalSales: 24,
    },
    stock: 3,
  },
  {
    id: "15",
    name: "Look natural",
    price: "15.990",
    images: ["/p3.jpeg", "/p3.jpeg"],
    category: "sal",
    reviews: {
      average: 4,
      totalRatings: 10,
      totalSales: 24,
    },
    stock: 3,
  },
];

export default dummyProducts;
