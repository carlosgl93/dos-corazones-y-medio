import * as React from "react";
import Head from "next/head";
import MainLayout from '../components/Layout/MainLayout';
import { Box, Typography } from "@mui/material";

const Cuerpo = () => {
  return (
    <>
      <Head>
        <title>Cuerpo y rostro</title>
      </Head>
      <MainLayout>
        <Typography variant='h1'>Cuerpo y rostro </Typography>
      </MainLayout>
    </>
  );
};

export default Cuerpo;
