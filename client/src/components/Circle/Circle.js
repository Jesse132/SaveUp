import React from "react";
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider.js";
import ChangingProgressProvider from "./ChangingProgressProvider.js";

const percentage = 66;

const Circle = () => (
  <div>
    <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
      {percentage => (
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      )}
    </ChangingProgressProvider>
  </div>
)

export default Circle;