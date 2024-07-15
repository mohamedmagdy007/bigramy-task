import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ShoppingCart } from "@mui/icons-material";
export default function CardBooks({ item }) {
  return (
    <Grid item md={3} sm={6}>
      <Grid className={styles.card}>
        <Box className={styles.card_img}>
          <img
            src={item?.attributes.book?.image_url}
            alt={item?.attributes.name}
          />
        </Box>{" "}
        <Typography variant="subtitle1" className={styles.card_title}>
          {item?.attributes.name}
        </Typography>
        <Typography>USA {item?.attributes.price}</Typography>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link to={`/ebook-product/${item?.id}`} className={styles.btn}>
            Pay
          </Link>
          <Box border={"1px solid  #55e748"} padding={1}>
            <ShoppingCart />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
