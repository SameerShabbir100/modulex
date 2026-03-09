import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, IconButton, Divider, Grid } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import hospitalImg from "../../assets/useCase-1.avif";
import retailImg from "../../assets/QSR-image-Use-Case-section-Homepage.avif";
import educationImg from "../../assets/useCase-3.avif";
import residentImg from "../../assets/useCase-4.avif";
import hotelsImg from "../../assets/useCase-5.avif";
import corporateImg from "../../assets/slidethreesolutions.avif";

const sectors = [
  { title: "Hospitals And Clinics", image: hospitalImg },
  { title: "Retail, Restaurants, QSRs, Clubs, Clubhouses", image: retailImg },
  { title: "Educational Institutions", image: educationImg },
  { title: "Residential (Apartments & Villas)", image: residentImg },
  {
    title: "Hotels, Co-Living Spaces, Student Accommodations, Hostels",
    image: hotelsImg,
  },
  { title: "Corporate Offices", image: corporateImg },
];

export default function SectorShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleSectorClick = (index) => {
    if (index === activeIndex) return;

    // Start fade-out
    setIsFading(true);

    // After fade-out completes → change image + fade-in
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 400); // Must match transition duration in CSS
  };

  return (
    <Grid container>
      <Grid size={6}>
        <Box
          sx={{
            pr: { sm: 3, md: 10, lg: 12 },
            height: "100%",
            maxHeight: { sm: "335px", lg: "100%" },
          }}
        >
          <Box
            component="img"
            src={sectors[activeIndex].image}
            alt={sectors[activeIndex].title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: isFading ? 0.2 : 1,
              transition: "opacity 0.4s ease",
              willChange: "opacity",
            }}
          />
        </Box>
      </Grid>

      <Grid size={6}>
        <Box sx={{ pl: 2 }}>
          {sectors.map((sector, index) => {
            const isActive = index === activeIndex;

            return (
              <Box
                key={sector.title}
                sx={{
                  borderBottom: `1px solid ${isActive ? "#e3000f" : "#bdbdbd"}`,

                  "&:hover": {
                    borderColor: "#e3000f",
                    transition: "border-color 0.7s ease",

                    "& .sectorTitle": {
                      color: "#e3000f",
                      transition: "color 0.7s ease",
                    },
                    "& .arrowOutward": {
                      color: "#e3000f",
                      transition: "color 0.7s ease",
                    },
                  },
                }}
              >
                <Box
                  onClick={() => handleSectorClick(index)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: { sm: 1, md: 1.8, xl: 2.2 },
                    cursor: "pointer",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { sm: 16, md: 18, xl: 20 },
                        fontWeight: 400,
                        color: isActive ? "#e3000f" : "#101010",
                        maxWidth: {
                          sm: "200px",
                          md: "300px",
                          lg: "380px",
                          xl: "100%",
                        },
                      }}
                      className="sectorTitle"
                    >
                      {sector.title}
                    </Typography>
                  </Box>

                  <Box
                    component={NavLink}
                    to="/about"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      columnGap: 2,
                      textDecoration: "none",
                    }}
                  >
                    {isActive && (
                      <Typography
                        sx={{
                          fontSize: { sm: 14, md: 16, lg: 20 },
                          fontWeight: 500,
                          color: "#101010",
                          "&:hover": {
                            color: "#e3000f",
                            transition: "color 0.7s ease",
                          },
                        }}
                      >
                        Know More
                      </Typography>
                    )}

                    <IconButton
                      sx={{
                        border: "0.8px solid #e5e5e5",
                        borderRadius: 0,
                        color: isActive ? "red" : "#777",
                        p: 0.75,
                      }}
                      className="arrowOutward"
                    >
                      <ArrowOutwardIcon
                        sx={{ width: "20px", height: "20px" }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
