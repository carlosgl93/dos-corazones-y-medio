// React & dependencies
import { FC } from 'react';
import { useAuth } from '../context/AuthContext';

// Material Components
import { Box, Typography } from '@mui/material';

// My components
import Loading from '../components/Loading';
import PopularProducts from '../components/PopularProducts';
import ProductsGrid from '../components/ProductsGrid';
import HomeController from '../controllers/HomeController';

// Typescript
const Home: FC = () => {
  const { isLoading, products } = HomeController();

  if (isLoading) {
    <Loading />;
  }
  if (products.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2.5vh 0',
        }}
      >
        <Typography component='h3'>No hay productos</Typography>
      </Box>
    );
  }
  return (
    <div>
      {/* most popular */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2.5vh 0',
        }}
      >
        <Typography component='h3'>Los mas vendidos</Typography>
      </Box>

      <PopularProducts products={products} />

      {/* product grid */}
      <ProductsGrid products={products} />
    </div>
  );
};
export default Home;
