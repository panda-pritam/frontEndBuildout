import styles from "./inquery.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import img1 from "../../assets/imgs/img1.png";
import img2 from "../../assets/imgs/img2.png";
import img3 from "../../assets/imgs/img3.png";
import img4 from "../../assets/imgs/img4.png";
import img5 from "../../assets/imgs/img5.png";
import img6 from "../../assets/imgs/img6.png";
import img7 from "../../assets/imgs/img7.png";
import img8 from "../../assets/imgs/img8.png";

import Ellipse_blue from "../../assets/Ellipse_blue.png";
import Ellipse_pinky from "../../assets/Ellipse_pinky.png";

export default function Enquery() {
  return (
    <Box>
      <Box className={styles.mainDiv}>
        <h1 className={styles.mainHeading}>
          Driving Property Inquiries to Conversions
        </h1>

        <Box sx={{ width: "100%" }} className={styles.gridDiv}>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 1, md: 2 }}
            columns={{ xs: 6, sm: 6, lg: 4 }}
          >
            <Grid item xs={6} sm={6} md={2}>
              <Box className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                  <img src={img1} alt="" />
                </div>
                <h1>Call-to-Action Optimization</h1>
                <p>
                  Our carefully crafted CTAs guide potential buyers through the
                  property journey, enhancing engagement and conversion rates.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Box className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                  <img src={img2} alt="" />
                </div>
                <h1>Call-to-Action Optimization</h1>
                <p>
                  Our carefully crafted CTAs guide potential buyers through the
                  property journey, enhancing engagement and conversion rates.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Box className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                  <img src={img3} alt="" />
                </div>
                <h1>Call-to-Action Optimization</h1>
                <p>
                  Our carefully crafted CTAs guide potential buyers through the
                  property journey, enhancing engagement and conversion rates.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Box className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                  <img src={img4} alt="" />
                </div>
                <h1>Call-to-Action Optimization</h1>
                <p>
                  Our carefully crafted CTAs guide potential buyers through the
                  property journey, enhancing engagement and conversion rates.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={styles.mainDiv}>
        <h1 className={styles.mainHeading}>Our Expertise in Action</h1>
        <Box sx={{ width: "100%" }} className={styles.gridDiv}>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 1, md: 2 }}
            columns={{ xs: 6, sm: 6, lg: 4 }}
          >
            <Grid item xs={6} sm={6} md={2}>
              <Box className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                  <img src={img5} alt="" />
                </div>
                <h1>Effective CTAs</h1>
                <p>
                  See how our strategic CTAs drove a significant increase in
                  property inquiries and accelerated sales for a real estate
                  agency.
                </p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Box className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                  <img src={img6} alt="" />
                </div>
                <h1>Conversion-Optimized Landing Pages</h1>
                <p>
                  Explore a case study where our landing page optimization
                  increased property lead conversion rates by 30%
                </p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Box className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                  <img src={img7} alt="" />
                </div>
                <h1>Trust Building with Social Proof</h1>
                <p>
                  Discover how leveraging client testimonials boosted buyer
                  confidence, leading to higher conversion rates for a property
                  development project
                </p>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Box className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                  <img src={img8} alt="" />
                </div>
                <h1>Mobile-First Success:</h1>
                <p>
                  Learn how our mobile-responsive design approach resulted in a
                  25% increase in inquiries from mobile users for a real estate
                  agency.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={styles.PeaceDiv}>
        <h1 className={styles.mainHeading}>Your Peace of Mind</h1>
        <p className={styles.subHeading}>
          {" "}
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market
        </p>
        <button className={styles.btn}>Get Started</button>
        <img src={Ellipse_pinky} className={styles.pinky} />
        <img src={Ellipse_blue} className={styles.blue} />
      </Box>
    </Box>
  );
}
