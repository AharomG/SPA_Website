import { createImg } from "../components/img.js";
import { imgRow } from "../components/imgsRow.js";
import { mainContent } from "../components/mainContent.js";
import { createIframe } from "../components/_iframe.js";

export function menuSelect(e){
    let { hash } = location;
    if(e.target.id === "options0"){
        if(!hash.includes("#/opt0")){
            location = "#/opt0";
        }
    }
    if(e.target.id === "options1"){
        if(!hash.includes("#/opt1")){
            location = "#/opt1";
        }
    }
    if(e.target.id === "options2"){
        if(!hash.includes("#/opt2")){
            location = "#/opt2";
        }
    }
    if(e.target.id === "options3"){
        if(!hash.includes("#/opt3")){
            location = "#/opt3";
        }
    }
    if(e.target.id === "home"){
        if(!hash.includes("#/home")){
            location = "#/home";
        }
    }
    if(e.target.id === "up"){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    if(e.target.id === "rullete0"){
        let $imgRow = document.querySelector(".imgs");
        let $imgsRow = document.querySelectorAll(".imgs img");
        for(let i = 0; i < $imgsRow.length; i++){
            if($imgsRow[i].className === "Active"){
                $imgsRow[i].classList.remove("Active");
                $imgRow.style.transform = `translateX(${-(i+1)*(100/$imgsRow.length)}%)`;
                $imgsRow[i+1].setAttribute("class","Active");
                if(i === $imgsRow.length-2){
                    document.getElementById("rullete0").style.display = "none";
                }
                break;
            }
        }
        if(document.getElementById("rullete1").style.display === "none"){
            document.getElementById("rullete1").style.display = "block";
        }       
    }
    if(e.target.id === "rullete1"){
        let $imgRow = document.querySelector(".imgs");
        let $imgsRow = document.querySelectorAll(".imgs img");
        for(let i = 0; i < $imgsRow.length; i++){
            if($imgsRow[i].className === "Active"){
                $imgsRow[i].classList.remove("Active");
                $imgRow.style.transform = `translateX(${-(i-1)*(100/$imgsRow.length)}%)`;
                $imgsRow[i-1].setAttribute("class","Active");
                if(i-1 === 0){
                    document.getElementById("rullete1").style.display = "none";
                }
                break;
            }
        }
        if(document.getElementById("rullete0").style.display === "none"){
            document.getElementById("rullete0").style.display = "block";
        } 
    }
}

export function scrollUp() {
    let $up = document.getElementById("up");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        $up.style.display = "block";
    } else {
        $up.style.display = "none";
    }
}

export function changeContent(){
    let $container = document.getElementById("container");
    $container.innerHTML = null;
    let _hash = window.location.hash; 
    if(_hash === "#/opt0"){
        let $fragment = document.createDocumentFragment();
        $fragment.appendChild(mainContent({
            _text: `<p>A black hole is a place in space where gravity pulls so much that even light can not get out. The gravity is so strong because matter has been squeezed into a tiny space. This can happen when a star is dying. Because no light can get out, people can't see black holes. They are invisible. Space telescopes with special tools can help find black holes. The special tools can see how stars that are very close to black holes act differently than other stars.</p>`,
            _img: createImg("blckHole","app/assets/blackHole.jpg","Black Hole"),
            
        },"contentBH"));
        $container.appendChild($fragment);
    }
    else if(_hash === "#/opt1"){
        let $fragment = document.createDocumentFragment();
        $fragment.appendChild(mainContent({
            _text: `<p>A star is an astronomical object comprising a luminous spheroid of plasma held together by its gravity. The nearest star to Earth is the Sun. Many other stars are visible to the naked eye at night, but their immense distance from Earth makes them appear as fixed points of light in the sky. The most prominent stars have been categorised into constellations and asterisms, and many of the brightest stars have proper names. Astronomers have assembled star catalogues that identify the known stars and provide standardized stellar designations. The observable universe contains an estimated 10^22 to 10^24 stars. Still, most are invisible to the naked eye from Earth, including all individual stars outside our galaxy, the Milky Way.</p>`,
            
        },"content1_stars"));
        $fragment.appendChild(createIframe("iframeStar","https://www.youtube.com/embed/3mnSDifDSxQ"));
        let $imgContainer = document.createElement("div");
        $imgContainer.id = "imgStarContainer";
        $imgContainer.appendChild(createImg("earth","app/assets/earth.png","Earth"));
        $imgContainer.appendChild(createImg("sun","app/assets/sun.jpg","Sun"));
        $imgContainer.appendChild(createImg("siriusA","app/assets/Sirius-a.png","Sirius-A"));
        $imgContainer.appendChild(createImg("gacrux","app/assets/gacrux.jpg","Gacrux"));
        $fragment.appendChild($imgContainer);
        $container.appendChild($fragment);
    }
    else if(_hash === "#/opt2"){
        let $fragment = document.createDocumentFragment();
        $fragment.appendChild(mainContent({
            _text: `<p>A planet is a large astronomical body that is neither a star nor a stellar remnant. There are competing scientific definitions of a "planet". In the dynamicist definition adopted by the International Astronomical Union (IAU), a planet is a non-stellar body that is massive enough to be rounded by its own gravity, that directly orbits a star, and that has cleared its orbital zone of competing objects. The IAU has also declared that there are eight planets in the Solar System, independently of the formal definition. In the geological definition used by most planetologists, a planet is a rounded sub-stellar body, possibly a satellite. In addition to the eight Solar planets accepted by the IAU, these include dwarf planets such as Eris and Pluto and planetary-mass moons. Bodies meeting the geological definition are sometimes called "planetary-mass objects" or "planemos" for short.</p>`,
            _img: createImg("earthThePlanet","app/assets/earth.png","Earth"),
        },"contentPlanet"));
        $container.appendChild($fragment);
    }
    else if(_hash === "#/opt3"){
        let $fragment = document.createDocumentFragment();
        $fragment.appendChild(mainContent({
            _text: `<p>The Solar System formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The vast majority of the system's mass is in the Sun, with the majority of the remaining mass contained in Jupiter. The four inner system planets—Mercury, Venus, Earth and Mars—are terrestrial planets, being composed primarily of rock and metal. The four giant planets of the outer system are substantially more massive than the terrestrials. The two largest planets, Jupiter and Saturn, are gas giants, being composed mainly of hydrogen and helium; the next two, Uranus and Neptune, are ice giants, being composed mostly of substances with relatively high melting points compared with hydrogen and helium, called volatiles, such as water, ammonia and methane. All eight have nearly circular orbits that lie close to the plane of the Earth's orbit, called the ecliptic.</p>`,
            _img: createImg("solarSystemImg","app/assets/solarSystem.jpg","Solar System"),
        },"contentSolarSystem"));
        let $solarSystem = document.createElement("div");
        $solarSystem.id = "solarSystem";
        for(let i = 0; i < 5; i++){
            let $planet = document.createElement("span");
            $planet.style = `--i:${i}`;
            $solarSystem.appendChild($planet);
        }
        $fragment.appendChild($solarSystem);
        $container.appendChild($fragment);
    }else if(!_hash || _hash === "#/home"){
        let $fragment = document.createDocumentFragment();
        $fragment.appendChild(mainContent({
            _text: `<p>The universe (Latin: universus) is all of space and time and their contents,including planets, stars, galaxies, and all other forms of matter and energy. The Big Bang theory is the prevailing cosmological description of the development of the universe. According to this theory, space and time emerged together 13.787±0.020 billion years ago, and the universe has been expanding ever since. While the spatial size of the entire universe is unknown, the cosmic inflation equation indicates that it must have a minimum diameter of 23 trillion light years, and it is possible to measure the size of the observable universe, which is approximately 93 billion light-years in diameter at the present day.</p>`,
            _img: createImg("universe","app/assets/universe.jpg","Universe"),
        },"content1"));
        $fragment.appendChild(imgRow("app/assets/universeRow.jpeg","app/assets/universeRow2.jpg","app/assets/universeRow3.jpg"));
        $fragment.appendChild(mainContent({
            _ul: `<ul><li>Age (within Lambda-CDM model): 13.799 ± 0.021 billion years</li><li>Diameter:	Unknown. Diameter of the observable universe: 8.8x10^   26m (28.5 Gpc or 93 Gly)</li><li>Mass (ordinary matter): At least 10^53 kg</li><li>Average density (including the contribution from energy): 9.9 x 10^-30 g/cm^3</li><li>Average temperature: 2.72548 K (-270.4 °C or -454.8 °F)</li><li>Main contents: Ordinary (baryonic) matter (4.9%), Dark matter (26.8%), Dark energy (68.3%)</li></ul>`,
        },"content2"));
        $container.appendChild($fragment);
        document.getElementById("rullete1").style.display = "none";
    }
}