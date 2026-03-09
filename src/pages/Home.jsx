import { useRef, useState } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";

import HeroSection from "../components/HeroSection";
import ShapcutBox from "../components/ShapcutBox";
import Card from "../components/common/Card";
import CTAButton from "../components/common/CTAButton";
import StoriesCarousel from "../components/Sliders/StoriesCarousel";

import precisionIcon from "../assets/precision_manufacturing.svg";
import clockArrowIcon from "../assets/clock_arrow_up.svg";
import energyProgramIcon from "../assets/energy_program_saving.svg";
import warehouseIcon from "../assets/warehouse.svg";
import impactOne from "../assets/impact-1-icon.svg";
import impactTwo from "../assets/impact-2-icon.svg";
import impactThree from "../assets/impact-3-icon.svg";
import footerBanner from "../assets/homepage-footer-banner-scaled.avif";
import sustainabilityBanner from "../assets/sustainability-building.avif";

import techOne from "../assets/homepage-technology1.avif";
import techTwo from "../assets/Factory-Finished-pods-Technology-section-Homepage-Option-2.avif";
import techThree from "../assets/homepage-technology3.avif";
import solutionOne from "../assets/homepage-solution-1.avif";
import solutionTwo from "../assets/Bathroom-pod-Solution-section-Homepage-1.avif";
import solutionThree from "../assets/homepage-solution-3.avif";

import SectorShowcase from "../components/Sliders/SectorShowcase";
import UseCasesMobile from "../components/UsecaseMobile";

export default function HomePage() {
  const borderColor = "#e5e5e5";
  const swiperRef = useRef(null);

  const cards = [
    {
      icon: precisionIcon,
      title: "90%",
      subtitle: "Built Offsite",
    },
    {
      icon: clockArrowIcon,
      title: "30%",
      subtitle: "Faster Output",
    },
    {
      icon: energyProgramIcon,
      title: "0",
      subtitle: "Carbon Footprint",
    },
    {
      icon: warehouseIcon,
      title: "40+",
      subtitle: "Acre Factory Site",
    },
  ];

  const techSlides = [
    {
      image: techOne,
      text: "Volumetric modules built for rapid site assembly",
    },
    {
      image: techTwo,
      text: "Factory finished bathroom pods with integrated services and interiors",
    },
    {
      image: techThree,
      text: "Engineered for repeatability, speed, and scalability",
    },
  ];

  const solutionSlides = [
    {
      image: solutionOne,
      text: "Utility Pods - Kitchen Pods",
    },
    {
      image: solutionTwo,
      text: "Utility Pods - Bathroom Pods",
    },
    {
      image: solutionThree,
      text: "Retail Pods",
    },
  ];

  const [isMobileCTA, setMobileCTA] = useState(true);
  const handleMobileCTA = () => {
    setMobileCTA(false);
  };

  return (
    <>
      <Box sx={{ position: "relative", width: "100%" }}>
        <HeroSection />

        <Box
          component="p"
          sx={{
            color: "#101010",
            fontSize: { md: 18, lg: 20 },
            px: 2,
            pt: 5,
            display: { xs: "block", sm: "none" },
          }}
        >
          Welcome to a new era of building manufacturing. High-precision steel
          modules arrive nearly complete, allowing you to earn revenue months
          sooner.
        </Box>
        {isMobileCTA && (
          <Box
            sx={{
              position: "fixed",
              right: 0,
              bottom: "50%",
              zIndex: 2,
              rotate: "-90deg",
              transform: "none",
              transformOrigin: "100% 100%",
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              columnGap: 1.5,
            }}
          >
            <CTAButton to="/contact" handleIconClick={handleMobileCTA}>
              <CloseIcon />
            </CTAButton>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          maxWidth: { lg: "1440px", xl: "1900px" },
          mx: "auto",
        }}
      >
        <Box
          component="section"
          sx={{
            px: { xs: 2, sm: 3.75, md: 6, lg: 8, xl: 16 },
            py: { xs: 10, sm: 15, lg: 20 },
            mx: "auto",
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 2 }}
            columnSpacing={{ xs: 2, sm: 2, lg: 4, xl: 4.2 }}
          >
            {cards &&
              cards.map((card, index) => (
                <Grid key={index} size={{ xs: 6, md: 3 }}>
                  <Card key={index} data={card} />
                </Grid>
              ))}
          </Grid>
        </Box>
        <Box
          component="section"
          sx={{
            px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 16 },
            pt: { xs: 10, lg: 15 },
            pb: 10,
            bgcolor: "#f4f4f4",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: 16, lg: 20 },
              fontWeight: 600,
              color: "#e3000f",
              mb: 3,
            }}
          >
            Technology
          </Typography>
          <Grid
            container
            rowSpacing={{ sm: 2 }}
            columnSpacing={{ xs: 1, sm: 2, md: 10, lg: 30 }}
          >
            <Grid size={{ sm: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 32, lg: 48, xl: 54 },
                  fontWeight: 500,
                  lineHeight: { xs: 1.4, xl: 1.2 },
                  color: "#101010",
                  mb: { xs: 4, sm: "5px" },
                }}
              >
                Built With Precision. <br />
                Designed To Scale.
              </Typography>
            </Grid>
            <Grid size={{ sm: 6 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: "#101010",
                  display: { xs: "block", sm: "none" },
                }}
              >
                We use 3D modular construction and Light Gauge Steel Frame
                Technology. Each module is factory-built with structural
                framing, integrated MEP, and pre-finished interiors, ensuring
                minimal on-site disruption.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { sm: 16, lg: 20 },
                  fontWeight: 400,
                  color: "#101010",
                  mb: "5px",
                  display: { xs: "none", sm: "block" },
                }}
              >
                We use 3D modular construction and Light Gauge Steel Frame
                <br />
                Technology. Each module is factory-built with structural
                framing,
                <br />
                integrated MEP, and pre-finished interiors, ensuring minimal
                on-site
                <br />
                disruption.
              </Typography>
              <CTAButton label="Our Technology" sx={{ mt: 4 }} />
            </Grid>
          </Grid>
        </Box>
        <Box
          component="section"
          bgcolor="#f4f4f4"
          sx={{ pb: { xs: 10, lg: 15 } }}
        >
          <StoriesCarousel slides={techSlides} />
        </Box>
        <Box
          component="section"
          sx={{
            px: { sm: "30px", md: 6, lg: 8, xl: 16 },
            mt: { xs: 10, md: 12.5, lg: 20 },
            mb: { xs: 7, lg: 10, xl: 15 },
            borderTop: { sm: `0.8px solid ${borderColor}` },
            borderBottom: { sm: `0.8px solid ${borderColor}` },
          }}
        >
          <Grid container sx={{ px: { xs: 2, sm: 0 } }}>
            <Grid size={{ sm: 5 }}>
              <Box sx={{ py: { sm: 10 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { xs: 16, lg: 20 },
                    fontWeight: 600,
                    color: "#e3000f",
                    mb: 3,
                  }}
                >
                  Solutions
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: 32, sm: 42, md: 48, xl: 54 },
                    fontWeight: 500,
                    lineHeight: { xl: 1.2 },
                    textTransform: "capitalize",
                    color: "#101010",
                    mb: 4,
                    pr: { lg: 20, xl: 15 },
                  }}
                >
                  From bathroom pods to kitchen units, all factory-built.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: 16, lg: 20 },
                    fontWeight: 400,
                    lineHeight: { lg: 1.6 },
                    color: "#101010",
                    pr: 5,
                    mb: 5,
                  }}
                >
                  Whether it's a standalone pod or a full volumetric structure,
                  our solutions are based on pre-engineered steel modules that
                  are durable, fire-safe & compliant with global standards.
                </Typography>
                <CTAButton label="Our Solutions" href="/solutions" />
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
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
                      "&:hover": {
                        bgcolor: "#e3000f",
                        color: "#ffffff",
                        transition: "background-color 0.5s ease",
                      },
                    }}
                    onClick={() => swiperRef.current?.slidePrev()}
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
                      "&:hover": {
                        bgcolor: "#e3000f",
                        color: "#ffffff",
                        transition: "background-color 0.5s ease",
                      },
                    }}
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <ArrowForwardIcon size="small" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid size={1}>
              <Box
                sx={{
                  mx: "auto",
                  height: "100%",
                  width: "1px",
                  bgcolor: borderColor,
                }}
              ></Box>
            </Grid>
            <Grid size={{ sm: 6 }}>
              <Box sx={{ py: { sm: 10 }, pl: { sm: 2 }, pt: { xs: 5 } }}>
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="coverflow"
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  loop
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper; // capture instance
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 32,
                    },
                  }}
                >
                  {solutionSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <Box sx={{ position: "relative" }}>
                        <Box
                          component="img"
                          src={slide.image}
                          sx={{
                            objectFit: "cover",
                            clipPath: {
                              xs: "polygon(0px 0px, 100% 0px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0px 100%)",
                              sm: "polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
                            },
                            minHeight: { lg: "595px", xl: "660px" },
                          }}
                          width="100%"
                          height="100%"
                        ></Box>
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            height: "40%",
                            width: "100%",
                            clipPath: {
                              xs: "polygon(0px 0px, 100% 0px, 100% calc(100% - 35px), calc(100% - 35px) 100%, 0px 100%)",
                              sm: "polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
                            },
                            backgroundImage:
                              "linear-gradient(in oklab, rgba(0, 0, 0, 0) 0px, rgb(16, 16, 16) 100%)",
                          }}
                        ></Box>
                        <Typography
                          sx={{
                            position: "absolute",
                            left: { xs: "24px", sm: "40px" },
                            bottom: { xs: "24px", sm: "40px" },
                            color: "#fff",
                            fontSize: { xs: 18, sm: 20, lg: 24 },
                            fontWeight: 500,
                          }}
                        >
                          {slide.text}
                        </Typography>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  alignItems: "center",
                  columnGap: "10px",
                  mt: 3,
                }}
              >
                <IconButton
                  sx={{
                    p: 1.15,
                    borderRadius: 0,
                    border: `0.8px solid ${borderColor}`,
                    fontSize: 16,
                    color: "#e3000f",
                    "&:hover": {
                      bgcolor: "#e3000f",
                      color: "#ffffff",
                      transition: "background-color 0.5s ease",
                    },
                  }}
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <ArrowBackIcon size="small" />
                </IconButton>
                <IconButton
                  sx={{
                    p: 1.15,
                    borderRadius: 0,
                    border: `0.8px solid ${borderColor}`,
                    fontSize: 16,
                    color: "#e3000f",
                    "&:hover": {
                      bgcolor: "#e3000f",
                      color: "#ffffff",
                      transition: "background-color 0.5s ease",
                    },
                  }}
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <ArrowForwardIcon size="small" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="section"
          sx={{
            px: { xs: 2, sm: 3.75, md: 6, lg: 8, xl: 16 },
            pt: { xs: 10, lg: 15 },
            pb: { sm: 10, xl: 15 },
            bgcolor: "#f4f4f4",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: 16, lg: 20 },
              fontWeight: 600,
              color: "#e3000f",
              mb: 3,
            }}
          >
            Use Cases
          </Typography>
          <Grid
            container
            rowSpacing={{ sm: 2 }}
            sx={{ mb: { sm: 10 }, pb: { xs: 6.5, sm: 0 } }}
          >
            <Grid size={{ sm: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 32, sm: 36, lg: 48, xl: 54 },
                  fontWeight: 500,
                  lineHeight: { xs: 1.4, sm: 1.2 },
                  color: "#101010",
                  mb: "5px",
                  pr: { sm: 10 },
                  textTransform: { xs: "capitalize" },
                }}
              >
                Solving sector challenges at scale.
              </Typography>
            </Grid>
            <Grid size={{ sm: 6 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: 16, lg: 20 },
                  fontWeight: 400,
                  lineHeight: { xs: 1.7, sm: 1.3 },
                  color: "#101010",
                  mb: { sm: "5px" },
                  pt: 2.5,
                  pl: { sm: 2 },
                }}
              >
                Modulex delivers modular pods and structures tailored to the
                needs of high-growth sectors. Our plug-and-play approach enables
                rapid deployment, consistent quality, & scalable design.
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SectorShowcase />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <UseCasesMobile />
          </Box>
        </Box>
        <Box
          component="section"
          sx={{
            px: { xs: 2, sm: 3.75, md: 6, lg: 8, xl: 16 },
            pt: { xs: 7, md: 10, lg: 15 },
            pb: { sm: 7, md: 10 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: 16, lg: 20 },
              fontWeight: 600,
              color: "#e3000f",
              mb: 3,
            }}
          >
            Sustainability & Impact
          </Typography>
          <Grid
            container
            rowSpacing={{ sm: 2 }}
            columnSpacing={{ xs: 1, sm: 2, md: 10, lg: 30 }}
          >
            <Grid size={{ sm: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 32, md: 36, lg: 48, xl: 54 },
                  fontWeight: 500,
                  lineHeight: { xl: 1.2 },
                  color: "#101010",
                  mb: { xs: 4, sm: "5px" },
                }}
              >
                Planet, People, Profit.
              </Typography>
            </Grid>
            <Grid size={{ sm: 6 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: 16, lg: 20 },
                  fontWeight: 400,
                  lineHeight: { xs: 1.3 },
                  color: "#101010",
                  mb: { sm: "5px" },
                }}
              >
                Our modular approach ensures circular, net-zero construction
                meeting ESG goals without sacrificing speed, quality, or ROI.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="section"
          sx={{
            px: { sm: 4, md: 6, lg: 8, xl: 16 },
            mt: { xs: 10, sm: 0 },
            mb: { xs: 4, sm: 0 },
            borderTop: { sm: `0.8px solid ${borderColor}` },
          }}
        >
          <Grid container>
            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                py: { xs: 3, sm: 4.5, md: 8 },
                pr: { md: 4.5 },
                px: { xs: 2 },
                pl: { sm: 0 },
                borderTop: { xs: `0.8px solid ${borderColor}`, sm: "none" },
              }}
            >
              <Box
                component="img"
                src={impactOne}
                alt="impact 1"
                sx={{
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="h4"
                color="black"
                sx={{
                  fontSize: { xs: 24, lg: 30, xl: 32 },
                  fontWeight: 400,
                  lineHeight: { lg: "30px", xl: "32px" },
                  mt: { xs: 4, sm: 8 },
                }}
              >
                Up to 30% reduction in material waste
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                py: { xs: 3, sm: 4.5, md: 8 },
                px: { xs: 2, md: 4.5 },
                borderLeft: { sm: `0.8px solid ${borderColor}` },
                borderRight: { sm: `0.8px solid ${borderColor}` },
                borderTop: { xs: `0.8px solid ${borderColor}`, sm: "none" },
              }}
            >
              <Box
                component="img"
                src={impactTwo}
                alt="impact 1"
                sx={{
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="h4"
                color="black"
                sx={{
                  fontSize: { xs: 24, lg: 30, xl: 32 },
                  fontWeight: 400,
                  lineHeight: { lg: "30px", xl: "32px" },
                  mt: { xs: 4, sm: 8 },
                }}
              >
                Lower site footprint and disruption
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                py: { xs: 4, sm: 4.5, md: 8 },
                pl: { md: 4.5 },
                px: { xs: 2 },
                pr: { sm: 0 },
                borderTop: { xs: `0.8px solid ${borderColor}`, sm: "none" },
              }}
            >
              <Box
                component="img"
                src={impactThree}
                alt="impact 1"
                sx={{
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="h4"
                color="black"
                sx={{
                  fontSize: { xs: 24, lg: 30, xl: 32 },
                  fontWeight: 400,
                  lineHeight: { lg: "30px", xl: "32px" },
                  mt: { xs: 4, sm: 8 },
                }}
              >
                Airtight envelopes cut operational energy by 30%
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="section"
          sx={{ height: { xs: "384px", sm: "488px", lg: "652px" } }}
        >
          <Box
            component="img"
            src={sustainabilityBanner}
            width="100%"
            height="100%"
            sx={{
              objectFit: "cover",
            }}
          />
        </Box>
        <Box component="section">
          <Box
            sx={{
              backgroundImage: `url(${footerBanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: { xs: "573px", sm: "515px", lg: "647px", xl: "650px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(8, 8, 8, 0.75) 100%)",
              }}
            >
              <Typography
                variant="h2"
                color="white"
                sx={{
                  textTransform: "capitalize",
                  fontSize: { xs: 36, sm: 48 },
                  fontWeight: 500,
                  mb: 4,
                  px: { xs: 3, sm: 0 },
                }}
                align="center"
              >
                Unlock your project's potential
              </Typography>
              <Typography
                variant="body2"
                color="white"
                sx={{
                  fontSize: { xs: 16, sm: 18 },
                  fontWeight: 400,
                  lineHeight: { xs: 1.7, sm: 1.3 },
                  maxWidth: "500px",
                  px: { xs: 2, sm: 0 },
                }}
                align="center"
              >
                Share your project details with a timeline, and we will return a
                customised programme, cost and ROI model within a week.
              </Typography>
              {/* <Typography
                variant="body2"
                color="white"
                sx={{
                  fontSize: 18,
                  fontWeight: 400,
                }}
                align="center"
              >
                a customised programme, cost and ROI model within a week.
              </Typography> */}
              <CTAButton sx={{ mt: 5 }}></CTAButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <ShapcutBox />
    </>
  );
}
