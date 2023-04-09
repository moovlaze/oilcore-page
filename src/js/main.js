import * as functions from "./modules/functions.js";
import { slider, sliderTwo } from "./modules/slider.js";
import pagging from "./modules/pagging.js";

functions.openBurgerMenu();
functions.map();
functions.popupImg();
functions.scrollToSection();

slider(".certificates__wrapper");
sliderTwo();

pagging();
