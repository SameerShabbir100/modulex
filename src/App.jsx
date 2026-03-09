import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import theme from "../theme";
import MainLayout from "./layouts/MainLayout";
// import ScrollToTop from "./components/common/ScrollToTop";
import HomePage from "./pages/Home";
import About from "./pages/About";
import WhyModular from "./pages/WhyModular";
import Technology from "./pages/Technology";
import InvestorRelations from "./pages/InvestorRelations";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-module" element={<WhyModular />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/investor-relations" element={<InvestorRelations />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/solutions/bathroom-pods"
              element={<div>Bathroom Pods</div>}
            />
            <Route
              path="/solutions/kitchen-pods"
              element={<div>Kitchen Pods</div>}
            />
            <Route
              path="/solutions/retail-pods"
              element={<div>Retail Pods</div>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
