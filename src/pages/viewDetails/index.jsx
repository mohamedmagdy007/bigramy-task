import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ArrowBackIosNew } from "@mui/icons-material";
import useFetchData from "../../hooks/usefetch";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./styles.module.scss";
import Loading from "../../components/loading";

export default function ViewDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useFetchData(`${id}`);

  return (
    <Loading loading={loading}>
      <Box paddingInline={3} paddingBlock={8}>
        <Box paddingBlock={6} display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              fontSize={"30px"}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <ArrowBackIosNew sx={{ color: "#55e748" }} />{" "}
              {data?.attributes?.name}
            </Typography>
          </Box>
        </Box>
        <Grid container justifyContent={"space-between"} gap={1}>
          <Grid
            item
            xs={12}
            md={3}
            bgcolor={"rgb(39, 39, 39)"}
            borderRadius={1}
            minHeight={"70vh"}
          >
            <Accordion
              sx={{ bgcolor: "transparent", color: "#FFF", fontsize: "24px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{ fontsize: "24px" }}>pages</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontsize: "24px" }}>pages 1 - 2</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography sx={{ fontsize: "24px" }}> pages 3 - 4</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "transparent", color: "#FFF" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontsize: "24px" }}>Bookmark</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ fontsize: "24px" }}>
                <Typography sx={{ fontsize: "24px" }}>pages 3</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={8.8}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={2}
            >
              <Typography>Page 1 - 2</Typography>
              <button className={styles.btn}>BookMark</button>
            </Box>
            <Grid className={styles.img_container}>
              <img src={data?.attributes?.book.image_url} />
            </Grid>
            <Box display={"flex"} justifyContent={"space-between"} mt={3}>
              <Box
                display={"flex"}
                alignItems="center"
                gap={1}
                px={2}
                border={"1px solid #55e748"}
                borderRadius={0.5}
              >
                <ZoomInIcon sx={{ color: "#55e748", cursor: "pointer" }} />
                <ZoomOutIcon sx={{ color: "#55e748", cursor: "pointer" }} />
              </Box>

              <Box display={"flex"} gap={1}>
                <button className={styles.btn_pages}>
                  <ArrowBackIosIcon /> Previous{" "}
                </button>
                <button className={styles.btn_pages}>
                  Next
                  <ArrowForwardIosIcon />
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Loading>
  );
}
