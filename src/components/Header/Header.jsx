import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import MobileMenu from "./MobileMenu";
import headerLogo from "../../assets/headerlogo.svg";
import mobileLogo from "../../assets/logo.svg";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic colors based on scroll state
  const navLinkColor = scrolled || !isHome ? "#000000" : "#ffffff";

  const navLinks = [
    { name: "About", link: "/about", dropdown: false },
    { name: "Why Modular", link: "/why-module", dropdown: false },
    { name: "Technology", link: "/technology", dropdown: false },
    { name: "Solutions", link: "#", dropdown: true },
    {
      name: "Investor Relations",
      link: "/investor-relations",
      dropdown: false,
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navButtonStyle = {
    fontSize: "16px",
    fontWeight: 400,
    textTransform: "capitalize",
    textDecoration: "none",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
      color: "#e3000f",
    },
  };

  // Mobile Version

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled || !isHome ? "#ffffff" : "transparent",
        transition: "background-color 1s ease",

        ...(isHome
          ? {
              "&:hover": {
                backgroundColor: "#ffffff",
                "& .nav-link": {
                  color: "#000000 !important",
                },
                "& .nav-link:hover": {
                  color: "#e3000f !important",
                },
              },

              "& .nav-link:hover .cta-arrow": {
                transform: "rotate(45deg)",
              },
              transition: "background-color 0.5s ease",
            }
          : {
              "& .nav-link:hover": {
                color: "#e3000f !important",
              },
              "& .nav-link:hover .cta-arrow": {
                transform: "rotate(45deg)",
              },
            }),
      }}
    >
      <Toolbar
        sx={{
          maxWidth: { lg: "1440px", xl: "1900px" },
          width: "100%",
          height: { xs: "70px", md: "74px" },
          mx: "auto",
          px: { sm: 8, xl: 16 },
          py: { xs: 2.5, md: 0 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        {!isMobile && (
          <Box
            component={NavLink}
            to="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={headerLogo}
              alt="Modulex"
              sx={{ height: 30 }}
            />
          </Box>
        )}

        {isMobile && (
          <Box
            component={NavLink}
            to="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={mobileLogo}
              alt="Modulex"
              sx={{ height: 30 }}
            />
          </Box>
        )}

        {/* NAV LINKS */}
        {!isMobile && (
          <Box
            component="nav"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { sm: 3, xl: 5 },
              height: "34px",
            }}
          >
            {navLinks &&
              navLinks.map((item, index) =>
                item && !item.dropdown ? (
                  <NavLink
                    key={index}
                    to={item.link}
                    style={({ isActive }) => ({
                      ...navButtonStyle,
                      color: isActive ? "#e3000f" : navLinkColor,
                    })}
                    className="nav-link"
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <Box
                    key={index}
                    component="span"
                    sx={{
                      ...navButtonStyle,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      columnGap: "4px",
                      color: navLinkColor,
                    }}
                    className="nav-link"
                    onClick={handleOpen}
                  >
                    {item.name}
                    <KeyboardArrowDownIcon />
                  </Box>
                ),
              )}

            {/* Solutions Dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              elevation={2}
            >
              <MenuItem
                component={NavLink}
                to="/solutions/bathroom-pods"
                onClick={handleClose}
              >
                Bathroom Pods
              </MenuItem>

              <MenuItem
                component={NavLink}
                to="/solutions/kitchen-pods"
                onClick={handleClose}
              >
                Kitchen Pods
              </MenuItem>

              <MenuItem
                component={NavLink}
                to="/solutions/retail-pods"
                onClick={handleClose}
              >
                Retail Pods
              </MenuItem>
            </Menu>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              style={({ isActive }) => ({
                color: isActive ? "#e3000f" : navLinkColor,
                marginLeft: "16px",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              })}
            >
              Contact
              {/* CTA Arrow */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ml: "12px",
                  width: 34,
                  height: 34,
                  backgroundColor: "#e3000f",
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: "#e3000f",
                  },
                }}
              >
                <ArrowOutwardIcon
                  className="cta-arrow"
                  fontSize="small"
                  sx={{
                    transition: "transform 0.25s ease",
                    color: "#ffffff",
                  }}
                />
              </Box>
            </NavLink>
          </Box>
        )}

        {/* Mobile menu button */}
        {isMobile && (
          <>
            <IconButton sx={{ p: 0 }} onClick={() => setMobileMenuOpen(true)}>
              <MenuIcon sx={{ fontSize: 34, color: "#e3000f" }} />
            </IconButton>

            <MobileMenu
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
            />
          </>
        )}

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          <Box sx={{ width: 280, pt: 2, px: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Box>

            <List>
              {navLinks.map((item) => (
                <ListItem key={item.name} disablePadding>
                  {!item.dropdown ? (
                    <ListItemButton
                      component={NavLink}
                      to={item.link}
                      onClick={handleDrawerToggle}
                      sx={{
                        color: navLinkColor,
                        py: 1.8,
                        "&.active": { color: "#e3000f", fontWeight: 500 },
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  ) : (
                    <ListItemButton
                      onClick={handleOpen}
                      sx={{ color: navLinkColor, py: 1.8 }}
                    >
                      <ListItemText primary={item.name} />
                      <KeyboardArrowDownIcon sx={{ ml: 1 }} />
                    </ListItemButton>
                  )}
                </ListItem>
              ))}

              <ListItem disablePadding sx={{ mt: 3 }}>
                <ListItemButton
                  component={NavLink}
                  to="/contact"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: navLinkColor,
                    py: 1.8,
                    "&.active": { color: "#e3000f" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItemText primary="Contact" />
                  <ArrowOutwardIcon sx={{ ml: 2, color: "#e3000f" }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
