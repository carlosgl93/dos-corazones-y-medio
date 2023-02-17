// React & dependencies
import { FC, useEffect } from "react";
import { useRouter } from "next/router";
// Material Components
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// My components
import { db } from "../firebase";

import ProductCard from "./ProductCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
// Queries & Mutations

// Typescript
import { Product } from "../interfaces/Product";
import { Box } from "@mui/material";

interface Props {
  products: Product[];
}
const PopularProducts: FC<Props> = ({ products }) => {
  const router = useRouter();

  return (
    <Carousel
      autoFocus
      emulateTouch
      swipeable
      stopOnHover
      transitionTime={1366}
      interval={5000}
      showArrows
      showIndicators
      showStatus={false}
      // renderArrowNext={() => <NavigateNextIcon />}
      // renderArrowPrev={() => <NavigateBeforeIcon />}
    >
      {products.map((p) => {
        return <ProductCard product={p} key={p.name} />;
      })}
    </Carousel>
  );
};
export default PopularProducts;
