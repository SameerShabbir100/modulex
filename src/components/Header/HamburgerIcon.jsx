import { Box } from "@mui/material";

export default function HamburgerIcon({ color = "#fff", sx, lineSX }) {
  return (
    <Box
      sx={{
        width: 28,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 0.7,
        ...sx,
      }}
    >
      <Box
        sx={{
          height: "2.5px",
          backgroundColor: color,
          transition: "background-color 0.3s ease",
          ...lineSX,
        }}
      />
      <Box
        sx={{
          height: "2.5px",
          backgroundColor: color,
          transition: "background-color 0.3s ease",
          ...lineSX,
        }}
      />
      <Box
        sx={{
          height: "2.5px",
          backgroundColor: color,
          transition: "background-color 0.3s ease",
          ...lineSX,
        }}
      />
    </Box>
  );
}
