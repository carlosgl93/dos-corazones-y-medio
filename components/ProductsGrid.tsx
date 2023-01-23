// React & dependencies
import { FC } from "react";

// Material Components
import { Grid } from "@mui/material";

// My components
import ProductCard from "./ProductCard";

// Queries & Mutations

// Typescript
import { Product } from "../../interfaces/Product";

interface Props {
  products: Product[];
}
const ProductsGrid: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid item key={p.name} xs={4}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductsGrid;
