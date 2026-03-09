import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { footerLink, policyLink } from "./Footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/Youtube";
import logo from "../../assets/headerlogo.svg";

export default function Footer() {
  const borderColor = "#bdbdbd";
  const quickLinks = [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Investor Relations",
      link: "/investor-relations",
    },
    {
      name: "Technology",
      link: "/technology",
    },
    {
      name: "Solutions",
      link: "/solutions",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <Box
      component="footer"
      sx={{
        pt: { xs: 10 },
        pb: { xs: 5, sm: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: { lg: "1440px", xl: "1600px" },
          borderTop: `0.8px solid ${borderColor}`,
          px: {
            xs: 3.75,
            sm: 4,
            md: 6,
            lg: 8,
            xl: 16,
          },
          mx: "auto",
        }}
      >
        <Grid
          container
          sx={{
            borderLeft: `0.8px solid ${borderColor}`,
            borderRight: `0.8px solid ${borderColor}`,
          }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              px: { sm: 2.5, lg: 5 },
              py: { sm: 3, md: 5 },
              borderRight: { md: `0.8px solid ${borderColor}` },
            }}
          >
            <Grid container columnSpacing={{ lg: 16 }}>
              <Grid
                size={{ xs: 12, sm: 6, md: 5, lg: 6 }}
                sx={{
                  px: { xs: 2, sm: 0 },
                  py: { xs: 5, sm: 0 },
                  borderBottom: {
                    xs: `0.8px solid ${borderColor}`,
                    sm: "none",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#848484",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  Quick Links
                </Typography>
                {quickLinks &&
                  quickLinks.map((item, index) => (
                    <NavLink key={index} to={item.link} className={footerLink}>
                      {item.name}
                    </NavLink>
                  ))}
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 7, lg: 6 }}
                sx={{
                  px: { xs: 2, sm: 0 },
                  py: { xs: 5, sm: 0 },
                  borderBottom: {
                    xs: `0.8px solid ${borderColor}`,
                    sm: "none",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#848484",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  Contact Us
                </Typography>
                <Box
                  component="a"
                  href="tel:+44 (0) 20 7183 3710"
                  className={footerLink}
                >
                  +44 (0) 20 7183 3710
                </Box>
                <Box
                  component="a"
                  href="mailto:enquiries.uk@modulexglobal.com"
                  className={footerLink}
                >
                  enquiries.uk@modulexglobal.com
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ px: { sm: 2.5, lg: 5 }, py: { sm: 3, md: 5 } }}
          >
            <Grid container columnSpacing={{ lg: 12 }}>
              <Grid
                size={{ xs: 12, sm: 6 }}
                sx={{
                  pt: { xs: 5, sm: 0 },
                  pb: { xs: 2, sm: 0 },
                  pl: { xs: 2, sm: 0 },
                  pr: { xs: 2, sm: 5, md: 0 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#848484",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  Head Office
                </Typography>
                <Box
                  component="p"
                  sx={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#101010",
                    mb: 5,
                  }}
                >
                  16 Berkeley Street, Mayfair, London W1J 8DZ, United Kingdom
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#848484",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  Mauritius
                </Typography>
                <Box
                  component="p"
                  sx={{ fontSize: 14, fontWeight: 400, color: "#101010" }}
                >
                  Premier Business Center, 10th Floor, Sterling Tower, 14
                  Poudrière St, Port Louis.
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6 }}
                sx={{
                  px: { xs: 2, sm: 0 },
                  pt: { xs: 2.5, sm: 0 },
                  pb: { xs: 5, sm: 0 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#848484",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  India Factory
                </Typography>
                <Box
                  component="p"
                  sx={{ fontSize: 14, fontWeight: 400, color: "#101010" }}
                >
                  A-82, MIDC Industrial Estate, Indapur, Dist Pune 413132,
                  Maharashtra, India
                </Box>
                <Box
                  component="a"
                  href="tel:+91 2111 299 200"
                  className={footerLink}
                  sx={{ mt: 2, mb: 1 }}
                >
                  +91 2111 299 200
                </Box>
                <Box
                  component="a"
                  href="mailto:enquiries.india@modulex.in"
                  className={footerLink}
                >
                  enquiries.india@modulex.in
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          maxWidth: { lg: "1440px", xl: "1600px" },
          borderTop: `0.8px solid ${borderColor}`,
          borderBottom: `0.8px solid ${borderColor}`,
          px: {
            xs: 3.75,
            sm: 4,
            md: 8,
            xl: 16,
          },
          mx: "auto",
        }}
      >
        <Grid
          container
          sx={{
            borderLeft: `0.8px solid ${borderColor}`,
            borderRight: `0.8px solid ${borderColor}`,
          }}
        >
          <Grid
            size={{ xs: 12, sm: 4, md: 6 }}
            sx={{
              px: { xs: 2, lg: 5 },
              py: { xs: 2, lg: 3 },
              borderRight: { sm: `0.8px solid ${borderColor}` },
              borderBottom: { xs: `0.8px solid ${borderColor}` },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "space-between", sm: "start" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#848484",
                  textTransform: "uppercase",
                  mr: 3,
                }}
              >
                Follow us
              </Typography>
              <Box>
                <LinkedInIcon sx={{ color: "#848484", mr: 2 }} />
                <YoutubeIcon sx={{ color: "#848484" }} />
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 8, md: 6 }}
            sx={{ px: { xs: 2, lg: 5 }, py: { xs: 2, lg: 3 } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: { sm: "center" },
                justifyContent: { sm: "flex-end" },
                flexDirection: { xs: "column", sm: "row" },
                columnGap: { sm: 2, md: 4 },
              }}
            >
              <NavLink to="/privacy-policy" className={policyLink}>
                Privacy Policy
              </NavLink>
              <NavLink to="/cookie-policy" className={policyLink}>
                Cookie Policy
              </NavLink>
              <NavLink to="/terms-and-conditions" className={policyLink}>
                Terms and Conditions
              </NavLink>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          maxWidth: { lg: "1440px", xl: "1600px" },
          px: {
            xs: 5,
            sm: 8,
            xl: 16,
          },
          pt: { xs: 5 },
          mx: "auto",
        }}
      >
        <Grid container rowGap={{ xs: 2.5 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box component="img" src={logo} height={{ xs: 40, sm: 60 }}></Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              component="p"
              sx={{
                fontSize: 12,
                fontWeight: 400,
                color: "#848484",
                lineHeight: 1.3,
                pl: { lg: 13.5 },
              }}
            >
              Modulex is an incubation by Red Ribbon Asset Management Plc, a
              Mainstream Impact Investment company following the principles of
              the"Triple P Bottom Line" of Planet, People and Profit.
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
