import type { NextApiRequest, NextApiResponse } from "next";
import ProductDataService from "../../../services/database";

export default function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getProductById(req, res);

    default:
      break;
  }
}

const getProductById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  return res.status(200).json(ProductDataService.getProduct(id));
};
