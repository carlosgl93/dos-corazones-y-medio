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
interface Props {
  images: string[];
}

const ProductDetailCarousel: FC<Props> = ({ images }) => {
  const { innerWidth, innerHeight } = window;

  return (
    images && (
      <>
        <Carousel
          autoFocus
          autoPlay
          centerMode
          infiniteLoop={images.length <= 2 ? false : true}
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
          {images.map((i) => {
            return (
              <Box key={i} style={{ margin: 1 }}>
                <Image
                  src={i}
                  width={
                    images.length <= 1 ? innerWidth * 0.9 : innerWidth * 0.6
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
