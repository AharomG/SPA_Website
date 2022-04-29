import {App} from "./App.js";
import { scrollUp, menuSelect, changeContent } from "./helpers/events.js";

document.addEventListener("DOMContentLoaded", () => {App(); changeContent();});
document.addEventListener("click", menuSelect);
window.addEventListener("hashchange",changeContent);
window.addEventListener("scroll",scrollUp);