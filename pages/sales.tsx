import { Box, Typography } from "@mui/material";
import Head from 'next/head';
import MainLayout from '../components/Layout/MainLayout';
const Sales = () => {
  return (
    <>
      <Head>
        <title>Sales de bano</title>
      </Head>
      <MainLayout>
        <Typography variant='h1'>Sales de bano</Typography>
      </MainLayout>
    </>
  );
};

export default Sales;
