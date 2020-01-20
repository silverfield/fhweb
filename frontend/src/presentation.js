import React from "react";
import { render } from "react-dom";
import './css/styles.scss';
import Slides from './components/presentation/Slides'

render(<Slides />, document.getElementById("react-presentation-container"))