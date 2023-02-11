// React & dependencies
import { FC } from "react";

// Material Components
import { CircularProgress } from "@mui/material";
// My components

// Queries & Mutations

// Typescript
interface Props {}
const Loading: FC<Props> = ({}) => {
  return <CircularProgress color="primary" size="large" />;
};
export default Loading;
