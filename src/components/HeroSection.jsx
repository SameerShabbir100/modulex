import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CTAButton from "./common/CTAButton";
import homepageBannerOne from "../assets/homepage-banner-1-scaled.avif";
import homepageBannerTwo from "../assets/homepage-banner-3-scaled.avif";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const initialSlides = [
  {
    image: homepageBannerOne,
    title1: "A New Era of Construction",
    title2: "Begins with Modular 2.0",
  },
  {
    image: homepageBannerTwo,
    title1: "Rethinking construction for a",
    title2: "changing world",
  },
];

export default function HeroSlider({
  isWelcome = true,
  slides = initialSlides,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "100vh", sm: "720px", md: "800px", lg: "953px" },
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="coverflow"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        style={{ height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: "100%",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                px: { sm: 8, xl: 16 },
              }}
            >
              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  height: "50%",
                  marginTop: "auto",
                  backgroundImage:
                    "linear-gradient(in oklab, #00000000 0px, #101010 100%)",
                }}
              />

              {/* Center content */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  px: 2,
                  maxWidth: { lg: "1440px", xl: "1600px" },
                  mx: "auto",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: 36, sm: 48, lg: 60, md: 72 },
                    fontWeight: 500,
                    maxWidth: 1000,
                    lineHeight: { xs: 1.15, sm: 1 },
                  }}
                >
                  {slide.title1}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: 36, sm: 48, lg: 60, md: 72 },
                    fontWeight: 500,
                    maxWidth: 900,
                    lineHeight: { xs: 1.15, sm: 1 },
                  }}
                >
                  {slide.title2}
                </Typography>

                {/* CTA */}
                <CTAButton sx={{ mt: "40px" }} />
              </Box>

              {/* Bottom-left text */}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      {isWelcome && (
        <Box
          sx={{
            position: "relative",
            maxWidth: { lg: "1440px", xl: "1600px" },
            mx: "auto",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box
            component="p"
            sx={{
              position: "absolute",
              left: { xs: 40, sm: 64, xl: 128 },
              bottom: { xs: 40, sm: 80, xl: 130 },
              maxWidth: { sm: 350, lg: 482, xl: 480 },
              zIndex: 2,
              color: "#fff",
              fontSize: { md: 18, lg: 20 },
              opacity: 0.9,
            }}
          >
            Welcome to a new era of building manufacturing. High-precision steel
            modules arrive nearly complete, allowing you to earn revenue months
            sooner.
          </Box>
        </Box>
      )}
    </Box>
  );
}
