import { Box, Container, Typography, Paper, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/portfolio";

const DOT_SIZE = { xs: 40, sm: 56 };

export default function Experience() {
  return (
    <Box id="experience" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="CAREER"
          title="Experience"
          subtitle="My professional journey in software engineering."
        />

        <Box sx={{ maxWidth: 760, position: "relative" }}>
          {/* Timeline line, centred under the icon dots */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: DOT_SIZE.xs / 2 - 1, sm: DOT_SIZE.sm / 2 - 1 },
              top: { xs: DOT_SIZE.xs / 2, sm: DOT_SIZE.sm / 2 },
              bottom: 0,
              width: "2px",
              backgroundColor: "primary.main",
              opacity: 0.3,
            }}
          />

          {experience.map((job) => (
            <Box
              key={`${job.role}-${job.from}`}
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 4 },
                position: "relative",
                "&:not(:last-of-type)": { mb: 4 },
              }}
            >
              <Box
                sx={{
                  width: DOT_SIZE,
                  height: DOT_SIZE,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  zIndex: 1,
                  boxShadow: 4,
                }}
              >
                <WorkIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  flex: 1,
                  minWidth: 0,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                    {job.role}
                  </Typography>
                  {job.to === "Present" && (
                    <Chip label="Current" color="primary" size="small" sx={{ fontWeight: 600 }} />
                  )}
                </Box>

                <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {job.company} &bull; {job.location}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {job.from} — {job.to}
                </Typography>

                {job.highlights.length > 0 && (
                  <Box component="ul" sx={{ pl: 2.5, mt: 1.5, mb: 0 }}>
                    {job.highlights.map((h) => (
                      <Typography
                        key={h}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6, "&:not(:last-of-type)": { mb: 0.75 } }}
                      >
                        {h}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
