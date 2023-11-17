import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Typography, useMediaQuery } from '@mui/material';
import dummyProducts from '../../dummyProducts';

import Loading from '../../components/Loading';
import ProductDetailCarousel from '../../components/ProductDetailCarousel';
import { Product } from '../../interfaces/Product';
import ProductPriceCTAs from '../../components/ProductPriceCTAs';
import Reviews from '../../components/Reviews';
import { mobile } from '../../styles/breakpoints';
import MainLayout from '../../components/Layout/MainLayout';
import { ProductsContext } from '../../context/products';

type Props = {};

const ProductDetail = (props: Props) => {
  const mobileLayout = useMediaQuery(mobile);
  const router = useRouter();

  const { productId } = router.query;
  const { products } = useContext(ProductsContext);

  const thisProduct = products.find((p) => p.id === productId);
  console.log(thisProduct);

  if (!thisProduct) {
    // TODO FETCH PRODUCT FROM DB
    // IN THE MEAN TIME WE REDIRECT
    router.push('/');
  } else {
    const { name, price, images, description, reviews, stock } = thisProduct;

    return (
      <Box>
        <Head>
          <title>{name}</title>
        </Head>
        <Box
          sx={{
            paddingX: mobileLayout ? '0vw' : '20vw',
          }}
        >
          <ProductDetailCarousel images={images} />
          <ProductPriceCTAs product={thisProduct} />
          <Box
            sx={{
              marginTop: '1rem',
              marginX: '2vw',
            }}
          >
            <Typography variant='h4'>{name}</Typography>

            {description && (
              <Box>
                {/* PRODUCT DESCRIPTION */}
                <Typography variant='body1'>{description}</Typography>
              </Box>
            )}

            <Reviews reviews={reviews} />
            <Box>
              <Typography variant='h6'>Envios</Typography>
              <Typography variant='caption'>
                Enviamos a todo Chile!. Todos los envios son por pagar
              </Typography>
              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                {/* COURRIER IMAGES */}
                <Image
                  src='/courriers.png'
                  height={130}
                  width={165}
                  alt='Starken o Chileexpress'
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default ProductDetail;
