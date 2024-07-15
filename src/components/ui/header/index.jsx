import { ShoppingCart } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
const navItems = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "news",
    route: "#",
  },
  {
    title: "courses",
    route: "#",
  },
  {
    title: "e-book",
    route: "#",
  },
  {
    title: "contact us",
    route: "#",
  },
];

export default function Header() {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            textAlign: "right",
            borderBottom: "1px solid rgba(255,255,255,.25)",
          }}
          paddingInline={3}
          paddingBlock={1}
        >
          <Typography className={styles.caption}>العربية</Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingBlock={2}
          paddingInline={3}
        >
          <Box>
            <img
              src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
              alt="logo"
            />
          </Box>
          <Box>
            <Typography>
              <Link to={"/"}>Sign In</Link> or <Link to={"/"}>Sign Up</Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBlock: 1,
          paddingInline: 3,
          backgroundColor: "rgba(255,255,255,.25)",
        }}
      >
        <Box
          component={"ul"}
          sx={{
            display: "flex",
            gap: 3,
            alignContent: "center",
          }}
        >
          {navItems.map((item, ind) => (
            <Box component={"li"} className={styles["nav-item"]} key={ind}>
              <NavLink to={`${item.route}`}>{item.title}</NavLink>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ShoppingCart />
          <Typography fontSize={"20px"} fontWeight={"bold"}>
            cart
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
