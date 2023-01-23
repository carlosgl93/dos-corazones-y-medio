// React & dependencies
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
} from "@mui/material";
import { FC } from "react";

// Material Components

// My components
import ProductCard from "./ProductCard";

// Queries & Mutations

// Typescript
import { Product } from "../interfaces/Product";

interface Props {
  products: Product[];
}
const PopularProducts: FC<Props> = ({ products }) => {
  return (
    <Stack direction="row">
      {products.map((p) => {
        return <ProductCard key={p.name} product={p} />;
      })}
    </Stack>
  );
};
export default PopularProducts;
