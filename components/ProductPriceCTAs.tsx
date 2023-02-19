// React & dependencies
import { FC, useContext, useState } from "react";
import { useRouter } from "next/router";

// Material Components
import {
  Box,
  Typography,
  Button,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  AddCircleOutlined,
  RemoveCircleOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Product } from "../interfaces/Product";

// My components
import { CartContext } from "../context/cart/CartContext";
import { mobile } from "../styles/breakpoints";

// Queries & Mutations

// Typescript
interface Props {
  product: Product;
}
const ProductPriceCTAs: FC<Props> = ({ product }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const theme = useTheme();
  const { price, stock } = product;
  const { addProductToCart } = useContext(CartContext);

  const router = useRouter();

  const onAddToCart = () => {
    const productToCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      quantity: itemQuantity,
    };

    addProductToCart(productToCart);
  };

  return (
    <Box style={{ padding: 10 }}>
      {/* PRODUCT DETAILS MAIN CONTAINER */}
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        {/* price plus CTA CART | BUY */}
        <Box>
          <Typography variant="h4">${price}</Typography>
          <Typography
            variant="caption"
            style={{ color: "grey", opacity: 0.8, fontSize: "0.5rem" }}
          >
            Precio con impuestos incluido.
          </Typography>
        </Box>

        <Box
          display="flex"
          style={{
            maxWidth: "50%",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          {stock === 0 ? (
            <Button disabled color="secondary">
              No hay stock disponible
            </Button>
          ) : (
            <Box>
              <Box>
                <Typography variant="body1">Cantidad</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    disabled={itemQuantity === 1 ? true : false}
                    onClick={() => setItemQuantity(itemQuantity - 1)}
                  >
                    <RemoveCircleOutlined
                      sx={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  </IconButton>
                  <Typography variant="caption">{itemQuantity}</Typography>
                  <IconButton
                    disabled={itemQuantity < stock ? false : true}
                    onClick={() => setItemQuantity(itemQuantity + 1)}
                  >
                    <AddCircleOutlined
                      sx={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Button
                style={{
                  fontSize: "0.6rem",
                  color: theme.palette.primary.contrastText,
                  opacity: 0.9,
                }}
                endIcon={<ShoppingCartOutlined />}
                onClick={onAddToCart}
              >
                Agregar
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default ProductPriceCTAs;
