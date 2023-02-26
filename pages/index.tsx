// React & dependencies
import { FC, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

// Material Components
import { Box, Typography } from "@mui/material";

// My components
import PopularProducts from "../components/PopularProducts";
import ProductsGrid from "../components/ProductsGrid";

// Queries & Mutations
import dummyProducts from "../dummyProducts";
import ProductDataService from "../services/database";
// import { Product } from "../interfaces/Product";
// import { useProducts } from "../hooks/useProducts";
import Loading from "../components/Loading";
import MainLayout from "../components/Layout/MainLayout";
// Typescript
const Home: FC = () => {
  // const { products, isLoading, isError } = useProducts("/products");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const data = await ProductDataService.getAllProducts();

    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);
  };
  return (
    <MainLayout>
      {isLoading ? (
        <Loading />
      ) : (
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

          <PopularProducts products={products} />

          {/* product grid */}
          <ProductsGrid products={dummyProducts} />
        </div>
      )}
    </MainLayout>
  );
};
export default Home;
