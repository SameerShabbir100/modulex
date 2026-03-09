import { Box, Typography } from "@mui/material";
import warehouseIcon from "../../assets/warehouse.svg";

export default function Card({
  sx,
  data = {
    icon: warehouseIcon,
    title: "Title",
    subtitle: "Subtitle Title",
  },
}) {
  return (
    <Box
      sx={{
        ...sx,
        position: "relative",
        // minWidth: { lg: "auto", xl: 302 },
        height: { xs: 194, sm: 232, lg: 292, xl: 320 },

        "&::before": {
          content: '""',
          position: "absolute",
          top: "-1px",
          left: "-1px",
          right: "-1px",
          bottom: "-1px",
          background: "#e5e5e5",
          clipPath: {
            xs: "polygon(0px 0px, 100% 0px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0px 100%)",
            sm: "polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
          },
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          p: { xs: 1.25, sm: 3 },
          pb: { xs: 4, sm: 3 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          clipPath: {
            xs: "polygon(0px 0px, 100% 0px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0px 100%)",
            sm: "polygon(0px 0px, 100% 0px, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0px 100%)",
          },
        }}
      >
        <Box
          component="img"
          src={data.icon}
          alt={data.title}
          sx={{
            width: { xs: 40, sm: 60 },
            height: { xs: 40, sm: 60 },
            p: 1,
            objectFit: "contain",
          }}
        />
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 36, sm: 48, xl: 88 },
              color: "#101010",
              mb: 2,
            }}
          >
            {data.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ fontSize: { xs: 14, lg: 20 }, color: "#101010" }}
          >
            {data.subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
