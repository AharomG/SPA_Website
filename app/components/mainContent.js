export function mainContent(content,id){
    let $content = document.createElement("div");
    $content.id = id;
    content._text ? $content.innerHTML = content._text : $content.innerHTML = $content.innerHTML+"";
    content._ul ? $content.innerHTML = $content.innerHTML+content._ul : $content.innerHTML = $content.innerHTML+"";
    $content.append(content._img || "");   

    return $content;
}