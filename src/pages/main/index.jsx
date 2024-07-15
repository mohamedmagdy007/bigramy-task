import { Box, Grid, Typography } from "@mui/material";

import useFetchData from "../../hooks/usefetch";
import CardBooks from "../../components/card";
import Loading from "../../components/loading";

export default function MainView() {
  const { data, loading } = useFetchData(
    `?filter[product_type]=digital&filter[sub_product_type]=book`
  );
  return (
    <Loading loading={loading}>
      <Box paddingBlock={"100px"}>
        <Typography
          variant="h2"
          fontSize={"36px"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          EXPLORE OUR E-BOOKS
        </Typography>

        <Grid container padding={3}>
          {data?.map((item, ind) => (
            <CardBooks item={item} key={ind} />
          ))}
        </Grid>
      </Box>
    </Loading>
  );
}
