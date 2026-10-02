import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import SectionHeader from "./SectionHeader";
import { techStack } from "../data/portfolio";

const categoryColors = {
  Backend: "primary",
  Databases: "secondary",
  "Cloud & DevOps": "success",
  "Search & Messaging": "warning",
  "AI & Integration": "error",
  Frontend: "info",
};

export default function TechStack() {
  return (
    <Box id="stack" component="section" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="SKILLS"
          title="Tech Stack"
          subtitle="Tools and technologies I use to design, build and ship production systems."
        />

        <Grid container spacing={3}>
          {techStack.map((group) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={group.category}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h3"
                  color={`${categoryColors[group.category] || "primary"}.main`}
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  {group.category}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {group.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        backgroundColor: "action.hover",
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
