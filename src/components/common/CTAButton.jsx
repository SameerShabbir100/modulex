import { Box, Button, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { NavLink } from "react-router-dom";

export default function CTAButton({
  onClick,
  to = "/",
  label = "Book A Discovery Call",
  sx,
  isIcon = true,
  children,
  handleIconClick,
}) {
  return (
    <>
      <Box
        component={NavLink}
        to={to}
        sx={{
          ...sx,
          display: "inline-flex",
          alignItems: "center",
          columnGap: { xs: 0.5, sm: 0.75 },
          transition: "column-gap 0.25s ease",
          textDecoration: "none",
          cursor: "pointer",

          "&:hover": {
            columnGap: 0,
            "& .cta-arrow": {
              transform: "rotate(45deg)",
            },
          },
        }}
      >
        {/* Text Button */}
        <Button
          onClick={onClick}
          disableElevation
          sx={{
            pointerEvents: "none",
            height: { xs: "44px" },
            backgroundColor: "#e3000f",
            color: "#fff",
            fontSize: { xs: "18px" },
            fontWeight: 400,
            textTransform: "capitalize",
            px: { xs: 3 },
            py: { xs: 1.625, sm: 1.5 },
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "#e3000f",
            },
          }}
        >
          {label}
        </Button>

        {/* Arrow Button */}
        {isIcon && !children && (
          <Box
            onClick={onClick}
            className="cta-icon"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              width: { xs: "44px" },
              height: { xs: "44px" },
              backgroundColor: "#e3000f",
              color: "#fff",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#e3000f",
              },
            }}
          >
            <ArrowOutwardIcon
              className="cta-arrow"
              sx={{
                fontSize: { xs: "18px", sm: "20px" },
                transition: "transform 0.25s ease",
              }}
            />
          </Box>
        )}
      </Box>
      {isIcon && children && (
        <Box
          onClick={handleIconClick}
          className="cta-icon"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            width: { xs: "44px" },
            height: { xs: "44px" },
            backgroundColor: "#e3000f",
            color: "#fff",
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "#e3000f",
            },
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
}
