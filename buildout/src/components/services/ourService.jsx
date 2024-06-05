import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styles from "./ourService.module.css";
import img1 from "../../assets/img1.png";
import ppc from "../../assets/PPC.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import Web_design from "../../assets/Web design.png";
import video from "../../assets/Video.png";
import solution from "../../assets/Solutions.png";
import data_driven from "../../assets/Data driven.png";

export default function OurService() {
  return (
    <Box className={styles.mainDiv}>
      <h1 className={styles.mainHeading}>Our Service Offerings</h1>
      <p className={styles.subHeading}>
        {" "}
        Strategies that Drive Property Market Excellence
      </p>
      <Box sx={{ width: "100%" }} className={styles.gridDiv}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 1, md: 2 }}
          columns={{ xs: 2, sm: 8, lg: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Box className={styles.cardDiv}>
              <div className={styles.imageDiv}>
                <img src={img1} alt="" />
              </div>
              <h1>Automotive SEO</h1>
              <p>
                Drive Your Success with Automotive SEO: Ignite Online Visibility
                and Outrace the Competition. Accelerate Your Business Growth
                Today
              </p>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box className={styles.cardDiv}>
              <div className={styles.imageDiv}>
                <img src={ppc} alt="" />
              </div>
              <h1>PPC Precision</h1>
              <p>
                Maximize visibility and drive quality traffic with meticulously
                targeted Pay-Per-Click campaigns.
              </p>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box className={styles.cardDiv}>
              <div className={styles.imageDiv}>
                <img src={img2} alt="" />
              </div>
              <h1>Social Acceleration</h1>
              <p>
                {" "}
                Engage and influence your audience across social media
                platforms, amplifying your brand's presence and connection.
              </p>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box className={styles.cardDiv}>
              <Box className={styles.imageDiv}>
                <img src={Web_design} alt="" />
              </Box>
              <h1>Web Design</h1>
              <p>
                Transform visitors into customers with high-performance websites
                designed for seamless user experiences and increased
                conversions.
              </p>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box className={styles.cardDiv}>
              <div className={styles.imageDiv}>
                <img src={img3} alt="" />
              </div>
              <h1>Content Excellence</h1>
              <p>
                Craft compelling, automotive-specific content that resonates
                with enthusiasts and drives engagement.
              </p>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box className={styles.cardDiv}>
              <div className={styles.imageDiv}>
                <img src={data_driven} alt="" />
              </div>
              <h1>Data-Driven Insights</h1>
              <p>
                Leverage data to refine your strategies, making informed
                decisions that drive revenue growth.
              </p>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box className={styles.cardDiv}>
              <div className={styles.imageDiv}>
                <img src={solution} alt="" />
              </div>
              <h1>End-to-End Solutions</h1>
              <p>
                From initial awareness to post-purchase loyalty, we offer
                full-funnel solutions that guide customers through every step of
                their journey.
              </p>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box className={styles.cardDiv}>
              <div className={styles.imageDiv}>
                <img src={video} alt="" />
              </div>
              <h1>Video marketing</h1>
              <p>
                Unleash the Power of Video Marketing: Captivate, Engage, and
                Elevate Your Brand with Compelling Visual Stories.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <button className={styles.btn}>Get started</button>
    </Box>
  );
}
