export function createIframe(id,src,){
    let $iFrame = document.createElement("iframe");
    $iFrame.src = src;
    $iFrame.id = id;

    return $iFrame;
}