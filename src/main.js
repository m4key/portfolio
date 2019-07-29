import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
<<<<<<< HEAD
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/parallax";
import "./scripts/hamburger-menu";
import "./scripts/scroll";

import Validate from "./scripts/form";

const form=document.querySelector('.j-form');

if (form){
  const validate = new Validate({
    element: '.j-form'
  });
  validate.init();
}
=======
import "./scripts/reviews";
import "./scripts/parallax";
import "./scripts/hamburger-menu";
>>>>>>> master
