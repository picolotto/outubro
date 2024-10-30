// Animação para o título ao passar o mouse
const headerTitle = document.querySelector("header h1");

headerTitle.addEventListener("mouseover", () => {
    headerTitle.style.transform = "rotate(-5deg) scale(1.1)";
    headerTitle.style.transition = "transform 0.3s";
});

headerTitle.addEventListener("mouseout", () => {
    headerTitle.style.transform = "rotate(0deg) scale(1)";
});

// Efeito de alerta de boas-vindas ao abrir a página
window.addEventListener("load", function() {
    alert("Bem-vindo ao site do Outubro Rosa!");
});