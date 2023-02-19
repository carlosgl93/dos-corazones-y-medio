// React & dependencies
import { FC, useContext } from "react";
import { useRouter } from "next/router";

// Material Components
import { Box, Typography, Button, Chip } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Product } from "../interfaces/Product";

// My components
import { CartContext } from "../context/cart/CartContext";

// Queries & Mutations

// Typescript
interface Props {
  product: Product;
}
const ProductPriceCTAs: FC<Props> = ({ product }) => {
  const { price, stock } = product;
  const { addProductToCart } = useContext(CartContext);

  const router = useRouter();

  const onAddToCart = () => {
    console.log("added to cart");
    addProductToCart(product);
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
            <>
              <Button
                style={{
                  fontSize: "0.6rem",
                  color: "#A13217",
                  opacity: 0.9,
                }}
                endIcon={<ShoppingCartOutlinedIcon />}
                onClick={onAddToCart}
              >
                Agregar
              </Button>
              <Button
                style={{
                  fontSize: "0.6rem",
                  marginLeft: "0.2rem",
                  color: "#A13217",
                  opacity: 0.9,
                }}
                endIcon={<FavoriteBorderOutlinedIcon />}
                onClick={() => router.push("/checkout")}
              >
                Comprar
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default ProductPriceCTAs;
