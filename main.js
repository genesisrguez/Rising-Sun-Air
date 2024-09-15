function muestra_oculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == "flex") {
        div.style.display = "none";
    }
    else {
        div.style.display = "flex";
    }
}

/*BOTÓN CONDICIONAL PARA NAV*/
function isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("dynamicButton");
    const buttonText = document.getElementById("buttonText");
    const iconPath = document.getElementById("iconPath");

    if (isMobile()) {
        button.href = "tel:+16237035747"; 
        buttonText.textContent = "CALL US";
        iconPath.setAttribute("d", "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z");
    } else {
        button.href = "https://landing.risingsunair.com/contact"; 
        buttonText.textContent = "CONTACT US";
        iconPath.setAttribute("d", "M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z");
    }
});