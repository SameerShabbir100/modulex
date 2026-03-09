import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ sx }) {
  return (
    <>
      <Header />

      <Box component="main" sx={{ ...sx }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
