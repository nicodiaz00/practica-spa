const root= document.getElementById("root");
root.classList.add("root");

const imgCarousel = ["images/imagen01.JPG","images/imagen02.JPG","images/imagen03.JPG"]

header()
main()

function header(){
    const header = document.createElement("header");
    const divLeft = document.createElement("div");
    const divCenter = document.createElement("div");

    const divRight = document.createElement("div");
    const nav = document.createElement("nav");
    const unorderedList = document.createElement("ul");
    const divImg = document.createElement("div");
    
    const img = document.createElement("img");
    img.src="images/oak-logo.png"
    img.classList.add("img");

    header.classList.add("header");
    divLeft.classList.add("div-r-header")
    divCenter.classList.add("div-c-header")
    divRight.classList.add("div-l-header")
    unorderedList.classList.add("ul-header");
    divImg.classList.add("div-img")

    divImg.appendChild(img);

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
    header.appendChild(divCenter);
    header.appendChild(divRight);
    
    divRight.appendChild(nav);
    divLeft.appendChild(divImg)
    
    root.appendChild(header);           
}

function main(){
    const divMain = document.createElement("div");
    divMain.classList.add("main");
    divMain.id="inicio";

    
    const divTop = document.createElement("div");
    divTop.classList.add("divTop");
    
    const titulo = document.createElement("h1");
    titulo.textContent ="OAK BORDADOS";

    divTop.appendChild(titulo)

    divMain.appendChild(divTop)
    

    const divBottom = document.createElement("div");
    divBottom.classList.add("divBottom")
    

    const divImg = document.createElement("div");
    const divImg2 = document.createElement("div");
    const divImg3= document.createElement("div")
    divImg.classList.add("divImg")
    divImg2.classList.add("divImg")
    divImg3.classList.add("divImg")
    
    const image = document.createElement("img");
    const image2= document.createElement("img");
    const image3 = document.createElement("img");
    image.classList.add("img-bottom"); 
    image2.classList.add("img-bottom");
    image3.classList.add("img-bottom");  
    
    image.src="images/embroidery-1.jpg";
    image2.src="images/T-shirts.jpg";
    image3.src="images/cap3d.jpg";
    
    divImg.appendChild(image)
    divImg2.appendChild(image2)
    divImg3.appendChild(image3)
    
    divBottom.appendChild(divImg);
    divBottom.appendChild(divImg2);
    divBottom.appendChild(divImg3);

    
    divMain.appendChild(divBottom)
    root.appendChild(divMain)
    
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

function createSlide(imgUrl){
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const img = document.createElement("img");
    img.classList.add("img-carousel")
    img.src=imgUrl;
    slide.appendChild(img);
    return slide;
}

function createCarousel(imagenes){
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    
    const aPrev = document.createElement("a");
    const aNext = document.createElement("a");
    
    aPrev.textContent = "\u276E"; // equivalente a &#10094;
    aNext.textContent = "\u276F"; // equivalente a &#10095;

    aPrev.classList.add("prev");
    aNext.classList.add("next");

    
    for(let i=0; i < imagenes.length; i++){
        carousel.appendChild(createSlide(imagenes[i]));
    }

    carousel.appendChild(aPrev);
    carousel.appendChild(aNext);

    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    showSlide(currentSlide,slides);

    aPrev.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide, slides);
    });

    aNext.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide, slides);
    });
  
    return carousel;

}

function showSlide(index,slides){
    slides.forEach((slide,i) => {
        if(i=== index){
            slide.style.display ="block";

        }else{
            slide.style.display ="none";
        }
    });
}

function createButton(btnText,){
    const btn = document.createElement("button");
    btn.classList.add("btnNav");
    btn.textContent= btnText;
    
    btn.addEventListener("click", onClick);
    return btn;

}