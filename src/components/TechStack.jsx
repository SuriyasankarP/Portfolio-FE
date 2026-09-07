import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
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
    <Box id="stack">
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>
          SKILLS
        </Typography>
        <Typography variant="h3" fontWeight={800} mb={2}>
          Tech Stack
        </Typography>

        <Grid container spacing={3}>
          {techStack.map((group) => (
            <Grid item xs={12} sm={6} md={4} key={group.category}>
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
                  fontWeight={700}
                  color={`${categoryColors[group.category] || "primary"}.main`}
                  mb={2}
                >
                  {group.category}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
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
