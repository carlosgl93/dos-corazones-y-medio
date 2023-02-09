// React & dependencies
import { FC, useEffect } from "react";
import { db } from "../firebase";

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
      stopOnHover
      transitionTime={1366}
      interval={5000}
      showArrows
      showThumbs={false}
      showIndicators={false}
      labels={{ leftArrow: "Prev", rightArrow: "Next", item: "" }}
    >
      {products.map((p) => {
        return <ProductCard key={p.name} product={p} />;
      })}
    </Carousel>
  );
};
export default PopularProducts;
