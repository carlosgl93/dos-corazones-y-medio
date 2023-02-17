import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  useMediaQuery,
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
  const mobileLayout = useMediaQuery(mobile);
  const router = useRouter();
  const { id, images, name, price, description } = product;

  return (
    <Card
      onClick={() => router.push(`/products/${id}`)}
      sx={{
        maxWidth: mobileLayout ? "auto" : "30vw",
        marginX: mobileLayout ? "5vw" : "auto",
        marginBottom: "10vh",
      }}
    >
      <CardActionArea>
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
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
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
      </CardActions>
    </Card>
  );
};

export default ProductCard;
