// Função para filtrar plantas por cor
function filtrarPorCor() {
    // Pega todos os checkboxes de cor marcados
    const coresSelecionadas = Array.from(
        document.querySelectorAll('.filtro-conteudo input[type="checkbox"]:checked')
    ).map(checkbox => checkbox.value);

    // Se nenhuma cor estiver selecionada, mostra todas as plantas
    if (coresSelecionadas.length === 0) {
        renderizarPlantas(plantas);
        return;
    }

    // Filtra as plantas que possuem pelo menos uma das cores selecionadas
    const plantasFiltradas = plantas.filter(planta => {
        return coresSelecionadas.some(cor => planta.cores.includes(cor));
    });

    renderizarPlantas(plantasFiltradas);
}
// Adiciona evento de change a todos os checkboxes de cor
document.querySelectorAll('.filtro-conteudo input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filtrarPorCor);
});

// Função para expandir/recolher os filtros
document.querySelectorAll('.filtro-topo').forEach(filtroTopo => {
    filtroTopo.addEventListener('click', function() {
        const filtroConteudo = this.nextElementSibling;
        const iconeToggle = this.querySelector('.icone-toggle');
        
        // Alterna a classe 'aberto' no conteúdo do filtro
        filtroConteudo.classList.toggle('aberto');
        
        // Alterna o ícone de + para x e vice-versa
        iconeToggle.classList.toggle('aberto');
    });
});