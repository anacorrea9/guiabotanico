// ============================================================
// i18n.js — Tradução da interface (PT / EN / ES)
// ------------------------------------------------------------
// Uso em uma página:
//   <script src="i18n.js" defer></script>
//   Marcar elementos com data-i18n="chave" (troca textContent),
//   data-i18n-placeholder="chave" (troca placeholder),
//   data-i18n-aria="chave" (troca aria-label).
// Para textos gerados via JS: window.i18n.t('chave')
// Re-render automatico ao trocar idioma: exponha window.i18nRerender = fn.
// ============================================================
(function () {
  const DICT = {
    pt: {
      // Navegacao
      'nav.open': 'Abrir menu',
      'nav.close': 'Fechar menu',
      'nav.tagline': 'Descubra a flora dos campos de altitude de Santa Catarina',
      'nav.gallery': 'Galeria',
      'nav.about': 'Sobre nós',
      'nav.conservation': 'Conservação dos campos',
      'nav.disturbances': 'Distúrbios',
      'nav.guides': 'Guias de campo',
      'nav.library': 'Biblioteca',
      'nav.contribute': 'Contribua',
      'nav.contact': 'Fale conosco',
      // Hero
      'hero.title': 'Guia Botânico dos Campos',
      'hero.subtitle': 'DESCUBRA A FLORA DOS CAMPOS DE ALTITUDE DO SUL DO BRASIL',
      'hero.search.placeholder': 'Pesquise por nome popular, família, gênero, espécie, ou qualquer termo que descreva a planta',
      'hero.search.aria': 'Pesquisar',
      'hero.credit': 'Fotografia: Sofia Casali, Parque Nacional de São Joaquim',
      // Stats
      'stats.species': 'Espécies',
      'stats.photos': 'Fotos',
      'stats.contribute': 'Contribua para o site',
      // Toolbar da galeria
      'gallery.title': 'Galeria de fotos',
      'gallery.search.placeholder': 'Digite aqui para pesquisar',
      'toolbar.sort': 'Ordenar',
      'toolbar.sort.label': 'Ordenar:',
      'toolbar.sort.family-az': 'Família A-Z',
      'toolbar.sort.family-za': 'Família Z-A',
      'toolbar.sort.name-az': 'Nome científico A-Z',
      'toolbar.sort.name-za': 'Nome científico Z-A',
      'toolbar.filter': 'Filtrar',
      'toolbar.filter.aria': 'Abrir filtros',
      // Filtros
      'filters.title': 'Filtros',
      'filters.close': 'Fechar filtros',
      'filters.color': 'Cor da flor',
      'filters.color.yellow': 'Amarelo',
      'filters.color.blue': 'Azul',
      'filters.color.white': 'Branco',
      'filters.color.orange': 'Laranja',
      'filters.color.lilac': 'Lilás',
      'filters.color.pink': 'Rosa',
      'filters.color.purple': 'Roxo',
      'filters.color.green': 'Verde',
      'filters.color.red': 'Vermelho',
      'filters.status': 'Estado de conservação',
      'filters.status.EX': 'Extinta',
      'filters.status.CR': 'Criticamente em Perigo',
      'filters.status.EN': 'Em Perigo',
      'filters.status.VU': 'Vulnerável',
      'filters.status.NT': 'Quase Ameaçada',
      'filters.status.LC': 'Pouco preocupante',
      'filters.status.R': 'Rara ou endêmica',
      'filters.status.EXO': 'Exótica',
      'filters.stage': 'Estágio sucessional (indicadoras)',
      'filters.stage.initial': 'Estágio inicial',
      'filters.stage.medium': 'Estágio médio',
      'filters.stage.advanced': 'Estágio avançado',
      'filters.stage.primary': 'Vegetação primária',
      'filters.family': 'Família',
      'filters.family.search': 'Buscar família…',
      'filters.apply': 'Aplicar',
      'filters.clear': 'Limpar',
      // Resultados dinamicos
      'results.found.one': 'espécie encontrada',
      'results.found.many': 'espécies encontradas',
      'results.none': 'Nenhuma espécie encontrada com os filtros selecionados.',
      'results.addphoto': 'Adicionar foto',
      'download.xlsx': 'Baixar XLSX',
      // Modal
      'modal.popular': 'Nome popular:',
      'modal.rare': 'R — Rara ou endêmica',
      'modal.close': 'Fechar',
      // Footer
      'footer.about.title': 'Sobre o projeto',
      'footer.about.text': 'O Guia dos Campos é uma iniciativa do PELD BISC para divulgar e valorizar a flora dos campos de altitude de Santa Catarina.',
      'footer.about.cta': 'Saiba mais sobre o projeto →',
      'footer.links': 'Links rápidos',
      'footer.contact.title': 'Fale conosco',
      'footer.contact.cta': 'Entre em contato →',
      'footer.realizacao': 'Realização',
      'footer.apoio': 'Apoio',
      'footer.bottom': '© 2026 Guia Botânico dos Campos de Altitude — Este site foi realizado com recursos provenientes da FAPESC.',
      // Switcher
      'lang.switch.aria': 'Mudar idioma',
    },
    en: {
      'nav.open': 'Open menu',
      'nav.close': 'Close menu',
      'nav.tagline': 'Discover the flora of the highland grasslands of Santa Catarina',
      'nav.gallery': 'Gallery',
      'nav.about': 'About us',
      'nav.conservation': 'Grassland conservation',
      'nav.disturbances': 'Disturbances',
      'nav.guides': 'Field guides',
      'nav.library': 'Library',
      'nav.contribute': 'Contribute',
      'nav.contact': 'Contact',
      'hero.title': 'Botanical Guide to Grasslands',
      'hero.subtitle': 'EXPLORE THE FLORA OF HIGHLAND GRASSLANDS IN SOUTHERN BRAZIL',
      'hero.search.placeholder': 'Search by common name, family, genus, species, or any term that describes the plant',
      'hero.search.aria': 'Search',
      'hero.credit': 'Photo: Sofia Casali, São Joaquim National Park',
      'stats.species': 'Species',
      'stats.photos': 'Photos',
      'stats.contribute': 'Contribute to the site',
      'gallery.title': 'Photo gallery',
      'gallery.search.placeholder': 'Type here to search',
      'toolbar.sort': 'Sort',
      'toolbar.sort.label': 'Sort:',
      'toolbar.sort.family-az': 'Family A-Z',
      'toolbar.sort.family-za': 'Family Z-A',
      'toolbar.sort.name-az': 'Scientific name A-Z',
      'toolbar.sort.name-za': 'Scientific name Z-A',
      'toolbar.filter': 'Filter',
      'toolbar.filter.aria': 'Open filters',
      'filters.title': 'Filters',
      'filters.close': 'Close filters',
      'filters.color': 'Flower color',
      'filters.color.yellow': 'Yellow',
      'filters.color.blue': 'Blue',
      'filters.color.white': 'White',
      'filters.color.orange': 'Orange',
      'filters.color.lilac': 'Lilac',
      'filters.color.pink': 'Pink',
      'filters.color.purple': 'Purple',
      'filters.color.green': 'Green',
      'filters.color.red': 'Red',
      'filters.status': 'Conservation status',
      'filters.status.EX': 'Extinct',
      'filters.status.CR': 'Critically Endangered',
      'filters.status.EN': 'Endangered',
      'filters.status.VU': 'Vulnerable',
      'filters.status.NT': 'Near Threatened',
      'filters.status.LC': 'Least Concern',
      'filters.status.R': 'Rare or endemic',
      'filters.status.EXO': 'Exotic',
      'filters.stage': 'Successional stage (indicators)',
      'filters.stage.initial': 'Initial stage',
      'filters.stage.medium': 'Middle stage',
      'filters.stage.advanced': 'Advanced stage',
      'filters.stage.primary': 'Primary vegetation',
      'filters.family': 'Family',
      'filters.family.search': 'Search family…',
      'filters.apply': 'Apply',
      'filters.clear': 'Clear',
      'results.found.one': 'species found',
      'results.found.many': 'species found',
      'results.none': 'No species found with the selected filters.',
      'results.addphoto': 'Add photo',
      'download.xlsx': 'Download XLSX',
      'modal.popular': 'Common name:',
      'modal.rare': 'R — Rare or endemic',
      'modal.close': 'Close',
      'footer.about.title': 'About the project',
      'footer.about.text': 'Guia dos Campos is an initiative of PELD BISC to promote and celebrate the flora of the highland grasslands of Santa Catarina.',
      'footer.about.cta': 'Learn more about the project →',
      'footer.links': 'Quick links',
      'footer.contact.title': 'Contact',
      'footer.contact.cta': 'Get in touch →',
      'footer.realizacao': 'Produced by',
      'footer.apoio': 'Support',
      'footer.bottom': '© 2026 Highland Grasslands Botanical Guide — This site was produced with funding from FAPESC.',
      'lang.switch.aria': 'Change language',
    },
    es: {
      'nav.open': 'Abrir menú',
      'nav.close': 'Cerrar menú',
      'nav.tagline': 'Descubre la flora de los campos de altitud de Santa Catarina',
      'nav.gallery': 'Galería',
      'nav.about': 'Sobre nosotros',
      'nav.conservation': 'Conservación de los campos',
      'nav.disturbances': 'Disturbios',
      'nav.guides': 'Guías de campo',
      'nav.library': 'Biblioteca',
      'nav.contribute': 'Contribuye',
      'nav.contact': 'Contacto',
      'hero.title': 'Guía Botánica de los Campos',
      'hero.subtitle': 'DESCUBRE LA FLORA DE LOS CAMPOS DE ALTITUD DEL SUR DE BRASIL',
      'hero.search.placeholder': 'Busca por nombre común, familia, género, especie o cualquier término que describa la planta',
      'hero.search.aria': 'Buscar',
      'hero.credit': 'Fotografía: Sofia Casali, Parque Nacional de São Joaquim',
      'stats.species': 'Especies',
      'stats.photos': 'Fotos',
      'stats.contribute': 'Contribuye al sitio',
      'gallery.title': 'Galería de fotos',
      'gallery.search.placeholder': 'Escribe aquí para buscar',
      'toolbar.sort': 'Ordenar',
      'toolbar.sort.label': 'Ordenar:',
      'toolbar.sort.family-az': 'Familia A-Z',
      'toolbar.sort.family-za': 'Familia Z-A',
      'toolbar.sort.name-az': 'Nombre científico A-Z',
      'toolbar.sort.name-za': 'Nombre científico Z-A',
      'toolbar.filter': 'Filtrar',
      'toolbar.filter.aria': 'Abrir filtros',
      'filters.title': 'Filtros',
      'filters.close': 'Cerrar filtros',
      'filters.color': 'Color de la flor',
      'filters.color.yellow': 'Amarillo',
      'filters.color.blue': 'Azul',
      'filters.color.white': 'Blanco',
      'filters.color.orange': 'Naranja',
      'filters.color.lilac': 'Lila',
      'filters.color.pink': 'Rosa',
      'filters.color.purple': 'Morado',
      'filters.color.green': 'Verde',
      'filters.color.red': 'Rojo',
      'filters.status': 'Estado de conservación',
      'filters.status.EX': 'Extinta',
      'filters.status.CR': 'En Peligro Crítico',
      'filters.status.EN': 'En Peligro',
      'filters.status.VU': 'Vulnerable',
      'filters.status.NT': 'Casi Amenazada',
      'filters.status.LC': 'Preocupación Menor',
      'filters.status.R': 'Rara o endémica',
      'filters.status.EXO': 'Exótica',
      'filters.stage': 'Etapa sucesional (indicadoras)',
      'filters.stage.initial': 'Etapa inicial',
      'filters.stage.medium': 'Etapa media',
      'filters.stage.advanced': 'Etapa avanzada',
      'filters.stage.primary': 'Vegetación primaria',
      'filters.family': 'Familia',
      'filters.family.search': 'Buscar familia…',
      'filters.apply': 'Aplicar',
      'filters.clear': 'Limpiar',
      'results.found.one': 'especie encontrada',
      'results.found.many': 'especies encontradas',
      'results.none': 'No se encontraron especies con los filtros seleccionados.',
      'results.addphoto': 'Agregar foto',
      'download.xlsx': 'Descargar XLSX',
      'modal.popular': 'Nombre común:',
      'modal.rare': 'R — Rara o endémica',
      'modal.close': 'Cerrar',
      'footer.about.title': 'Sobre el proyecto',
      'footer.about.text': 'Guia dos Campos es una iniciativa del PELD BISC para difundir y valorar la flora de los campos de altitud de Santa Catarina.',
      'footer.about.cta': 'Conoce más sobre el proyecto →',
      'footer.links': 'Enlaces rápidos',
      'footer.contact.title': 'Contacto',
      'footer.contact.cta': 'Ponte en contacto →',
      'footer.realizacao': 'Realización',
      'footer.apoio': 'Apoyo',
      'footer.bottom': '© 2026 Guía Botánica de los Campos de Altitud — Este sitio se realizó con recursos de la FAPESC.',
      'lang.switch.aria': 'Cambiar idioma',
    },
  };

  const SUPPORTED = ['pt', 'en', 'es'];

  function getLang() {
    const saved = localStorage.getItem('lang');
    if (saved && SUPPORTED.includes(saved)) return saved;
    return 'pt';
  }

  function t(key) {
    const lang = getLang();
    return (DICT[lang] && DICT[lang][key]) || DICT.pt[key] || key;
  }

  function apply() {
    const lang = getLang();
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = (DICT[lang] && DICT[lang][key]) != null ? DICT[lang][key] : DICT.pt[key];
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = (DICT[lang] && DICT[lang][key]) != null ? DICT[lang][key] : DICT.pt[key];
      if (val != null) el.setAttribute('placeholder', val);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      const val = (DICT[lang] && DICT[lang][key]) != null ? DICT[lang][key] : DICT.pt[key];
      if (val != null) el.setAttribute('aria-label', val);
    });

    // Atualiza o label do proprio switcher
    const curBtn = document.querySelector('.lang-switcher-current');
    if (curBtn) curBtn.textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-switcher-list li').forEach(function (li) {
      li.classList.toggle('active', li.dataset.lang === lang);
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem('lang', lang);
    apply();
    if (typeof window.i18nRerender === 'function') {
      try { window.i18nRerender(); } catch (e) { /* silencio */ }
    }
  }

  function injectSwitcher() {
    const header = document.querySelector('.site-header');
    const toggle = document.getElementById('navToggle');
    if (!header || !toggle) return;

    // Agrupa o botao de idioma e o hamburger numa caixa unica alinhada a direita
    let actions = header.querySelector('.header-actions');
    if (!actions) {
      actions = document.createElement('div');
      actions.className = 'header-actions';
      toggle.parentNode.insertBefore(actions, toggle);
      actions.appendChild(toggle);
    }

    if (document.getElementById('langSwitcher')) return;

    const lang = getLang();
    const wrap = document.createElement('div');
    wrap.className = 'lang-switcher';
    wrap.id = 'langSwitcher';
    wrap.innerHTML =
      '<button type="button" class="lang-switcher-btn" aria-label="' + t('lang.switch.aria') + '" aria-haspopup="listbox" aria-expanded="false">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<circle cx="12" cy="12" r="10"/>' +
          '<path d="M2 12h20"/>' +
          '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' +
        '</svg>' +
        '<span class="lang-switcher-current">' + lang.toUpperCase() + '</span>' +
      '</button>' +
      '<ul class="lang-switcher-list" role="listbox">' +
        '<li data-lang="pt" role="option" tabindex="0">Português</li>' +
        '<li data-lang="en" role="option" tabindex="0">English</li>' +
        '<li data-lang="es" role="option" tabindex="0">Español</li>' +
      '</ul>';
    actions.insertBefore(wrap, toggle);

    const btn = wrap.querySelector('.lang-switcher-btn');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    wrap.querySelectorAll('.lang-switcher-list li').forEach(function (li) {
      li.addEventListener('click', function () {
        setLang(li.dataset.lang);
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setLang(li.dataset.lang);
          wrap.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wrap.classList.contains('open')) {
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  window.i18n = { t: t, setLang: setLang, getLang: getLang, apply: apply };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { injectSwitcher(); apply(); });
  } else {
    injectSwitcher();
    apply();
  }
})();
