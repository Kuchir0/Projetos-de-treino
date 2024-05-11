document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            // Remove classe ativa de todos os links
            links.forEach(link => {
                link.classList.remove("ativo");
            });
            
            // Add classe ativa ao link clicado
            this.classList.add("ativo");
            
            // Remove classe aberta de todas as seções
            sections.forEach(section => {
                section.classList.remove("aberto");
            });
            
            // Add classe aberta à seção alvo
            targetSection.classList.add("aberto");
        });
    });
});
