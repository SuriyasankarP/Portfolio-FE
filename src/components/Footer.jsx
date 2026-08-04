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
        <Stack direction="row" justifyContent="center" spacing={1} mb={2}>
          <IconButton href={personalInfo.github} target="_blank" color="inherit">
            <GitHubIcon />
          </IconButton>
          <IconButton href={personalInfo.linkedin} target="_blank" color="inherit">
            <LinkedInIcon />
          </IconButton>
          <IconButton href={`mailto:${personalInfo.email}`} color="inherit">
            <EmailIcon />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {personalInfo.name} &bull; {personalInfo.role}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Built with React + Vite + Material UI &bull; Deployed via Docker & Kubernetes
        </Typography>
      </Container>
    </Box>
  );
}
