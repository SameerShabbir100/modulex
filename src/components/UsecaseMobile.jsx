import { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import hospitalImg from "../assets/useCase-1.avif";
import retailImg from "../assets/QSR-image-Use-Case-section-Homepage.avif";
import educationImg from "../assets/useCase-3.avif";
import residentImg from "../assets/useCase-4.avif";
import hotelsImg from "../assets/useCase-5.avif";
import corporateImg from "../assets/slidethreesolutions.avif";

const data = [
  {
    title: "Hospitals And Clinics",
    image: hospitalImg,
  },
  {
    title: "Retail, Restaurants, QSRs, Clubs, Clubhouses",
    image: retailImg,
  },
  {
    title: "Educational Institutions",
    image: educationImg,
  },
  {
    title: "Residential (Apartments & Villas)",
    image: residentImg,
  },
  {
    title: "Hotels, Co-living Spaces, Student Accommodations, Hostels",
    image: hotelsImg,
  },
  {
    title: "Corporate Offices",
    image: corporateImg,
  },
];

export default function UseCasesMobile() {
  const [active, setActive] = useState(1);

  return (
    <Box sx={{ pt: 6 }}>
      {data.map((item, i) => {
        const open = active === i;

        return (
          <Box
            key={item.title}
            onClick={() => setActive(i)}
            sx={{
              borderBottom: "1px solid",
              borderColor: open ? "#e3000f" : "#e5e5e5",
              pb: 2,
              mb: 2,
              cursor: "pointer",
              transition: "border-color .4s",
            }}
          >
            <Typography
              sx={{
                fontSize: 22,
                fontWeight: 500,
                color: open ? "#111" : "#9e9e9e",
                transition: "color .3s",
              }}
            >
              {item.title}
            </Typography>

            <Box
              sx={{
                overflow: "hidden",
                maxHeight: open ? 600 : 0,
                opacity: open ? 1 : 0,
                transition:
                  "max-height .6s cubic-bezier(.4,0,.2,1), opacity .4s ease",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  mt: 3,
                  maxHeight: 500,
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: 3,
                }}
              >
                <Typography sx={{ fontSize: 18 }}>Know More</Typography>

                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    border: "1px solid #e5e5e5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowOutwardIcon sx={{ color: "#e3000f", fontSize: 18 }} />
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
