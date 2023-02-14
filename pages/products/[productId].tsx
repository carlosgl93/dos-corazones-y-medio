import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Box, Button, Typography } from "@mui/material";
import Loading from "../../components/Loading";
import ProductDetailCarousel from "../../components/ProductDetailCarousel";
import dummyProducts from "../../dummyProducts";
import { Product } from "../../interfaces/Product";
import Image from "next/image";
import ProductPriceCTAs from "../../components/ProductPriceCTAs";
import Reviews from "../../components/Reviews";

type Props = {};

const ProductDetail = (props: Props) => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState<Product | undefined>(
    undefined
  );

  const { productId } = router.query;

  useEffect(() => {
    setProductDetails(dummyProducts.find((p) => p.id === productId));
  }, []);

  if (productDetails) {
    const { name, price, images, description, reviews } = productDetails;

    return (
      <Box>
        <Head>
          <title>{name}</title>
        </Head>
        <main>
          <Box>
            <ProductDetailCarousel images={images} />
            <ProductPriceCTAs price={price} />
            <Box
              style={{
                marginTop: "1rem",
              }}
            >
              <Typography variant="h4">{name}</Typography>

              {description && (
                <Box>
                  {/* PRODUCT DESCRIPTION */}
                  <Typography variant="body1">{description}</Typography>
                </Box>
              )}

              <Reviews reviews={reviews} />
              <Box>
                <Typography variant="h6">Envios</Typography>
                <Typography variant="caption">
                  Enviamos a todo Chile!. Todos los envios son por pagar
                </Typography>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  {/* COURRIER IMAGES */}
                  <Image
                    src="/courriers.png"
                    height={130}
                    width={165}
                    alt="Starken o Chileexpress"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </main>
      </Box>
    );
  } else
    return (
      <Box>
        <Loading />
      </Box>
    );
};

export default ProductDetail;
