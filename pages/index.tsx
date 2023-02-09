// React & dependencies
import { FC, useEffect } from "react";
// Material Components
import { Box } from "@mui/material";

// My components
import PopularProducts from "../components/PopularProducts";
// Queries & Mutations
import dummyProducts from "../dummyProducts";
import ProductsGrid from "../components/ProductsGrid";
import Typography from "@mui/material/Typography";
// Typescript
const Home: FC = () => {
  return (
    <div>
      {/* most popular */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "2.5vh 0",
        }}
      >
        <Typography component="h3">Los mas vendidos</Typography>
      </Box>
      <PopularProducts products={dummyProducts} />

      {/* product grid */}
      <ProductsGrid products={dummyProducts} />
    </div>
  );
};
export default Home;
