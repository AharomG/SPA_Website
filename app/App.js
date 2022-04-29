import {createHeader} from "./components/header.js";
import {createMenu} from "./components/menu.js";
import {createCont} from "./components/container.js";
import { goUp } from "./components/goUp.js";
import { createImg } from "./components/img.js";

export function App(){    
    const $fragment = document.createDocumentFragment();
    const $root = document.getElementById("root");
    $fragment.appendChild(createHeader("THE UNIVERSE"));
    $fragment.appendChild(createMenu(4,"Black holes","Stars","Planets","The solar system"));
    $fragment.appendChild(createCont());
    $fragment.appendChild(goUp());
    $fragment.appendChild(createImg("home","app/assets/home.png","Home"));
    $root.appendChild($fragment);
}