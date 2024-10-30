const elementos = document.querySelectorAll("*");
elementos.forEach((elemento) => {
    if (elemento.textContent.trim().toLowerCase() === "proceed to video" || elemento.textContent.trim().toLowerCase() === "directo") {
        elemento.click();
    }
});