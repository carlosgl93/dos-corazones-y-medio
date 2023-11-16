// React & dependencies
import { FC, useContext, useState } from "react";
import Image from "next/image";

import { mobile } from "../styles/breakpoints";

// Material Components
import {
  Badge,
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { RemoveCircleOutlined, AddCircleOutlined } from "@mui/icons-material";

// My components
import { CartContext } from "../context";
import theme from "../styles/theme";
import MainLayout from '../components/Layout/MainLayout';
// Queries & Mutations

// Typescript

const Cart: FC = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const { cart } = useContext(CartContext);
  const mobileLayout = useMediaQuery(mobile);
  console.log('cart', cart);

  return (
    <MainLayout>
      {cart.length > 0 ? (
        cart.map((p) => {
          return (
            <Box
              key={p.id}
              // display={'flex'}
              // justifyContent='left'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: '1.5vh',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  width='20%'
                  height='20%'
                  style={{
                    borderRadius: '10px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  pl: '3vw',
                }}
              >
                <Box>
                  <Typography variant='body1'>{p.name}</Typography>
                </Box>
                <Box sx={{ flex: 1 }}></Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography variant='body1'>${p.price}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <IconButton
                      onClick={() => {
                        if (p.quantity === 1) {
                          // TODO: dispatch remove item from cart
                        }
                      }}
                    >
                      <RemoveCircleOutlined
                        sx={{
                          color: theme.palette.primary.main,
                        }}
                      />
                    </IconButton>
                    <Typography variant='caption'>{p.quantity}</Typography>
                    <IconButton
                      disabled={p.quantity < p.stock ? false : true}
                      onClick={() => {
                        if (p.quantity === p.stock) return;
                        // TODO: dispatch add +1 to already in cart item
                      }}
                    >
                      <AddCircleOutlined
                        sx={{
                          color: theme.palette.primary.main,
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })
      ) : (
        <Box>
          <Typography variant='h6'>
            Aun no has agregado productos al carrito
          </Typography>
        </Box>
      )}
      {cart.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant='h6'>
              Total: $ {}
              {/* {cart.map((p) => {
                let productTotal =
                  parseInt(p.price.replace(".", "")) * p.quantity;
                setCartTotal((prev) => prev + productTotal);
              })} */}
            </Typography>
          </Box>
          <Box>
            <Button>Pagar</Button>
          </Box>
        </Box>
      )}
    </MainLayout>
  );
};
export default Cart;
