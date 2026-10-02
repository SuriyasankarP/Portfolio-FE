import { Box, Container, Typography, Grid, Paper, Chip, Stack } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarIcon from "@mui/icons-material/Star";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "action.hover" }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="WORK"
          title="Production Projects"
          subtitle="Real enterprise systems — not tutorials. Each one is live and used by real users."
        />

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={project.featured ? 12 : { xs: 12, md: 4 }} key={project.title}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: project.featured ? "2px solid" : "1px solid",
                  borderColor: project.featured ? "primary.main" : "divider",
                  borderRadius: 3,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 8,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      variant={project.featured ? "h5" : "h6"}
                      component="h3"
                      sx={{ fontWeight: 700, lineHeight: 1.3 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.5 }}>
                      {project.subtitle}
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    useFlexGap
                    sx={{ flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end", gap: 1 }}
                  >
                    {project.featured && (
                      <Chip
                        icon={<StarIcon sx={{ fontSize: "14px !important" }} />}
                        label="Flagship"
                        size="small"
                        color="primary"
                        sx={{ fontWeight: 700, fontSize: "0.7rem" }}
                      />
                    )}
                    <Chip
                      icon={<WorkspacePremiumIcon sx={{ fontSize: "14px !important" }} />}
                      label={project.type}
                      size="small"
                      color="success"
                      variant="outlined"
                      sx={{ fontWeight: 600, fontSize: "0.7rem" }}
                    />
                  </Stack>
                </Box>

                <Chip
                  label={project.role}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ alignSelf: "flex-start", mb: 2, fontWeight: 500 }}
                />

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, lineHeight: 1.7, maxWidth: project.featured ? 760 : "none" }}
                >
                  {project.description}
                </Typography>

                <Box
                  component="ul"
                  sx={{ pl: 2.5, mb: 3, flex: 1, columnCount: project.featured ? { xs: 1, md: 2 } : 1, columnGap: 6 }}
                >
                  {project.highlights.map((h) => (
                    <Typography
                      key={h}
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.75, lineHeight: 1.6, breakInside: "avoid" }}
                    >
                      {h}
                    </Typography>
                  ))}
                </Box>

                <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
                  {project.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{ fontSize: "0.7rem", backgroundColor: "action.selected" }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
