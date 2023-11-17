// React & dependencies
import { FC, useEffect, useState } from "react";

// Material Components
import { Box, Divider,  Stack, Typography } from "@mui/material";

// My components
import ProductCard from "./ProductCard";
import Loading from "./Loading";

// Queries & Mutations

// Typescript
import { Product } from "../interfaces/Product";

interface Props {
  products: Product[];
}
const ProductsGrid: FC<Props> = ({ products }) => {
  const [shampoo, setShampoo] = useState<Product[] | []>([]);
  const [crema, setCrema] = useState<Product[] | []>([]);
  const [sales, setSales] = useState<Product[] | []>([]);
  const [cuerpo, setCuerpo] = useState<Product[] | []>([]);

  // REMOVE ONCE BACKEND IS IMPLEMENTED AND PRODUCTS WILL BE FETCHED FROM DB!
  console.log(products);
  useEffect(() => {
    products.map((product) => {
      switch (product.category) {
        case "shampoo":
          if (shampoo.length > 3) {
            console.log("dont add more shampoos!");
            return;
          } else {
            setShampoo((prev) => [...prev, product]);
          }
          break;
        case "crema":
          if (crema.length > 3) {
            return;
          } else setCrema((prev) => [...prev, product]);
          break;
        case "sal":
          if (sales.length > 3) {
            return;
          } else setSales((prev) => [...prev, product]);
          break;
        case "cuerpo":
          if (cuerpo.length > 3) {
            return;
          } else setCuerpo((prev) => [...prev, product]);
          break;

        default:
          break;
      }
    });
  }, []);

  return (
    <Box
      sx={{
        paddingX: { xs: '2vw', md: '5vw' },
        marginBottom: '10vh',
      }}
    >
      {shampoo.length > 0 ? (
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'start' },
              paddingLeft: { xs: 0, md: '5vw' },
            }}
          >
            <Typography variant='h6' color='primary' fontWeight='bold'>
              Shampoo
            </Typography>
          </Box>

          {/* shampoo */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, sm: 4, md: 6, lg: 8 }}
          >
            {shampoo.map((shampooProduct) => (
              <ProductCard key={shampooProduct.id} product={shampooProduct} />
            ))}
          </Stack>
        </Box>
      ) : (
        <Loading />
      )}

      {crema.length > 0 ? (
        <Box
          sx={{
            marginTop: { xs: '2vh' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'start' },
              paddingLeft: { xs: 0, md: '5vw' },
            }}
          >
            <Typography variant='h6' color='primary' fontWeight='bold'>
              Cremas
            </Typography>
          </Box>

          {/* cremas */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            {crema.map((cremaProduct) => (
              <ProductCard key={cremaProduct.id} product={cremaProduct} />
            ))}
          </Stack>
        </Box>
      ) : (
        <Loading />
      )}
      {sales.length > 0 ? (
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'start' },
              paddingLeft: { xs: 0, md: '5vw' },
            }}
          >
            <Typography variant='h6' color='primary' fontWeight='bold'>
              Sales
            </Typography>
          </Box>
          {/* sales */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            divider={<Divider orientation='vertical' flexItem />}
          >
            {sales.map((salesProduct) => (
              <ProductCard key={salesProduct.id} product={salesProduct} />
            ))}
          </Stack>
        </Box>
      ) : (
        <Loading />
      )}
      {cuerpo.length > 0 ? (
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'start' },
              paddingLeft: { xs: 0, md: '5vw' },
            }}
          >
            <Typography variant='h6' color='primary' fontWeight='bold'>
              Cuerpo y Rostro
            </Typography>
          </Box>

          {/* cuerpo y rostros */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            divider={<Divider orientation='vertical' flexItem />}
          >
            {cuerpo.map((cuerpoProduct) => (
              <ProductCard key={cuerpoProduct.id} product={cuerpoProduct} />
            ))}
          </Stack>
        </Box>
      ) : (
        <Loading />
      )}
    </Box>
  );
};
export default ProductsGrid;
