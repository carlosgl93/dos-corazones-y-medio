import { Box } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ProductDetailCarousel from "../../components/ProductDetailCarousel";

import dummyProducts from "../../dummyProducts";
import { Product } from "../../interfaces/Product";

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

  console.log({ productDetails });

  return productDetails ? (
    <Box>
      <Head>
        <title>{productDetails.name}</title>
      </Head>
      <main>
        <Box>
          <ProductDetailCarousel product={productDetails} />
          <h4>{productDetails.name}</h4>
        </Box>
      </main>
    </Box>
  ) : (
    <Box>
      <Loading />
    </Box>
  );
};

export default ProductDetail;
