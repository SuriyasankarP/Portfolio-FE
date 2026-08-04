import { AppBar, Toolbar, Typography, IconButton, Box, Button, useScrollTrigger } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CodeIcon from "@mui/icons-material/Code";

const navLinks = ["About", "Stack", "Projects", "Experience"];

export default function Navbar({ mode, toggleMode }) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: trigger
          ? "background.paper"
          : "transparent",
        transition: "all 0.3s ease",
        borderBottom: trigger ? "1px solid" : "none",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <CodeIcon color="primary" />
          <Typography variant="h6" fontWeight={700} color="primary">
            Suriya
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          {navLinks.map((link) => (
            <Button
              key={link}
              href={`#${link.toLowerCase()}`}
              sx={{ color: "text.primary", textTransform: "none", fontWeight: 500 }}
            >
              {link}
            </Button>
          ))}
          <IconButton onClick={toggleMode} sx={{ color: "text.primary" }}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
