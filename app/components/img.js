export function createImg(id,src,alt){
    const $img = document.createElement("img");
    $img.id = id;
    $img.src = src;
    $img.alt = alt;

    return $img;
}