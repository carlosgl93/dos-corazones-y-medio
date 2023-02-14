// React & dependencies
import { FC } from "react";

// Material Components
import { Box, Typography } from "@mui/material";

import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
// My components

// Queries & Mutations

// Typescript
interface Props {
  reviews: {
    average: number;
    totalRatings: number;
    totalSales: number;
  };
}
const Reviews: FC<Props> = ({ reviews }) => {
  const { average, totalSales, totalRatings } = reviews;

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {average >= 1 ? (
        <StarOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : average > 0 ? (
        <StarHalfOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : (
        <StarOutlineOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      )}
      {average >= 2 ? (
        <StarOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : average > 1 ? (
        <StarHalfOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : (
        <StarOutlineOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      )}
      {average >= 3 ? (
        <StarOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : average > 2 ? (
        <StarHalfOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : (
        <StarOutlineOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      )}
      {average >= 4 ? (
        <StarOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : average > 3 ? (
        <StarHalfOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : (
        <StarOutlineOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      )}
      {average > 4.5 ? (
        <StarOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : average > 4 ? (
        <StarHalfOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      ) : (
        <StarOutlineOutlinedIcon
          sx={{
            color: "#E6C647",
          }}
        />
      )}
      <Typography variant="caption">{average}</Typography>{" "}
      <Box>
        {/* n ratings - total items sold */}
        <Typography variant="caption">{totalRatings} valoraciones </Typography>
        <Typography variant="caption">{totalSales} ventas</Typography>
      </Box>
    </Box>
  );
};
export default Reviews;
