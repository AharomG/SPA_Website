export const createHeader = (text) => {
    let $createHead = document.createElement("div");
    $createHead.setAttribute("id", "head");
    $createHead.innerHTML = `<h1>${text}</h1>`;

    return $createHead;
}