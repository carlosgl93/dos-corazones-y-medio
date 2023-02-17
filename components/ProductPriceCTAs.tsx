// React & dependencies
import { FC } from "react";
import { useRouter } from "next/router";

// Material Components
import { Box, Typography, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// My components

// Queries & Mutations

// Typescript
interface Props {
  price: string;
}
const ProductPriceCTAs: FC<Props> = ({ price }) => {
  const router = useRouter();
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
          <Button
            style={{
              fontSize: "0.6rem",
              color: "#A13217",
              opacity: 0.9,
            }}
            endIcon={<ShoppingCartOutlinedIcon />}
            onClick={() => {}}
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
        </Box>
      </Box>
    </Box>
  );
};
export default ProductPriceCTAs;
