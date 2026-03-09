import { Box, IconButton } from "@mui/material";
import { useSwiper } from "swiper/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SwiperNavigation() {
  const swiper = useSwiper();

  if (!swiper) {
    return null;
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
          mt: 7.5,
        }}
      >
        <IconButton
          sx={{
            p: 1.25,
            borderRadius: 0,
            border: `0.8px solid ${borderColor}`,
            fontSize: 20,
            color: "#e3000f",
          }}
          onClick={() => swiper.slidePrev()}
        >
          <ArrowBackIcon size="small" />
        </IconButton>
        <IconButton
          sx={{
            p: 1.25,
            borderRadius: 0,
            border: `0.8px solid ${borderColor}`,
            fontSize: 20,
            color: "#e3000f",
          }}
          onClick={() => swiper.slideNext()}
        >
          <ArrowForwardIcon size="small" />
        </IconButton>
      </Box>
    </>
  );
}
