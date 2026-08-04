import { Box, Container, Typography, Paper, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={3}>
          CAREER
        </Typography>
        <Typography variant="h3" fontWeight={800} mb={2}>
          Experience
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={8} sx={{ maxWidth: 560 }}>
          My professional journey in software engineering.
        </Typography>

        <Box sx={{ maxWidth: 700, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              left: 28,
              top: 0,
              bottom: 0,
              width: "2px",
              backgroundColor: "primary.main",
              opacity: 0.3,
            }}
          />

          {experience.map((job, index) => (
            <Box key={index} display="flex" gap={4} mb={4} sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  zIndex: 1,
                  boxShadow: 4,
                }}
              >
                <WorkIcon sx={{ color: "#fff", fontSize: 24 }} />
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  flex: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap={1} mb={1}>
                  <Typography variant="h6" fontWeight={700}>
                    {job.role}
                  </Typography>
                  {index === 0 && (
                    <Chip label="Current" color="primary" size="small" sx={{ fontWeight: 600 }} />
                  )}
                </Box>

                <Typography variant="subtitle2" color="primary" fontWeight={600} mb={0.5}>
                  {job.company} &bull; {job.location}
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={1.5}>
                  {job.from} — {job.to}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {job.note}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
