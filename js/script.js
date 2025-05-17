const root= document.getElementById("root");
root.classList.add("root");




header()
main()

function header(){
    const header = document.createElement("header");
    const divLeft = document.createElement("div");
    const divCenter = document.createElement("div");

    const divRight = document.createElement("div");
    const nav = document.createElement("nav");
    const unorderedList = createUl();
    const divImg = document.createElement("div");
    
    const img = document.createElement("img");
    img.src="images/oak-logo.png"
    img.classList.add("img");

    header.classList.add("header");
    divLeft.classList.add("div-r-header")
    divCenter.classList.add("div-c-header")
    divRight.classList.add("div-l-header")
    divImg.classList.add("div-img")
    divImg.appendChild(img);

    const btns =["Nosotros","Servicios","Trabajos","Contacto"];

    nav.appendChild(createButton("Nosotros", () => console.log("Hola")));
    nav.appendChild(createButton("Servicios", () => console.log("como")));
    nav.appendChild(createButton("Trabajos", () => console.log("estas")));
    nav.appendChild(createButton("Contacto", () => console.log("chau")));

    header.appendChild(divLeft);
    header.appendChild(divCenter);
    header.appendChild(divRight);
    
    divCenter.appendChild(nav);
    divLeft.appendChild(divImg)
    divRight.appendChild(unorderedList);
    root.appendChild(header);           
}

function main(){
    const imgCarousel = ["images/imagen01.JPG","images/imagen02.JPG","images/imagen03.JPG"]
    
    const divMain = document.createElement("div");
    divMain.classList.add("main");
    divMain.id="inicio";

    
    const divTop = document.createElement("div");
    divTop.classList.add("divTop");
    
   const carousel = createCarousel(imgCarousel);
    divTop.appendChild(carousel);

    //const titulo = document.createElement("h1");
    //titulo.textContent ="OAK BORDADOS";

    //divTop.appendChild(titulo)



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
    const slides = carousel.querySelectorAll(".slide");
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

function createButton(btnText, onClick){
    const btn = document.createElement("button");
    btn.classList.add("btnNav");
    btn.textContent= btnText;
    
    btn.addEventListener("click", onClick);
    return btn;

}

const imgSocialMedia= [
    {   nombre: "Instagram",
        imagen:"images/ig.svg",
        url:"https://www.instagram.com/oak_bordados/"
    },
     {   nombre: "Youtube",
        imagen:"images/youtube.svg",
        url:"https://www.youtube.com/@oakbordados"
    },
     {   nombre: "Tik Tok",
        imagen:"images/tiktok.svg",
        url:"https://www.tiktok.com/@oakbordados"
    },
    

]

function createUl(){

    const ul = document.createElement("ul");
    ul.classList.add("ul-header")

    const socialMedia= 
    [
        {   
            Nombre: "Instagram",
            Imagen:"images/ig.svg",
            Url:"https://www.instagram.com/oak_bordados/"
        },
        {   
            Nombre: "Youtube",
            Imagen:"images/youtube.svg",
            Url:"https://www.youtube.com/@oakbordados"
        },
        {   
            Nombre: "Tik Tok",
            Imagen:"images/tiktok.svg",
            Url:"https://www.tiktok.com/@oakbordados"
        },
    
    ]

    
    

    for(let i=0; i< socialMedia.length;i++){
        const li= document.createElement("li");
        const a = document.createElement("a");
        const img= document.createElement("img");
        img.classList.add("link-img")
        
        li.classList.add("li-item");
        
        img.src=socialMedia[i].Imagen;
        img.alt = socialMedia[i].Nombre

        a.classList.add("link-item")
        a.href=socialMedia[i].Url;
        a.target = "_blank";
        
        a.appendChild(img);
        li.appendChild(a);
        ul.appendChild(li)
        

    }

    return ul;

}