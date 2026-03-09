import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        "html, body": {
          scrollbarWidth: "thin",
          scrollbarColor: `#e3000f transparent`,
        },

        "& *::-webkit-scrollbar": {
          width: "6px",
          background: "transparent",
        },
        "& *::-webkit-scrollbar-track": {
          background: "transparent",
          border: "none",
        },

        "& *::-webkit-scrollbar-track-piece": {
          background: "transparent",
          border: "none",
          padding: "0 !important",
        },
        "& *::-webkit-scrollbar-thumb": {
          backgroundColor: "#e3000f",
          borderRadius: "0.75rem",
          boxShadow: "none",
          border: "none",
          transition: "background-color 0.3s ease",
        },

        "& ::-webkit-scrollbar-button": {
          display: "none !important",
          width: 0,
          height: 0,
        },

        "& ::-webkit-scrollbar-corner": {
          background: "transparent",
        },

        html: {
          scrollbarGutter: "stable",
        },
      }),
    },
  },
});

export default theme;
