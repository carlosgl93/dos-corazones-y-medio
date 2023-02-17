// React & dependencies
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import router from "next/router";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import { mobile } from "../styles/breakpoints";

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {
  images: string[];
}

const ProductDetailCarousel: FC<Props> = ({ images }) => {
  const mobileLayout = useMediaQuery(mobile);
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
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          labels={{ leftArrow: "Prev", rightArrow: "Next", item: "" }}
        >
          {images.map((i) => {
            return (
              <Box
                key={i}
                sx={{ margin: 1, marginX: mobileLayout ? "1vw" : "5vw" }}
              >
                <Image
                  src={i}
                  width={innerWidth * 0.6}
                  height={mobileLayout ? innerHeight * 0.4 : innerHeight * 0.6}
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
