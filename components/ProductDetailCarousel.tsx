// React & dependencies
import { Box } from "@mui/material";
import Image from "next/image";
import router from "next/router";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";

// Material Components

// My components

// Queries & Mutations

// Typescript
import { Product } from "../interfaces/Product";
interface Props {
  product: Product;
}

const ProductDetailCarousel: FC<Props> = ({ product }) => {
  const { innerWidth, innerHeight } = window;

  return (
    product && (
      <>
        <Carousel
          autoFocus
          centerMode
          emulateTouch
          swipeable
          showStatus
          stopOnHover
          showArrows
          showThumbs={false}
          showIndicators={false}
          labels={{ leftArrow: "Prev", rightArrow: "Next", item: "" }}
        >
          {product.images.map((i) => {
            return (
              <Box key={i}>
                <Image
                  src={i}
                  width={
                    product.images.length <= 1
                      ? innerWidth * 0.9
                      : innerWidth * 0.6
                  }
                  height={innerHeight * 0.4}
                  alt="Product image"
                />
              </Box>
            );
          })}
        </Carousel>
      </>
    )
  );
};
export default ProductDetailCarousel;
