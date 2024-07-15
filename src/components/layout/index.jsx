import { Box } from "@mui/material";
import Header from "../ui/header";
import Footer from "../ui/footer";
export default function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      <Box position={"relative"}>{children}</Box>
      <Footer />
    </Box>
  );
}
