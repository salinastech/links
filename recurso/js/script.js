document.addEventListener("DOMContentLoaded", () => {
    
    console.log("Página de enlace de Salinas Tech cargada.");

    document.querySelectorAll('.main-buttons a').forEach(button => {
        button.addEventListener('click', (e) => {
            const text = e.currentTarget.querySelector('span.left-icon').textContent.trim();
        });
    });
});