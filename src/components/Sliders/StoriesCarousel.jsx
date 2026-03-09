import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel({ slides }) {
  return (
    <Box>
      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        slidesPerView={1.35}
        spaceBetween={32}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesOffsetBefore={128}
        slidesOffsetAfter={128}
        className="storiesCarousel"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
          },

          768: {
            slidesPerView: 1.45,
            spaceBetween: 24,
            slidesOffsetBefore: 32,
            slidesOffsetAfter: 32,
          },

          1024: {
            slidesPerView: 1.45,
            spaceBetween: 24,
            slidesOffsetBefore: 48,
            slidesOffsetAfter: 48,
          },
          1440: {
            slidesPerView: 1.45,
            spaceBetween: 32,
            slidesOffsetBefore: 64,
            slidesOffsetAfter: 64,
          },

          1536: {
            slidesPerView: 1.5,
            spaceBetween: 32,
            slidesOffsetBefore: 128,
            slidesOffsetAfter: 128,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="singleSlide">
            <Box
              sx={{
                position: "relative",
                height: { xs: 260, sm: 300, md: 372, lg: 496, xl: 650 },
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                clipPath:
                  " polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
                display: "flex",
                alignItems: "flex-end",
              }}
              className="slideImage"
            >
              {/* Gradient */}
              <Box
                sx={{
                  position: "absolute",
                  height: "50%",
                  marginTop: "auto",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(in oklab, #00000000 0px, #101010 100%)",
                }}
              />

              {/* Text */}
              <Typography
                variant="h2"
                sx={{
                  width: { xs: "268px", md: "300px", lg: "500px", xl: "600px" },
                  zIndex: 1,
                  p: { xs: 2, md: 4, xl: 8 },
                  fontSize: { xs: 16, sm: 20, lg: 30, xl: 40 },
                  fontWeight: 400,
                  color: "#fff",
                  textTransform: "capitalize",
                }}
              >
                {slide.text}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
