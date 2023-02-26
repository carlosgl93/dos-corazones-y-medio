import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../interfaces/Product";
import ProductDataService from "../../../services/database";

export default function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getAllProducts(req, res);

    default:
      break;
  }
}

const getAllProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await ProductDataService.getAllProducts();
  const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return res.status(200).json(products);
};
