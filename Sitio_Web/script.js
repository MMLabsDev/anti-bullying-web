// ============================
// CARGA DE LA PÁGINA
// ============================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1800);
});

// ============================
// BOTÓN "YO ELIJO RESPETAR"
// ============================

const boton = document.getElementById("promesa");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {

    mensaje.innerHTML =
    "💙 ¡Gracias por tu compromiso! Cada persona que elige respetar hace de la escuela un lugar más seguro.";

    mensaje.style.marginTop = "25px";
    mensaje.style.fontSize = "22px";
    mensaje.style.fontWeight = "bold";
    mensaje.style.color = "#C084FC";

    boton.innerHTML = "✅ ¡Compromiso realizado!";
    boton.disabled = true;

});

// ============================
// EFECTO AL HACER SCROLL
// ============================

const elementos = document.querySelectorAll(
".card, .caja, .mito"
);

const mostrar = () => {

    elementos.forEach((elemento)=>{

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if(posicion < pantalla-80){

            elemento.style.opacity="1";
            elemento.style.transform="translateY(0)";

        }

    });

};

elementos.forEach((elemento)=>{

    elemento.style.opacity="0";
    elemento.style.transform="translateY(50px)";
    elemento.style.transition="1s";

});

window.addEventListener("scroll",mostrar);

mostrar();


// ============================
// BOTÓN VOLVER ARRIBA
// ============================

const subir = document.createElement("button");

subir.innerHTML = "⬆";

document.body.appendChild(subir);

subir.style.position="fixed";
subir.style.bottom="20px";
subir.style.right="20px";
subir.style.width="55px";
subir.style.height="55px";
subir.style.borderRadius="50%";
subir.style.display="none";
subir.style.fontSize="24px";
subir.style.zIndex="999";
subir.style.background="#8B5CF6";
subir.style.color="white";
subir.style.border="none";
subir.style.cursor="pointer";
subir.style.boxShadow="0 0 20px rgba(168,85,247,.5)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        subir.style.display="block";

    }else{

        subir.style.display="none";

    }

});

subir.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ============================
// CAMBIO DE COLOR DEL NAVBAR
// ============================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        nav.style.background="#09090B";

    }else{

        nav.style.background="rgba(9,9,11,.90)";

    }

});


// ============================
// EFECTO EN EL TÍTULO
// ============================

const titulo = document.querySelector(".hero h1");

setInterval(()=>{

    titulo.style.textShadow =
    "0 0 30px #A855F7";

    setTimeout(()=>{

        titulo.style.textShadow="none";

    },700);

},3000);


// ============================
// MENSAJE EN CONSOLA
// ============================

console.log("✨ Gracias por promover el respeto.");
console.log("💙 El bullying sexual no es una broma.");
console.log("🚀 Proyecto desarrollado con HTML, CSS y JavaScript.");