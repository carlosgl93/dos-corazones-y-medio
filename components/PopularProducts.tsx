// React & dependencies
import { FC, useEffect } from "react";
import { useRouter } from "next/router";
// Material Components

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
      autoPlay
      centerMode
      infiniteLoop
      emulateTouch
      swipeable
      stopOnHover
      transitionTime={1366}
      interval={5000}
      showArrows
      showThumbs={false}
      showIndicators={false}
      labels={{ leftArrow: "Prev", rightArrow: "Next", item: "" }}
    >
      {products.map((p) => {
        return (
          <Box key={p.name} onClick={() => router.push(`/products/${p.id}`)}>
            <ProductCard product={p} />
          </Box>
        );
      })}
    </Carousel>
  );
};
export default PopularProducts;
