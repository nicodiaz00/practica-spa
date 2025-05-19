const root= document.getElementById("root");
root.classList.add("root");
const headerContent = document.getElementById("headerContent");
headerContent.classList.add("headerContent");
const mainContent = document.getElementById("mainContent");
mainContent.classList.add("mainContent")

let currentSection = "";




headerContent.appendChild(header()); 
mainContent.appendChild(main()); 

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
    img.classList.add("img-logo");

    header.classList.add("header");
    divLeft.classList.add("div-r-header")
    divCenter.classList.add("div-c-header")
    divRight.classList.add("div-l-header")
    divImg.classList.add("div-img")
    divImg.appendChild(img);

    const btns =["Nosotros","Servicios","Trabajos","Contacto"];

    nav.appendChild(createButton("Nosotros", () => loadAbout()));
    nav.appendChild(createButton("Servicios", () => loadServiceSection()));
    nav.appendChild(createButton("Trabajos", () => console.log("estas")));
    nav.appendChild(createButton("Contacto", () => console.log("chau")));

    header.appendChild(divLeft);
    header.appendChild(divCenter);
    header.appendChild(divRight);
    
    divCenter.appendChild(nav);
    divLeft.appendChild(divImg)
    divRight.appendChild(unorderedList);
    
    return header;
}

function main(){
    const imgCarousel = ["images/imagen01.png","images/imagen02.png","images/imagen03.png"]
    
    const divMain = document.createElement("div");
    divMain.classList.add("main");
    divMain.id="inicio";

    
    const divTop = document.createElement("div");
    divTop.classList.add("divTop");
    
   const carousel = createCarousel(imgCarousel);
    divTop.appendChild(carousel);

    


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
    currentSection = "main";
    return divMain;
    
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
    
    aPrev.textContent = "\u276E"; 
    aNext.textContent = "\u276F"; 

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

function createAbout(){

    const imgs = ["images/imagen04.png","images/imagen05.png","images/imagen06.png"];

    const aboutMain = document.createElement("div");
    aboutMain.classList.add("aboutMain");
    const aboutLeft = document.createElement("div");
    aboutLeft.classList.add("aboutLeft");

    const aboutRight = document.createElement("div");
    aboutRight.classList.add("aboutRight");

    const divH2 = document.createElement("h2");
    divH2.classList.add("div-h2")

    const divparagraph= document.createElement("div");
    divparagraph.classList.add("div-paragraph");


    const h2 = document.createElement("h2");
    h2.textContent ="Nuestro taller";

    divH2.appendChild(h2);

    const paragraph = document.createElement("p");
    
    
    paragraph.textContent = `Oak Bordados es un taller textil ubicado en Caleta Olivia, Santa Cruz, especializado en ofrecer soluciones textiles a empresas y emprendedores que buscan potenciar su identidad visual a través de uniformes personalizados y funcionales.
        Combinamos diseño, calidad y compromiso para ayudar a cada cliente a destacar en su rubro.`;
    
    const paragraphTwo = document.createElement("p");
    
    paragraphTwo.textContent=`Nos destacamos por nuestra flexibilidad, no tenemos pedidos mínimos. 
        Esto nos permite adaptarnos a las necesidades de cada cliente, ya sea para encargos individuales o producciones a gran escala, brindando siempre la misma dedicación y calidad.`;

    const paragraphThree = document.createElement("p");
    paragraphThree.textContent =`Contamos con maquinaria de última tecnología que nos permite confeccionar prendas y accesorios únicos, cuidando cada detalle. 
        Nuestro enfoque está en crear piezas exclusivas que reflejen el estilo y la personalidad de cada marca o proyecto`
    
        const paragraphFour = document.createElement("p");
    paragraphFour.textContent = `En nuestra sección de bordado trabajamos con hilos de alta calidad, lo que garantiza un acabado duradero y profesional. 
        Realizamos bordados de hasta 30x30 cm en hasta 12 colores, y contamos con matricería propia para una mayor precisión y rapidez en cada diseño.`    

    const paragraphFive = document.createElement("p");
    
    paragraphFive.textContent = `Descubrí cómo un bordado bien hecho puede transformar la imagen de tu negocio. Potenciá tu marca con identidad, calidad y estilo. ¡En Oak Bordados estamos para ayudarte a dar ese gran paso!`

    divparagraph.appendChild(paragraph);
    divparagraph.appendChild(paragraphTwo);
    divparagraph.appendChild(paragraphThree);
    divparagraph.appendChild(paragraphFour);
    divparagraph.appendChild(paragraphFive);
    aboutLeft.appendChild(divH2);
    aboutLeft.appendChild(divparagraph);
    
    aboutRight.appendChild(createImgSlider(imgs,3000))

    aboutMain.appendChild(aboutLeft);
    aboutMain.appendChild(aboutRight);
    currentSection = "about";
    return aboutMain;
    
}

function loadAbout(){

    if(currentSection === "about"){
        return
    }else{
        const main = document.getElementById("mainContent");
        const mainDiv = main.querySelector(".main");

        if (mainDiv) {
            main.removeChild(mainDiv);
        }
        main.appendChild(createAbout());
    }
    
}

function createImgSlider(images,interval){
    const sliderDiv =document.createElement("div");
    sliderDiv.classList.add("div-slider");

    const image = document.createElement("img");
    image.classList.add("img-slide");
    image.src = images[0];
    sliderDiv.appendChild(image);

    let index = 0;
    setInterval(()=> {
        index = (index +1)% images.length;
        image.src = images[index];
    },interval)

    return sliderDiv;

}

function createServiceSection(){
    const serviceSection = document.createElement("div");
    serviceSection.classList.add("service-section");

    const serviceDiv = document.createElement("div")
    const img = document.createElement("img");
    img.src="images/imagen08.png";
    serviceDiv.appendChild(img);

    

    const serviceDiv2 = document.createElement("div")
    
    const img2 = document.createElement("img");
    img2.src="images/imagen09.png";
    
    serviceDiv2.appendChild(img2)
    const serviceDiv3 = document.createElement("div")

    serviceSection.appendChild(serviceDiv);
    serviceSection.appendChild(serviceDiv2);
    serviceSection.appendChild(serviceDiv3);
    currentSection ="service";
    return serviceSection;





}

function loadServiceSection(){
    if(currentSection === "service"){
        return;
    }else{
        const main = document.getElementById("mainContent");
        const mainDiv =main.querySelector(".main");
        if(mainDiv){
            main.removeChild(mainDiv)
    }
        main.appendChild(createServiceSection())
    }
   
}