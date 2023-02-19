export default interface CartProduct {
  id: string;
  name: string;
  price: string;
  images: string;
  category: "shampoo" | "crema" | "sal" | "cuerpo";
  quantity: number;
}
