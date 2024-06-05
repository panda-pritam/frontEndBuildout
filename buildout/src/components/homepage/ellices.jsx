import ellipse from "../../assets/Ellipse_190.svg";
import styles from "./homePage.module.css";
export default function Ellipse() {
  return (
    <svg
      width="909"
      height="1110"
      viewBox="0 0 909 1110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.shap}
    >
      <g opacity="0.24" filter="url(#filter0_f_1_266)">
        <circle
          cx="623.4"
          cy="486.4"
          r="288"
          transform="rotate(140.527 623.4 486.4)"
          fill="#80BBFF"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_266"
          x="0.391891"
          y="-136.608"
          width="1246.02"
          height="1246.02"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="167.5"
            result="effect1_foregroundBlur_1_266"
          />
        </filter>
      </defs>
    </svg>
  );
}
