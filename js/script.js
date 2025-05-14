const root= document.getElementById("root");


root.classList.add("root");
header()
function header(){
    const header = document.createElement("header");
    const divLeft = document.createElement("div");
    const divRight = document.createElement("div");
    const nav = document.createElement("nav");
    const unorderedList = document.createElement("ul");
    
    header.classList.add("header");
    divLeft.classList.add("div-header")
    divRight.classList.add("div-header")
    unorderedList.classList.add("ul-header");

    

    const aElement= createlink("Inicio","#inicio");
    const aElement2 = createlink("Nosotros","#nosotros");
    const aElement3 = createlink("Servicios","#servicios");
    const aElement4 = createlink("Contacto","#contacto");

    aElement.classList.add("link-item")
    aElement2.classList.add("link-item")
    aElement3.classList.add("link-item")
    aElement4.classList.add("link-item")
    
    const liElement = createListItem(aElement);
    const liElement2 = createListItem(aElement2);
    const liElement3 = createListItem(aElement3);
    const liElement4 = createListItem(aElement4);
    
    liElement.classList.add("li-item")
    liElement2.classList.add("li-item")
    liElement3.classList.add("li-item")
    liElement4.classList.add("li-item")


    unorderedList.appendChild(liElement)
    unorderedList.appendChild(liElement2)
    unorderedList.appendChild(liElement3)
    unorderedList.appendChild(liElement4)

    nav.appendChild(unorderedList);
    
    header.appendChild(divLeft);
    
    header.appendChild(divRight);
    
    divRight.appendChild(nav);
    
    root.appendChild(header);
    
    
    

}

function createListItem(element){
    const li = document.createElement("li")
    li.appendChild(element);
    return li;
}

function createlink(text,url){
 const a = document.createElement("a");
 a.textContent =text;
 a.href = url;
 return a;
}