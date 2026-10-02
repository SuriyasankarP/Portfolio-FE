import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        borderTop: "1px solid",
        borderColor: "divider",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", mb: 2 }}>
          <IconButton
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton href={`mailto:${personalInfo.email}`} aria-label="Email" color="inherit">
            <EmailIcon />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          {personalInfo.name} &bull; {personalInfo.role}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
          Built with React + Vite + Material UI &bull; Deployed via Docker & Kubernetes
        </Typography>
      </Container>
    </Box>
  );
}
