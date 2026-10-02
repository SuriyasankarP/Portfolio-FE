import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import { personalInfo } from "../data/portfolio";

const navLinks = ["About", "Stack", "Projects", "Experience", "Education"];

export default function Navbar({ mode, toggleMode }) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={trigger ? 4 : 0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: trigger ? "background.paper" : "transparent",
        backgroundImage: "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        borderBottom: "1px solid",
        borderColor: trigger ? "divider" : "transparent",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            component="a"
            href="#about"
            sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none" }}
          >
            <CodeIcon color="primary" />
            <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
              {personalInfo.name.split(" ")[0]}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  sx={{ color: "text.primary", textTransform: "none", fontWeight: 500 }}
                >
                  {link}
                </Button>
              ))}
            </Box>
            <IconButton
              onClick={toggleMode}
              aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
              sx={{ color: "text.primary" }}
            >
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              sx={{ display: { xs: "inline-flex", md: "none" }, color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 240, pt: 2 }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link}
              component="a"
              href={`#${link.toLowerCase()}`}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={link} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
