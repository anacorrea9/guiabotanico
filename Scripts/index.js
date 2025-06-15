// Função para inicializar uma barra de pesquisa com sugestões (autocomplete)
function inicializarBarraPesquisaComSugestoes(seletor) {
  const barraPesquisaDiv = document.querySelector(seletor);
  if (!barraPesquisaDiv) return;

  const barraPesquisaInput = barraPesquisaDiv.querySelector('input');
  const btnPesquisa = barraPesquisaDiv.querySelector('button') || null;

  const sugestoesContainer = document.createElement('div');
  sugestoesContainer.className = 'sugestoes-pesquisa';
  barraPesquisaDiv.appendChild(sugestoesContainer);

  barraPesquisaInput.addEventListener('input', function () {
    const termo = this.value.toLowerCase().trim();
    sugestoesContainer.innerHTML = '';

    if (termo.length < 3) {
      sugestoesContainer.classList.remove('active');
      return;
    }

    const resultados = plantas.filter(planta =>
      planta.nomeCientifico.toLowerCase().includes(termo) ||
      planta.familia.toLowerCase().includes(termo) ||
      (planta.nomePopular && planta.nomePopular.toLowerCase().includes(termo)) ||
      (planta.cores && planta.cores.some(cor => cor.toLowerCase().includes(termo))) ||
      planta.tipo.toLowerCase().includes(termo)
    ).slice(0, 7);

    if (resultados.length > 0) {
      resultados.forEach(planta => {
        const sugestao = document.createElement('div');
        sugestao.className = 'sugestao-item';
        sugestao.innerHTML = `<span class="math-inline">${planta.nomeCientifico}</span> (${planta.familia})`;
        sugestao.addEventListener('click', () => {
          barraPesquisaInput.value = planta.nomeCientifico;
          pesquisarPlantas(planta.nomeCientifico);
          sugestoesContainer.classList.remove('active');
          barraPesquisaInput.focus();
        });
        sugestoesContainer.appendChild(sugestao);
      });
      sugestoesContainer.classList.add('active');
    } else {
      sugestoesContainer.classList.remove('active');
    }
  });

  barraPesquisaInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      pesquisarPlantas(this.value);
      sugestoesContainer.classList.remove('active');
      barraPesquisaInput.blur();
    }
  });

  if (btnPesquisa) {
    btnPesquisa.addEventListener('click', () => {
      pesquisarPlantas(barraPesquisaInput.value);
      sugestoesContainer.classList.remove('active');
      barraPesquisaInput.blur();
    });
  }

  document.addEventListener('click', (event) => {
    if (!barraPesquisaDiv.contains(event.target) && !sugestoesContainer.contains(event.target)) {
      sugestoesContainer.classList.remove('active');
    }
  });

  barraPesquisaInput.addEventListener('blur', () => {
    setTimeout(() => {
      if (!sugestoesContainer.contains(document.activeElement) && document.activeElement !== barraPesquisaInput) {
        sugestoesContainer.classList.remove('active');
      }
    }, 100);
  });
}

// Função para inicializar uma barra de pesquisa que filtra direto, sem sugestões
function inicializarBarraPesquisaSimples(seletor) {
  const barraPesquisaDiv = document.querySelector(seletor);
  if (!barraPesquisaDiv) return;

  const barraPesquisaInput = barraPesquisaDiv.querySelector('input');
  const btnPesquisa = barraPesquisaDiv.querySelector('button') || null;

  barraPesquisaInput.addEventListener('input', function () {
    pesquisarPlantas(this.value);
  });

  barraPesquisaInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      pesquisarPlantas(this.value);
      barraPesquisaInput.blur();
    }
  });

  if (btnPesquisa) {
    btnPesquisa.addEventListener('click', () => {
      pesquisarPlantas(barraPesquisaInput.value);
      barraPesquisaInput.blur();
    });
  }
}

// Função para executar a pesquisa e renderizar resultados
function pesquisarPlantas(termo) {
  const termoNormalizado = termo.toLowerCase().trim();
  const plantasFiltradas = plantas.filter(planta => {
    return (
      planta.nomeCientifico.toLowerCase().includes(termoNormalizado) ||
      planta.familia.toLowerCase().includes(termoNormalizado) ||
      (planta.nomePopular && planta.nomePopular.toLowerCase().includes(termoNormalizado)) ||
      (planta.cores && planta.cores.some(cor => cor.toLowerCase().includes(termoNormalizado))) ||
      planta.tipo.toLowerCase().includes(termoNormalizado)
    );
  });
  renderizarPlantas(plantasFiltradas);
}

// Ordenar plantas
function ordenarPlantas(criterio) {
  const ordenadas = [...plantas];

  switch (criterio) {
    case 'familia_az':
      ordenadas.sort((a, b) => a.familia.localeCompare(b.familia));
      break;
    case 'familia_za':
      ordenadas.sort((a, b) => b.familia.localeCompare(a.familia));
      break;
    case 'genero_az':
      const generoA = a => a.nomeCientifico.split(' ')[0];
      ordenadas.sort((a, b) => generoA(a).localeCompare(generoA(b)));
      break;
    case 'genero_za':
      const generoB = a => a.nomeCientifico.split(' ')[0];
      ordenadas.sort((a, b) => generoB(b).localeCompare(generoB(a)));
      break;
  }

  renderizarPlantas(ordenadas);
}

document.addEventListener('DOMContentLoaded', function () {
  // Inicializa barra com sugestões (autocomplete)
  inicializarBarraPesquisaComSugestoes('.barra-pesquisa');

  // Inicializa barra simples (sem sugestões)
  inicializarBarraPesquisaSimples('.galeria-pesquisa');

  // Ordenação
  const selectOrdenacao = document.querySelector('.ordenacao-select');
  if (selectOrdenacao) {
    selectOrdenacao.addEventListener('change', function () {
      ordenarPlantas(this.value);
    });
  }
});
