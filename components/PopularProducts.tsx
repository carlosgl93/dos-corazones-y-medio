// React & dependencies
import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Material Components
import { Box } from "@mui/material";

// My components
import { db } from "../firebase";

import ProductCard from "./ProductCard";

// Queries & Mutations

// Typescript
import { Product } from "../interfaces/Product";

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
      transitionTime={1500}
      interval={3000}
      showStatus={false}
      autoPlay
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
