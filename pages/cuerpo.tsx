import * as React from "react";
import Head from "next/head";

import { Box, Typography } from "@mui/material";

const Cuerpo = () => {
  return (
    <Box>
      <Head>
        <title>Cuerpo y rostro</title>
      </Head>
      <main>
        <Box>
          <Typography variant="h1">Cuerpo y rostro </Typography>
        </Box>
      </main>
    </Box>
  );
};

export default Cuerpo;
