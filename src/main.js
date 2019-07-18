import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/parallax";
import "./scripts/hamburger-menu";


import Validate from "./scripts/form";

const form=document.querySelector('.j-form');

if (form){
  const validate = new Validate({
    element: '.j-form'
  });
  validate.init();
}
