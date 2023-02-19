import { useState } from "react";
import NextLink from "next";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Product } from "../interfaces/Product";
import { mobile } from "../styles/breakpoints";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useRouter } from "next/router";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [temporalProduct, setTemporalProduct] = useState(product);
  const theme = useTheme();
  const mobileLayout = useMediaQuery(mobile);
  const router = useRouter();
  const { id, images, name, price, description, stock } = product;

  return (
    <Card
      onClick={() => router.push(`/products/${id}`)}
      sx={{
        maxWidth: mobileLayout ? "auto" : "30vw",
        marginX: mobileLayout ? "5vw" : "auto",
      }}
    >
      <CardActionArea>
        {stock === 0 && (
          <Chip
            color="primary"
            label="No hay stock disponible"
            sx={{
              position: "absolute",
              zIndex: 99,
              top: "10px",
              left: "10px",
              color: "white",
            }}
          />
        )}

        <CardMedia component="img" height="auto" image={images[0]} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
          <Typography component="h5">$ {price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
