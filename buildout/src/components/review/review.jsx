import photo from "../../assets/photo.png";
import back from "../../assets/back.png";
import forward from "../../assets/forward.png";
import Symbal from "../../assets/Symbol.png";
import styles from "./review.module.css";
import playBtn from "../../assets/playBtn.png";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function Review() {
  const [expanded, setExpanded] = useState("panel3");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.mainHeading}>What Our Pharma Partners Say</h1>
      <p className={styles.subHeading}>
        {" "}
        Driving Transformations, One Brand at a Time
      </p>
      <div className={styles.formDiv}>
        <div className={styles.VideoDiv}>
          <div className={styles.playBtn}>
            <img src={playBtn} alt="" />
          </div>
          <img src={photo} alt="" />
        </div>
        <div className={styles.textDiv}>
          <div className={styles.textDivHead}>
            <div className={styles.profileImgAndNameDiv}>
              <div className={styles.profileImgDiv}>
                <img src={photo} alt="" />
              </div>
              <h1> Tabish khan</h1>
            </div>
            <img src={Symbal} alt="" className={styles.Symbal} />
          </div>
          <p className={styles.para}>
            Osumare's expertise in pharma marketing is unparalleled. Their
            strategies helped us navigate complex regulations while driving
            remarkable growth.
          </p>
        </div>
      </div>
      <div className={styles.navBtnDiv}>
        <div>
          <img src={back} alt="" />
        </div>
        <div>
          <img src={forward} alt="" />
        </div>
      </div>
      <div className={styles.accMainDiv}>
        <h1 className={styles.mainHeading}>Frequently Asked Questions</h1>
        <p className={styles.subHeading}>
          {" "}
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </p>

        <div className={styles.accDiv}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel1" ? (
                  <ExpandMoreIcon sx={{ color: "white" }} />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls="panel1-content"
              id="panel1d-header"
              className={
                expanded === "panel1" ? styles.expandedHead : styles.accHeader
              }
            >
              3. How does Osumare measure campaign success?
            </AccordionSummary>
            <AccordionDetails className={styles.accoPara}>
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel2" ? (
                  <ExpandMoreIcon sx={{ color: "white" }} />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls="panel2-content"
              id="panel2d-header"
              className={
                expanded === "panel2" ? styles.expandedHead : styles.accHeader
              }
            >
              3. How does Osumare measure campaign success?
            </AccordionSummary>
            <AccordionDetails className={styles.accoPara}>
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={
                expanded === "panel3" ? (
                  <ExpandMoreIcon sx={{ color: "white" }} />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              aria-controls="panel3-content"
              id="panel3d-header"
              className={
                expanded === "panel3" ? styles.expandedHead : styles.accHeader
              }
            >
              3. How does Osumare measure campaign success?
            </AccordionSummary>
            <AccordionDetails className={styles.accoPara}>
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
