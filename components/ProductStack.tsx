// React & dependencies
import { Box, Typography, Stack } from "@mui/material";
import { FC } from "react";

// Material Components

// My components

// Queries & Mutations

// Typescript
import { Product } from "../interfaces/Product";
import ProductCard from "./ProductCard";

interface Props {
  name: string;
  products: Product[];
}
const ProductStack: FC<Props> = ({ name, products }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "start" },
          paddingLeft: { xs: 0, md: "5vw" },
        }}
      >
        <Typography variant="h6" color="primary" fontWeight="bold">
          {name}
        </Typography>
      </Box>

      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 0, md: 2 }}>
        {products.map((productsProduct) => (
          <ProductCard key={productsProduct.id} product={productsProduct} />
        ))}
      </Stack>
    </Box>
  );
};
export default ProductStack;
