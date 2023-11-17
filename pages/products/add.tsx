// React & dependencies

import { FC, FormEvent, useEffect, useState } from "react";

// Material Components
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Input,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// My components
import AdminLayout from "../../components/Layout/AdminLayout";
import { mobile } from "../../styles/breakpoints";
// Queries & Mutations
import ProductDataService from "../../services/database";
// Typescript
interface Props {}
const AddProduct: FC<Props> = ({}) => {
  const mobileLayout = useMediaQuery(mobile);

  const theme = useTheme();

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [category, setCategory] = useState<string>("shampoo");
  const [images, setImages] = useState<HTMLInputElement["files"] | null>();

  useEffect(() => {
    console.log(name, description, price, stock, category, images);
  }, [name, description, price, stock, category, images]);

  const createProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createdProduct = {
      name,
      description,
      price,
      stock,
      category,
      images,
    };
    ProductDataService.addProduct(createdProduct);
  };

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mt: '2rem' }}>
        <Typography variant='h3' color='primary'>
          Agregar nuevo producto
        </Typography>
      </Box>

      <Paper elevation={1} sx={{ padding: '2.5rem', my: '3rem' }}>
        <form onSubmit={createProduct}>
          <Box
            sx={{
              display: mobileLayout ? 'column' : 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant='h6'>Nombre del producto</Typography>
            <TextField
              required
              type='text'
              sx={{ flex: 1, ml: mobileLayout ? 0 : '3rem' }}
              helperText='Ingresa un nombre para el producto'
              variant='filled'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: mobileLayout ? 'column' : 'flex',
              mt: '1.5rem',
              alignItems: 'center',
            }}
          >
            <Typography variant='h6'>Descripcion del producto</Typography>
            <TextField
              required
              type='text'
              sx={{ flex: 1, ml: mobileLayout ? 0 : '3rem', mt: '1.5rem' }}
              helperText='Ingresa una descripcion para el producto'
              variant='filled'
              multiline
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Box>
          <Box
            sx={{
              display: mobileLayout ? 'column' : 'flex',
              mt: '1.5rem',
              alignItems: 'center',
            }}
          >
            <Typography variant='h6'>Imagenes</Typography>

            <input
              style={{
                marginLeft: '3rem',
              }}
              type='file'
              accept='image/png, image/jpg, image/jpeg'
              onChange={(e) => setImages(e.target.files)}
              multiple
            />
          </Box>
          <Box
            sx={{
              display: mobileLayout ? 'column' : 'flex',
              mt: '1.5rem',
              justifyContent: mobileLayout ? 'center' : 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant='h6'>Precio del producto</Typography>
              <TextField
                required
                type='number'
                helperText='Ingresa un precio para el producto'
                variant='filled'
                onChange={(e) => setPrice(parseInt(e.target.value))}
                value={price}
                defaultValue={0}
              />
            </Box>
            <Box>
              <Typography variant='h6'>Stock del producto</Typography>
              <TextField
                required
                type='number'
                helperText='Ingresa un stock para el producto'
                variant='filled'
                onChange={(e) => setStock(parseInt(e.target.value))}
                value={stock}
                defaultValue={0}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: mobileLayout ? 'column' : 'flex',
              mt: '1.5rem',
              alignItems: 'center',
            }}
          >
            <Typography variant='h6'>Categoria del producto</Typography>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='radio-buttons-group'
              sx={{
                ml: mobileLayout ? 0 : '3rem',
              }}
              row
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <FormControlLabel
                value='shampoo'
                control={<Radio />}
                label='Shampoo'
              />
              <FormControlLabel
                value='sal'
                control={<Radio />}
                label='Sales de bano'
              />
              <FormControlLabel
                value='cremas'
                control={<Radio />}
                label='Crema'
              />

              <FormControlLabel
                value='cuerpo'
                control={<Radio />}
                label='Cuerpo y rostro'
              />
            </RadioGroup>
          </Box>
          <Box display='flex' justifyContent={'center'}>
            <Button type='submit'>Crear</Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};
export default AddProduct;
