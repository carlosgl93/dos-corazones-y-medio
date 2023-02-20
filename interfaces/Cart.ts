export default interface CartProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  category: "shampoo" | "crema" | "sal" | "cuerpo";
  quantity: number;
  stock: number;
}
