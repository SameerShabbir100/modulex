import { Box, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CTAButton from "./common/CTAButton";
import { useState } from "react";

export default function ShapcutBox() {
  const [visible, setVisibility] = useState(true);
  const close = () => {
    setVisibility(false);
  };
  return (
    <>
      {visible && (
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            position: "fixed",
            bottom: 5,
            right: 0,
            width: "384px",
            height: "196px",
            zIndex: 50,
            padding: "32px 64px 32px 32px",
            backgroundColor: "oklab(0.999994 0.0000455678 0.0000200868 / 0.5)",
            backdropFilter: "blur(40px)",
            clipPath:
              " polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
          }}
        >
          <Box sx={{ position: "absolute", right: "15px", top: "15px" }}>
            <IconButton
              onClick={close}
              sx={{ display: "inline-flex", p: 0, alignSelf: "flex-end" }}
            >
              <ClearIcon
                sx={{ width: "26px", height: "26px", color: "#000000" }}
              />
            </IconButton>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#000000",
              lineHeight: 1.35,
              mb: 3,
            }}
          >
            Unlock Your <br />
            Project's Potential
          </Typography>
          <CTAButton />
        </Box>
      )}
    </>
  );
}
