import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

import styles from "./styles.module.scss";

const linksRef = ["News", "Tournaments", "Courses", "E-Books"];
const linksAboutUs = ["Privacy policies", "Terms & Conditions", "Contact Us"];

export default function Footer() {
  return (
    <>
      <Grid
        container
        paddingTop={"128px"}
        paddingBottom={4}
        paddingInline={3}
        bgcolor={"#131313"}
        className={styles.footer}
      >
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          paddingBottom={3}
          borderBottom={"1px solid rgba(255,255,255,.15)"}
        >
          <Grid item>
            <img
              src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
              alt="logo"
            />
          </Grid>
          <Grid item>
            <Typography
              variant={"subtitle1"}
              color={"rgba(255, 255, 255, 0.75)"}
              fontSize={"20px"}
            >
              Join our
            </Typography>
            <Typography variant={"subtitle2"} fontSize={"20px"}>
              Newsetter
            </Typography>
          </Grid>
          <Box className={styles.form_container} component={"form"}>
            <Box className={styles.input}>
              <input type="text" placeholder="What your are Looking for?" />
            </Box>
            <button>Subscribe</button>
          </Box>
        </Grid>

        <Grid container marginTop={4} spacing={4}>
          <Grid item md={4} paddingTop={0}>
            <Typography className={styles.text_des} fontSize={"14px"}>
              Lorem Ipsum is simply dummy text of the printing and typesett ing
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>

            <Typography marginTop={3} fontSize={"14px"}>
              Follow us on
            </Typography>

            <Box className={styles.social_list} component={"ul"}>
              <Box component={"li"}>
                <Twitter />
              </Box>
              <Box component={"li"}>
                <LinkedIn />
              </Box>
              <Box component={"li"}>
                <Instagram />
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} paddingTop={0}>
            <Box component={"ul"} className={styles.links_list}>
              {linksRef.map((link, index) => (
                <Box component={"li"} key={index}>
                  {link}
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item md={3} paddingTop={0}>
            <Box component={"ul"} className={styles.links_list}>
              {linksAboutUs.map((link, index) => (
                <Box component={"li"} key={index}>
                  {link}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Typography fontSize={"14px"} textAlign={"center"} paddingBlock={2}>
        2023 LOGO. All Rights Reserved.
      </Typography>
    </>
  );
}
