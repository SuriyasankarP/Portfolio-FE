import { Box, Typography } from "@mui/material";

export default function SectionHeader({ overline, title, subtitle }) {
  return (
    <Box sx={{ mb: { xs: 5, md: 8 } }}>
      <Typography
        variant="overline"
        color="primary"
        sx={{ display: "block", fontWeight: 700, letterSpacing: 3, lineHeight: 2 }}
      >
        {overline}
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: subtitle ? 2 : 0 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
