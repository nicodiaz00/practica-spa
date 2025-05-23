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
    
    const a = document.createElement("a");
    a.classList.add("a-home");
    

    const img = document.createElement("img");
    img.src="images/logo-header.png"
    img.classList.add("img-logo");

    a.appendChild(img);
    a.addEventListener("click",(e) =>{
        e.preventDefault();
        loadMainSection()
    })

    header.classList.add("header");
    divLeft.classList.add("div-r-header")
    divCenter.classList.add("div-c-header")
    divRight.classList.add("div-l-header")
    divImg.classList.add("div-img")
    divImg.appendChild(a);

    const btns =["Nosotros","Servicios","Trabajos","Contacto"];

    nav.appendChild(createButton("Nosotros", () => loadAbout(),"btnNav"));
    nav.appendChild(createButton("Servicios", () => loadServiceSection(),"btnNav"));
    nav.appendChild(createButton("Trabajos", () => console.log("estas"),"btnNav"));
    nav.appendChild(createButton("Contacto", () => loadContactSection(),"btnNav"));

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

function createButton(btnText, onClick,btnStyle){
    const btn = document.createElement("button");
    btn.classList.add(btnStyle);
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
            Imagen:"images/instagram-24.png",
            Url:"https://www.instagram.com/oak_bordados/",
            Style: "ig-style"
        },
        {   
            Nombre: "Facebook",
            Imagen:"images/facebook-50.png",
            Url:"https://www.facebook.com/oakbordados",
            Style: "fb-style"

        },
        {   
            Nombre: "Tik Tok",
            Imagen:"images/tiktok-64.png",
            Url:"https://www.tiktok.com/@oakbordados",
            Style: "tiktok-style"
        },
    
    ]
    for(let i=0; i< socialMedia.length;i++){
        const li= document.createElement("li");
        const a = document.createElement("a");
        const img= document.createElement("img");
        img.classList.add(socialMedia[i].Style)
        
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
    
    
    paragraph.textContent = `Somos un taller textil ubicado en Caleta Olivia, Santa Cruz, especializado en ofrecer soluciones textiles a empresas y emprendedores que buscan potenciar su identidad visual a través de uniformes personalizados y funcionales.
        Combinamos diseño, calidad y compromiso para ayudar a cada cliente a destacar en su rubro.`;
    
    const paragraphTwo = document.createElement("p");
    
    paragraphTwo.textContent=`Nos destacamos por nuestra flexibilidad, no tenemos pedidos mínimos. 
        Esto nos permite adaptarnos a las necesidades de cada cliente, ya sea para encargos individuales o producciones a gran escala, brindando siempre la misma dedicación y calidad.`;

    const paragraphThree = document.createElement("p");
    paragraphThree.textContent =`Contamos con maquinaria de última tecnología que nos permite confeccionar prendas y accesorios únicos, cuidando cada detalle. 
        Nuestro enfoque está en crear piezas exclusivas que reflejen el estilo y la personalidad de cada marca o proyecto`
    
        const paragraphFour = document.createElement("p");
    paragraphFour.textContent = `Trabajamos con hilos de alta calidad, lo que garantiza un acabado duradero y profesional. 
        Realizamos bordados en hasta 12 colores y contamos con matricería propia.`    

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
    
    return aboutMain;
    
}

function loadMainSection(){
    if(currentSection ==="main"){
        return
    }else{
        clearMainContent();
        const container = document.getElementById("mainContent");
        container.appendChild(main());
        currentSection ="main";
    }
}

function loadContactSection(){
    if(currentSection ==="contact"){
        return
    }else{
        clearMainContent();
        const main = document.getElementById("mainContent");
        main.appendChild(createContactSection());
        currentSection = "contact";
    }
}

function loadAbout(){

    if(currentSection === "about"){
        return
    }else{

        clearMainContent()
        const main = document.getElementById("mainContent");
        main.appendChild(createAbout());
        currentSection ="about";
    }
    
}

function loadServiceSection(){
    if(currentSection === "service"){
        return;
    }else{
        clearMainContent()
        const main = document.getElementById("mainContent");
        main.appendChild(createServiceSection())
        currentSection ="service";
    }
   
}

function clearMainContent(){
    const mainSection = document.getElementById("mainContent");
    if(mainSection.firstChild){
        mainSection.removeChild(mainSection.firstChild)
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
    
    const serviceTitleDiv = document.createElement("div");
    serviceTitleDiv.classList.add("service-title-div")

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("service-image-div");
   
    const title = document.createElement("h2");
    title.textContent = "SERVICIOS DESTACADOS";
    serviceTitleDiv.appendChild(title);

    const serviceDiv = document.createElement("div")
    const h3Logo = document.createElement("h3");
    h3Logo.textContent = "LOGOS INSTITUCIONALES";
    const img = document.createElement("img");
    img.src="images/imagen08.png";
    serviceDiv.appendChild(img);
    serviceDiv.appendChild(h3Logo);
    
    const serviceDiv2 = document.createElement("div")
    const h3Cap = document.createElement("h3");
    h3Cap.textContent = "GORRAS BORDADAS";
    const img2 = document.createElement("img");
    img2.src="images/imagen09.png";
    serviceDiv2.appendChild(img2)
    serviceDiv2.appendChild(h3Cap);
    
    const serviceDiv3 = document.createElement("div")
    const h3uniform =document.createElement("h3");
    h3uniform.textContent ="UNIFORMES BORDADOS";

    const img3 = document.createElement("img");
    img3.src ="images/imagen10.png";

    serviceDiv3.appendChild(img3);
    serviceDiv3.appendChild(h3uniform);
    
    imageDiv.appendChild(serviceDiv);
    imageDiv.appendChild(serviceDiv2);
    imageDiv.appendChild(serviceDiv3);
    
    serviceSection.appendChild(serviceTitleDiv);
    serviceSection.appendChild(imageDiv);

    return serviceSection;
}

function createForm(){
    const form = document.createElement("form");
    form.classList.add("form-contact");
    
    const labelName = document.createElement("label")
    labelName.textContent = "Nombre";
    labelName.htmlFor = "name"
    
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.id = "name";

    const labelTelephone = document.createElement("label");
    labelTelephone.textContent = "Telefono";
    labelTelephone.htmlFor ="telephone";

    const inputTelephone = document.createElement("input");
    inputTelephone.type = "number";
    inputTelephone.id ="telephone";


    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email";
    labelEmail.htmlFor ="email";

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.id = "email";

    const labelMessage = document.createElement("label");
    labelMessage.textContent = "Mensaje";
    labelMessage.htmlFor = "message";

    const textarea = document.createElement("textarea");
    textarea.id = "message";
    textarea.name = "mensaje";
    textarea.placeholder = "Escribe tu mensaje aquí";

    const btnEnviar = createButton("Enviar",() => console.log("enviando datos"),"btnEnviar");

    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(labelTelephone);
    form.appendChild(inputTelephone);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(labelMessage);
    form.appendChild(textarea);
    form.appendChild(btnEnviar);

    return form;
    
}
function createAdressContact(){
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("address-div");

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("address-container");

    const topDiv =document.createElement("div");
    topDiv.classList.add("upper-div")

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("bottom-div")
    
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("address-tittle")

    const h2 =document.createElement("h2");
    h2.textContent = "Dónde encontrarnos";
    const paragraph = document.createElement("p")
    paragraph.textContent ="Si queres visitar nuestro taller!"

    titleDiv.appendChild(h2);
    titleDiv.appendChild(paragraph);

    const divGps = document.createElement("div");
    divGps.classList.add("div-gps");

    const img = document.createElement("img");
    img.src = "images/gps.png";

    const p = document.createElement("p");
    p.textContent = "Av. República 121, Caleta Olivia, Santa Cruz";

    const divPhone = document.createElement("div");
    divPhone.classList.add("div-phone");
    const imgPhone = document.createElement("img");
    const pPhone = document.createElement("p");
    
    imgPhone.src = "images/phone-call.png"
    pPhone.textContent ="297-4176717";

    const divEmail = document.createElement("div");
    divEmail.classList.add("div-email");

    const emailImg = document.createElement("img");
    emailImg.src = "images/email.png";

    const pEmail = document.createElement("p");
    pEmail.textContent = "oakbordados@gmail.com";

    divGps.appendChild(img);
    divGps.appendChild(p);

    divPhone.appendChild(imgPhone);
    divPhone.appendChild(pPhone);

    divEmail.appendChild(emailImg);
    divEmail.appendChild(pEmail);


    
    addressDiv.appendChild(divGps);
    addressDiv.appendChild(divPhone)
    addressDiv.appendChild(divEmail)

    topDiv.appendChild(titleDiv);
    topDiv.appendChild(addressDiv);

    bottomDiv.appendChild(loadMapSection());

    mainDiv.appendChild(topDiv)
    mainDiv.appendChild(bottomDiv);

    

    

    return mainDiv;
}


function createContactSection(){
    const contactMain = document.createElement("div");
    const divTittle = document.createElement("div")
    
    divTittle.classList.add("div-tittle");
    const h2 = document.createElement("h2");
    h2.textContent = "CONTACTO";
    
    const h3 = document.createElement("h3");
    h3.textContent ="¿Tenés consultas o dudas?";

    const h4 = document.createElement("h4");
    h4.textContent ="Solicita tu presupuesto";

    divTittle.appendChild(h2);
    divTittle.appendChild(h3);
    divTittle.appendChild(h4);


    contactMain.classList.add("contact-main")
    const divLeft = document.createElement("div");
    divLeft.classList.add("div-contact-left")
    divLeft.appendChild(divTittle);
    divLeft.appendChild(createForm());

    const divRight = document.createElement("div");
    divRight.classList.add("div-contact-right");

    divRight.appendChild(createAdressContact());
    
    contactMain.appendChild(divLeft);
    contactMain.appendChild(divRight);

    return contactMain;

}

function createMap(lat, lng, mensaje = "Ubicación") {
  const map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(mensaje)
    .openPopup();
}

function loadMapSection() {
  const divMap = document.createElement("div");
  divMap.classList.add("div-map");

  const mapContainer = document.createElement("div");
  mapContainer.id = "map";
  mapContainer.classList.add("map-container"); //lo que contieene l ampa
  divMap.appendChild(mapContainer);

  // Crear el mapa una vez que el contenedor esté en el DOM
  setTimeout(() => {
    createMap(-46.43069963223687, -67.52358511689029, "Estoy acá");
  }, 0);

  return divMap;
}


