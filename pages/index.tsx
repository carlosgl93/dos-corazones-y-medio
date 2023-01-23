// React & dependencies
import { FC } from "react";

// Material Components
import { Box } from "@mui/material";

// My components
import PopularProducts from "../components/PopularProducts";

// Queries & Mutations
import dummyProducts from "../dummyProducts";
import ProductsGrid from "../components/ProductsGrid";
// Typescript
const Home: FC = () => {
  return (
    <div>
      {/* most popular */}
      <PopularProducts products={dummyProducts} />

      {/* product grid */}
      <ProductsGrid products={dummyProducts} />
    </div>
  );
};
export default Home;
