import { Box, Container, Typography, Grid, Paper, Chip, Stack } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 12, backgroundColor: "action.hover" }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>
          WORK
        </Typography>
        <Typography variant="h3" fontWeight={800} mb={2}>
          Production Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={8} sx={{ maxWidth: 560 }}>
          Real enterprise systems — not tutorials. Each one is live and used by real users.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 8,
                  },
                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Box>
                    <Typography variant="h6" fontWeight={700}>
                      {project.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {project.subtitle}
                    </Typography>
                  </Box>
                  <Chip
                    icon={<WorkspacePremiumIcon sx={{ fontSize: "14px !important" }} />}
                    label={project.type}
                    size="small"
                    color="success"
                    variant="outlined"
                    sx={{ fontWeight: 600, fontSize: "0.7rem" }}
                  />
                </Box>

                <Chip
                  label={project.role}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ alignSelf: "flex-start", mb: 2, fontWeight: 500 }}
                />

                <Typography variant="body2" color="text.secondary" mb={3} sx={{ lineHeight: 1.7 }}>
                  {project.description}
                </Typography>

                <Box component="ul" sx={{ pl: 2, mb: 3, flex: 1 }}>
                  {project.highlights.map((h) => (
                    <Typography
                      key={h}
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5, lineHeight: 1.6 }}
                    >
                      {h}
                    </Typography>
                  ))}
                </Box>

                <Stack direction="row" flexWrap="wrap" gap={0.8} useFlexGap>
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
