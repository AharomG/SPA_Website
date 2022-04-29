import {option} from "./option.js";

export const createMenu = (num,...names) => {
    let $menu = document.createElement("div");
    $menu.setAttribute("id","menu");
    for(let i=0; i<num; i++){       
        let options = option();
        options.setAttribute("id",`${options.id}${i}`);
        options.innerHTML = names[i];
        $menu.appendChild(options);    
    }
    return $menu;
}