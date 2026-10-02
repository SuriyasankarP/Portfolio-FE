import { Box, Container, Typography, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SectionHeader from "./SectionHeader";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <Box id="education" component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "action.hover" }}>
      <Container maxWidth="lg">
        <SectionHeader overline="BACKGROUND" title="Education" />

        <Box sx={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 3 }}>
          {education.map((item) => (
            <Paper
              key={item.degree}
              elevation={0}
              sx={{
                p: 3,
                display: "flex",
                gap: { xs: 2, sm: 3 },
                alignItems: "flex-start",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
              }}
            >
              <Box
                sx={{
                  width: { xs: 40, sm: 56 },
                  height: { xs: 40, sm: 56 },
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <SchoolIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {item.degree}
                </Typography>
                <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {item.institution} &bull; {item.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.from} — {item.to} &bull; {item.grade}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
