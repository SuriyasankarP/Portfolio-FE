import { Box, Container, Typography, Button, Chip, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { personalInfo } from "../data/portfolio";

const buttonSx = { borderRadius: 3, textTransform: "none", fontWeight: 600 };

export default function Hero() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 8 },
        pb: { xs: 8, md: 8 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: { xs: 360, md: 600 },
          height: { xs: 360, md: 600 },
          borderRadius: "50%",
          background: (theme) =>
            `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ maxWidth: 720 }}>
          <Chip
            label="Open to Opportunities"
            color="primary"
            variant="outlined"
            size="small"
            sx={{ mb: 3, fontWeight: 500 }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.5rem" },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Hi, I&apos;m{" "}
            <Box
              component="span"
              sx={{
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {personalInfo.name}
            </Box>
          </Typography>

          <Typography
            variant="h2"
            color="text.secondary"
            sx={{ fontSize: { xs: "1.25rem", md: "1.75rem" }, fontWeight: 500, mb: 3 }}
          >
            {personalInfo.role} &bull; {personalInfo.company}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.8, mb: 4 }}
          >
            {personalInfo.bio}
          </Typography>

          <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={buttonSx}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={buttonSx}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              href={`mailto:${personalInfo.email}`}
              sx={buttonSx}
            >
              Email Me
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
