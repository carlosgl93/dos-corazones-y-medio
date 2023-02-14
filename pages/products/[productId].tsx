import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Box, Button, Typography } from "@mui/material";
import Loading from "../../components/Loading";
import ProductDetailCarousel from "../../components/ProductDetailCarousel";
import dummyProducts from "../../dummyProducts";
import { Product } from "../../interfaces/Product";
import Image from "next/image";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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
    const { name, price, images, description } = productDetails;

    return (
      <Box>
        <Head>
          <title>{name}</title>
        </Head>
        <main>
          <Box>
            <ProductDetailCarousel images={images} />
            <Box style={{ padding: 10 }}>
              {/* PRODUCT DETAILS MAIN CONTAINER */}
              <Box style={{ display: "flex", justifyContent: "space-around" }}>
                {/* price plus CTA CART | BUY */}
                <Box>
                  <Typography variant="h4">${price}</Typography>
                  <Typography
                    variant="caption"
                    style={{ color: "grey", opacity: 0.8, fontSize: "0.5rem" }}
                  >
                    Precio con impuestos incluido.
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  style={{
                    maxWidth: "50%",
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                >
                  <Button
                    style={{
                      fontSize: "0.6rem",
                      color: "#A13217",
                      opacity: 0.9,
                    }}
                    endIcon={<ShoppingCartOutlinedIcon />}
                  >
                    Agregar al carrito
                  </Button>
                  <Button
                    style={{
                      fontSize: "0.6rem",
                      marginLeft: "0.2rem",
                      color: "#A13217",
                      opacity: 0.9,
                    }}
                    endIcon={<FavoriteBorderOutlinedIcon />}
                  >
                    Comprar ahora
                  </Button>
                </Box>
              </Box>
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
                <Box>
                  <Typography variant="h6">Envios</Typography>
                  <Typography variant="caption">
                    Enviamos a todo Chile!. Todos los envios son por pagar
                  </Typography>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    {/* COURRIER IMAGES */}
                    <Image
                      src="/courriers.png"
                      height={120}
                      width={165}
                      alt="Starken o Chileexpress"
                    />
                  </Box>
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
