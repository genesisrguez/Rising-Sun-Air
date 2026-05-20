function muestra_oculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == "flex") {
        div.style.display = "none";
    }
    else {
        div.style.display = "flex";
    }
}

/*BOTÓN CONDICIONAL PARA NAV
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
        button.style.display = "none"
    }
});
*/

document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("contactFloatingBtn");
    const overlay = document.getElementById("contactOverlay");
    const closeBtn = document.getElementById("closeContact");
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMessage");

    // Abrir
    openBtn.addEventListener("click", () => {
        overlay.style.display = "flex";
    });

    // Cerrar
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    // Cerrar al hacer click fuera
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });

    // Submit
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        successMsg.style.display = "block";
        form.reset();

        setTimeout(() => {
            overlay.style.display = "none";
            successMsg.style.display = "none";
        }, 2500);
    });

});