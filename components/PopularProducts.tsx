// React & dependencies
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
} from "@mui/material";
import { FC } from "react";

// Material Components

// My components
import ProductCard from "./ProductCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Product } from "../interfaces/Product";
import { Carousel } from "react-responsive-carousel";
// Queries & Mutations

// Typescript

interface Props {
  products: Product[];
}
const PopularProducts: FC<Props> = ({ products }) => {
  return (
    <Carousel
      autoFocus
      autoPlay
      centerMode
      infiniteLoop
      emulateTouch
      swipeable
      showStatus
      labels={{ leftArrow: "", rightArrow: "", item: "" }}
    >
      {products.map((p) => {
        return <ProductCard key={p.name} product={p} />;
      })}
    </Carousel>
  );
};
export default PopularProducts;
