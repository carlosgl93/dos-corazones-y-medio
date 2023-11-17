import { useContext, useEffect, useState } from 'react';
import ProductDataService from '../services/database';
import { ProductsContext } from '../context/products';

const HomeController = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<any>([]);
  const { loadInitialProducts } = useContext(ProductsContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    loadInitialProducts(products);
  }, [products]);

  const getAllProducts = async () => {
    const data = await ProductDataService.getAllProducts();
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);
  };

  return {
    isLoading,
    products,
  };
};

export default HomeController;
