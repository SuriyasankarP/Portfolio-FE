import { Box, Container, Typography, Button, Chip, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "radial-gradient(circle, rgba(144,202,249,0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(25,118,210,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 700 }}>
          <Chip
            label="Open to Opportunities"
            color="primary"
            variant="outlined"
            size="small"
            sx={{ mb: 3, fontWeight: 500 }}
          />

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 1,
              lineHeight: 1.2,
            }}
          >
            Hi, I&apos;m{" "}
            <Box
              component="span"
              sx={{
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #90caf9, #ce93d8)"
                    : "linear-gradient(135deg, #1976d2, #9c27b0)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {personalInfo.name}
            </Box>
          </Typography>

          <Typography variant="h4" color="text.secondary" fontWeight={500} mb={3}>
            {personalInfo.role} &bull; {personalInfo.company}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}>
            {personalInfo.bio}
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href={personalInfo.github}
              target="_blank"
              sx={{ borderRadius: 3, textTransform: "none", fontWeight: 600 }}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href={personalInfo.linkedin}
              target="_blank"
              sx={{ borderRadius: 3, textTransform: "none", fontWeight: 600 }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              href={`mailto:${personalInfo.email}`}
              sx={{ borderRadius: 3, textTransform: "none", fontWeight: 600 }}
            >
              Email Me
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
