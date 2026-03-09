import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import logo from "./logo.svg";

export default function MobileMenu({ open, onClose }) {
  const [screen, setScreen] = useState("main");

  const solutionsList = [
    { title: "Overview", link: "/solutions/overview" },
    { title: "Pods", link: "/solutions/pods" },
    { title: "Panels", link: "/solutions/panels" },
    { title: "Kits", link: "/solutions/kits" },
    { title: "Steel Framing", link: "/solutions/steel" },
    { title: "Precast", link: "/solutions/precast" },
  ];
  const useCases = [
    { title: "Residential & Clubhouses", link: "/use-cases/residential" },
    { title: "Educational Institutions", link: "/use-cases/educational" },
    {
      title: "Retail, Restaurants, QSRs, Clubs, Clubhouses",
      link: "/use-cases/retail",
    },
    { title: "Hospitals & Clinics", link: "/use-cases/hospitals" },
    {
      title: "Hotels, Co-Living Spaces, Student Accommodations",
      link: "/use-cases/hotels",
    },
    { title: "Corporate Offices", link: "/use-cases/corporate" },
  ];
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 2000,

        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",

        animation: "menuSlide .5s ease",

        "@keyframes menuSlide": {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          bgcolor: "#ffffff",
          px: 2,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component={NavLink}
          to="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box component="img" src={logo} alt="Modulex" sx={{ height: 30 }} />
        </Box>

        <IconButton onClick={onClose} sx={{ p: 0 }}>
          <CloseIcon sx={{ color: "#e3000f", fontSize: 40 }} />
        </IconButton>
      </Box>

      {/* PANEL */}
      <Box
        sx={{
          mx: 2,
          px: 3.5,
          background: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            borderLeft: "1px solid #e5e5e5",
            borderRight: "1px solid #e5e5e5",
            pt: 5,
            pb: 4,
          }}
        >
          {/* MAIN MENU */}
          {screen === "main" && (
            <Box>
              {[
                { name: "About", link: "/about" },
                { name: "Why Modular", link: "/why-module" },
                { name: "Technology", link: "/technology" },
              ].map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    px: 4,
                    py: 1.25,
                    borderBottom: "1px solid #e5e5e5",
                  }}
                >
                  <NavLink
                    to={item.link}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      fontSize: 18,
                      color: isActive ? "#e3000f" : "#101010",
                    })}
                  >
                    {item.name}
                  </NavLink>
                </Box>
              ))}

              {/* SOLUTIONS */}
              <Box
                sx={{
                  px: 4,
                  py: 1.25,
                  borderBottom: "1px solid #e5e5e5",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setScreen("solutions")}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#101010",
                  }}
                >
                  Solutions
                </Typography>

                <KeyboardArrowDownIcon sx={{ color: "#101010" }} />
              </Box>

              {/* INVESTOR */}
              <Box
                sx={{
                  px: 4,
                  py: 1.25,
                }}
              >
                <NavLink
                  to="/investor-relations"
                  style={{
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#111",
                  }}
                >
                  Investor Relations
                </NavLink>
              </Box>
            </Box>
          )}

          {/* SOLUTIONS SCREEN */}
          {screen === "solutions" && (
            <Box>
              <Box
                sx={{
                  px: 2,
                  pb: 1,
                  textAlign: "right",
                  textDecoration: "underline",
                  color: "#e3000f",
                  cursor: "pointer",
                }}
                onClick={() => setScreen("main")}
              >
                back
              </Box>

              {solutionsList &&
                solutionsList.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 4,
                      py: 1,
                      borderBottom: "1px solid #e5e5e5",
                    }}
                  >
                    {/* <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: 600,
                        fontSize: 18,
                        color: item === "Overview" ? "#e3000f" : "#101010",
                      }}
                    >
                      {item.title}
                    </Typography> */}
                    <NavLink
                      to={item.link}
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        fontSize: 18,
                        color: isActive ? "#e3000f" : "#101010",
                      })}
                    >
                      {item.title}
                    </NavLink>
                  </Box>
                ))}

              {/* USE CASES HEADER */}
              <Box
                sx={{
                  px: 4,
                  py: 1.25,
                  // borderBottom: "1px solid #e5e5e5",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#101010",
                  }}
                >
                  Use Cases
                </Typography>

                <ArrowOutwardIcon sx={{ fontSize: 18 }} />
              </Box>

              {/* USE CASES LIST */}

              <Box sx={{ px: 4, pt: 1.2 }}>
                {useCases &&
                  useCases.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.link}
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#101010",
                        marginBottom: "8px",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      {item.title}
                    </NavLink>
                  ))}
              </Box>
            </Box>
          )}

          {/* CONTACT */}
          {screen === "main" && (
            <Box
              component={NavLink}
              to="/contact"
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 1.5,
                px: 4,
                mt: 9,
                textDecoration: "none",
                color: "#111",
              }}
            >
              <Typography sx={{ fontSize: 18 }}>Contact</Typography>

              <Box
                sx={{
                  width: 34,
                  height: 34,
                  background: "#e3000f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowOutwardIcon sx={{ color: "#fff", fontSize: 18 }} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
