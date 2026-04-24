// ============================================================
// i18n.js — Tradução da interface (PT / EN / ES)
// ------------------------------------------------------------
// Uso em uma página:
//   <script src="i18n.js" defer></script>
//   Marcar elementos com data-i18n="chave" (troca textContent),
//   data-i18n-placeholder="chave" (troca placeholder),
//   data-i18n-aria="chave" (troca aria-label),
//   data-i18n-title="chave" (troca title/tooltip).
// Para textos gerados via JS: window.i18n.t('chave')
// Re-render automatico ao trocar idioma: exponha window.i18nRerender = fn.
// Em paginas sem .site-header, o botao de idioma aparece flutuando
// no canto superior direito.
// ============================================================
(function () {
  const DICT = {
    pt: {
      // ---- Navegacao (header) ----
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

      // ---- Hero index ----
      'hero.title': 'Guia Botânico dos Campos',
      'hero.subtitle': 'DESCUBRA A FLORA DOS CAMPOS DE ALTITUDE DO SUL DO BRASIL',
      'hero.search.placeholder': 'Pesquise por nome popular, família, gênero, espécie, ou qualquer termo que descreva a planta',
      'hero.search.aria': 'Pesquisar',
      'hero.credit': 'Fotografia: Sofia Casali, Parque Nacional de São Joaquim',

      // ---- Stats ----
      'stats.species': 'Espécies',
      'stats.photos': 'Fotos',
      'stats.contribute': 'Contribua para o site',

      // ---- Toolbar da galeria (index) ----
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

      // ---- Filtros (index) ----
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

      // ---- Resultados dinamicos (index) ----
      'results.found.one': 'espécie encontrada',
      'results.found.many': 'espécies encontradas',
      'results.none': 'Nenhuma espécie encontrada com os filtros selecionados.',
      'results.addphoto': 'Adicionar foto',
      'download.xlsx': 'Baixar XLSX',

      // ---- Modal (index) ----
      'modal.popular': 'Nome popular:',
      'modal.rare': 'R — Rara ou endêmica',
      'modal.close': 'Fechar',

      // ---- Footer ----
      'footer.about.title': 'Sobre o projeto',
      'footer.about.text': 'O Guia dos Campos é uma iniciativa do PELD BISC para divulgar e valorizar a flora dos campos de altitude de Santa Catarina.',
      'footer.about.cta': 'Saiba mais sobre o projeto →',
      'footer.links': 'Links rápidos',
      'footer.contact.title': 'Fale conosco',
      'footer.contact.cta': 'Entre em contato →',
      'footer.realizacao': 'Realização',
      'footer.apoio': 'Apoio',
      'footer.bottom': '© 2026 Guia Botânico dos Campos de Altitude — Este site foi realizado com recursos provenientes da FAPESC.',

      // ---- Paginas em manutencao (sobre / conservacao / disturbios / guias) ----
      'maintenance.title': 'Em manutenção',
      'maintenance.subtitle': 'Esta página está temporariamente indisponível. Em breve, novidades.',

      // ---- Biblioteca ----
      'bib.hero.title': 'Biblioteca',
      'bib.hero.subtitle': 'ACESSE OS MATERIAIS DE REFERÊNCIA USADOS NA CRIAÇÃO DESTE PROJETO',
      'bib.title': 'Biblioteca',
      'bib.search.placeholder': 'Pesquise por autor, título, palavra-chave ou tema',
      'bib.sort.recent': 'Mais recente',
      'bib.sort.old': 'Mais antigo',
      'bib.sort.title-az': 'Título A-Z',
      'bib.sort.title-za': 'Título Z-A',
      'bib.filter.category': 'Navegue por categoria',
      'bib.cat.books': 'Livros',
      'bib.cat.academic': 'Trabalhos Acadêmicos',
      'bib.cat.publications': 'Publicações',
      'bib.cat.legislation': 'Legislação e políticas',
      'bib.cat.database': 'Base de dados',
      'bib.cat.other': 'Outros',
      'bib.info.card.title': 'Ajude a manter este guia atualizado!',
      'bib.info.card.text': 'Sugira referências ou materiais que podem enriquecer nosso conteúdo.',
      'bib.info.card.cta': 'Contribuir',
      'bib.results.found.one': 'referência encontrada',
      'bib.results.found.many': 'referências encontradas',
      'bib.results.none': 'Nenhuma referência encontrada com os filtros selecionados.',
      'bib.ref.open': 'Abrir',

      // ---- Contato ----
      'contato.back': '← Voltar ao site',
      'contato.title': 'Entre em contato',
      'contato.lead': 'Envie sugestões, dúvidas ou comentários sobre o Guia Botânico dos Campos. Vamos responder pelo email que você informar.',
      'contato.name': 'Nome *',
      'contato.email': 'Endereço de Email *',
      'contato.message': 'Mensagem *',
      'contato.send': 'Enviar',

      // ---- Contribuir (foto) ----
      'contrib.back': '← Voltar à galeria',
      'contrib.title': 'Contribuir com uma foto',
      'contrib.lead': 'Obrigada pela contribuição! Sua foto será revisada antes de aparecer no site. Preencha os campos abaixo e envie.',
      'contrib.f.nome': 'Nome científico *',
      'contrib.f.nome.ph': 'Ex: Baccharis crispa',
      'contrib.f.familia': 'Família *',
      'contrib.f.familia.ph': 'Ex: ASTERACEAE',
      'contrib.f.nomePopular': 'Nome popular',
      'contrib.f.optional': '(opcional)',
      'contrib.f.fotos': 'Fotos *',
      'contrib.f.fotos.hint': 'JPG, PNG ou WebP. Máx 10 MB cada.',
      'contrib.f.local': 'Local da fotografia *',
      'contrib.f.local.ph': 'Digite bairro, cidade ou endereço',
      'contrib.f.fotografo': 'Fotógrafo *',
      'contrib.f.fotografo.ph': 'Nome de quem tirou a foto',
      'contrib.f.identificador': 'Identificador *',
      'contrib.f.identificador.ph': 'Nome de quem identificou a espécie',
      'contrib.f.descricao': 'Descrição / observações',
      'contrib.f.descricao.ph': 'Data, hábitat, outras observações...',
      'contrib.f.contribuidor': 'Seu nome *',
      'contrib.f.emailContato': 'Seu email',
      'contrib.f.emailContato.hint': '(opcional — caso precisemos esclarecer algo)',
      'contrib.submit': 'Enviar contribuição',
      'contrib.submitting': 'Enviando...',
      'contrib.success': 'Obrigada! Sua contribuição foi enviada e está aguardando aprovação.',
      'contrib.error.prefix': 'Erro: ',

      // ---- Contribuir referencia ----
      'contribRef.back': '← Voltar à biblioteca',
      'contribRef.title': 'Contribuir com referência',
      'contribRef.lead': 'Ajude a manter este guia atualizado! Sugira referências ou materiais que podem enriquecer nosso conteúdo. Sua sugestão será revisada antes de aparecer no site.',
      'contribRef.f.titulo': 'Título *',
      'contribRef.f.titulo.ph': 'Ex: Guia de plantas campestres dos Aparados da Serra',
      'contribRef.f.referencia': 'Referência / Citação *',
      'contribRef.f.referencia.ph': 'Ex: 2. ed. Porto Alegre: Rede Campos Sulinos — UFRGS. 136 p. ISBN 978-85-63843-24-1.',
      'contribRef.f.autores': 'Autores *',
      'contribRef.f.autores.ph': 'Ex: Boldrini, I. et al.',
      'contribRef.f.link': 'Link',
      'contribRef.f.categoria': 'Categoria *',
      'contribRef.cat.livros': 'Livros',
      'contribRef.cat.academicos': 'Trabalhos Acadêmicos',
      'contribRef.cat.publicacoes': 'Publicações',
      'contribRef.cat.legislacao': 'Legislação e políticas',
      'contribRef.cat.baseDados': 'Base de dados',
      'contribRef.cat.outros': 'Outros',
      'contribRef.f.anexo': 'Anexo',
      'contribRef.f.anexo.hint': '(opcional — PDF, imagem ou documento. Máx 10 MB)',
      'contribRef.success': 'Obrigada! Sua sugestão foi enviada e está aguardando aprovação.',

      // ---- Especie (ficha individual) ----
      'especie.back': '← Voltar à galeria',
      'especie.notFound': 'Espécie não encontrada.',
      'especie.explore': 'Explore mais espécies',
      'especie.info.nome': 'Nome científico',
      'especie.info.nomePopular': 'Nome popular',
      'especie.info.sinonimos': 'Sinônimos',
      'especie.info.familia': 'Família',
      'especie.info.tipoFolha': 'Tipo de folha',
      'especie.info.margemLimbo': 'Margem do limbo',
      'especie.info.filotaxia': 'Filotaxia',
      'especie.info.formaVida': 'Forma de vida',
      'especie.info.substrato': 'Substrato',
      'especie.info.distribuicao': 'Distribuição geográfica',
      'especie.info.conservacao': 'Estado de conservação',
      'especie.info.indicadora': 'Indicadora de estágio sucessional?',
      'especie.info.descricao': 'Descrição',
      'especie.rare': 'Rara ou endêmica',
      'especie.rare.brazil': 'Rara ou endêmica <em>*no Brasil</em>',
      'especie.caption.photo': 'Fotografia',
      'especie.caption.location': 'Local',
      'especie.lb.close': 'Fechar',
      'especie.lb.download': 'Baixar foto',
      'especie.lb.prev': 'Anterior',
      'especie.lb.next': 'Próxima',
      'especie.lb.zoomIn': 'Aumentar zoom',
      'especie.lb.zoomOut': 'Diminuir zoom',
      'especie.lb.zoomReset': 'Ajustar à tela',
      'especie.lb.of': 'de',
      'especie.carousel.page': 'Página',

      // ---- Switcher ----
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

      'maintenance.title': 'Under maintenance',
      'maintenance.subtitle': 'This page is temporarily unavailable. New content coming soon.',

      'bib.hero.title': 'Library',
      'bib.hero.subtitle': 'ACCESS THE REFERENCE MATERIALS USED TO BUILD THIS PROJECT',
      'bib.title': 'Library',
      'bib.search.placeholder': 'Search by author, title, keyword or topic',
      'bib.sort.recent': 'Newest',
      'bib.sort.old': 'Oldest',
      'bib.sort.title-az': 'Title A-Z',
      'bib.sort.title-za': 'Title Z-A',
      'bib.filter.category': 'Browse by category',
      'bib.cat.books': 'Books',
      'bib.cat.academic': 'Academic works',
      'bib.cat.publications': 'Publications',
      'bib.cat.legislation': 'Legislation and policies',
      'bib.cat.database': 'Databases',
      'bib.cat.other': 'Other',
      'bib.info.card.title': 'Help keep this guide up to date!',
      'bib.info.card.text': 'Suggest references or materials that can enrich our content.',
      'bib.info.card.cta': 'Contribute',
      'bib.results.found.one': 'reference found',
      'bib.results.found.many': 'references found',
      'bib.results.none': 'No references found with the selected filters.',
      'bib.ref.open': 'Open',

      'contato.back': '← Back to site',
      'contato.title': 'Get in touch',
      'contato.lead': 'Send suggestions, questions or comments about the Botanical Guide to Grasslands. We will reply to the email you provide.',
      'contato.name': 'Name *',
      'contato.email': 'Email address *',
      'contato.message': 'Message *',
      'contato.send': 'Send',

      'contrib.back': '← Back to gallery',
      'contrib.title': 'Contribute a photo',
      'contrib.lead': 'Thank you for contributing! Your photo will be reviewed before appearing on the site. Fill in the fields below and submit.',
      'contrib.f.nome': 'Scientific name *',
      'contrib.f.nome.ph': 'E.g.: Baccharis crispa',
      'contrib.f.familia': 'Family *',
      'contrib.f.familia.ph': 'E.g.: ASTERACEAE',
      'contrib.f.nomePopular': 'Common name',
      'contrib.f.optional': '(optional)',
      'contrib.f.fotos': 'Photos *',
      'contrib.f.fotos.hint': 'JPG, PNG or WebP. Max 10 MB each.',
      'contrib.f.local': 'Photo location *',
      'contrib.f.local.ph': 'Type neighborhood, city or address',
      'contrib.f.fotografo': 'Photographer *',
      'contrib.f.fotografo.ph': 'Name of the person who took the photo',
      'contrib.f.identificador': 'Identifier *',
      'contrib.f.identificador.ph': 'Name of the person who identified the species',
      'contrib.f.descricao': 'Description / notes',
      'contrib.f.descricao.ph': 'Date, habitat, other observations...',
      'contrib.f.contribuidor': 'Your name *',
      'contrib.f.emailContato': 'Your email',
      'contrib.f.emailContato.hint': '(optional — in case we need to clarify something)',
      'contrib.submit': 'Submit contribution',
      'contrib.submitting': 'Submitting...',
      'contrib.success': 'Thank you! Your contribution has been submitted and is awaiting approval.',
      'contrib.error.prefix': 'Error: ',

      'contribRef.back': '← Back to library',
      'contribRef.title': 'Contribute a reference',
      'contribRef.lead': 'Help keep this guide up to date! Suggest references or materials that can enrich our content. Your suggestion will be reviewed before appearing on the site.',
      'contribRef.f.titulo': 'Title *',
      'contribRef.f.titulo.ph': 'E.g.: Guia de plantas campestres dos Aparados da Serra',
      'contribRef.f.referencia': 'Reference / Citation *',
      'contribRef.f.referencia.ph': 'E.g.: 2. ed. Porto Alegre: Rede Campos Sulinos — UFRGS. 136 p. ISBN 978-85-63843-24-1.',
      'contribRef.f.autores': 'Authors *',
      'contribRef.f.autores.ph': 'E.g.: Boldrini, I. et al.',
      'contribRef.f.link': 'Link',
      'contribRef.f.categoria': 'Category *',
      'contribRef.cat.livros': 'Books',
      'contribRef.cat.academicos': 'Academic works',
      'contribRef.cat.publicacoes': 'Publications',
      'contribRef.cat.legislacao': 'Legislation and policies',
      'contribRef.cat.baseDados': 'Databases',
      'contribRef.cat.outros': 'Other',
      'contribRef.f.anexo': 'Attachment',
      'contribRef.f.anexo.hint': '(optional — PDF, image or document. Max 10 MB)',
      'contribRef.success': 'Thank you! Your suggestion has been submitted and is awaiting approval.',

      'especie.back': '← Back to gallery',
      'especie.notFound': 'Species not found.',
      'especie.explore': 'Explore more species',
      'especie.info.nome': 'Scientific name',
      'especie.info.nomePopular': 'Common name',
      'especie.info.sinonimos': 'Synonyms',
      'especie.info.familia': 'Family',
      'especie.info.tipoFolha': 'Leaf type',
      'especie.info.margemLimbo': 'Leaf margin',
      'especie.info.filotaxia': 'Phyllotaxis',
      'especie.info.formaVida': 'Life form',
      'especie.info.substrato': 'Substrate',
      'especie.info.distribuicao': 'Geographic distribution',
      'especie.info.conservacao': 'Conservation status',
      'especie.info.indicadora': 'Successional stage indicator?',
      'especie.info.descricao': 'Description',
      'especie.rare': 'Rare or endemic',
      'especie.rare.brazil': 'Rare or endemic <em>*in Brazil</em>',
      'especie.caption.photo': 'Photo',
      'especie.caption.location': 'Location',
      'especie.lb.close': 'Close',
      'especie.lb.download': 'Download photo',
      'especie.lb.prev': 'Previous',
      'especie.lb.next': 'Next',
      'especie.lb.zoomIn': 'Zoom in',
      'especie.lb.zoomOut': 'Zoom out',
      'especie.lb.zoomReset': 'Fit to screen',
      'especie.lb.of': 'of',
      'especie.carousel.page': 'Page',

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

      'maintenance.title': 'En mantenimiento',
      'maintenance.subtitle': 'Esta página está temporalmente no disponible. Pronto, novedades.',

      'bib.hero.title': 'Biblioteca',
      'bib.hero.subtitle': 'ACCEDE A LOS MATERIALES DE REFERENCIA USADOS EN LA CREACIÓN DE ESTE PROYECTO',
      'bib.title': 'Biblioteca',
      'bib.search.placeholder': 'Busca por autor, título, palabra clave o tema',
      'bib.sort.recent': 'Más reciente',
      'bib.sort.old': 'Más antiguo',
      'bib.sort.title-az': 'Título A-Z',
      'bib.sort.title-za': 'Título Z-A',
      'bib.filter.category': 'Navega por categoría',
      'bib.cat.books': 'Libros',
      'bib.cat.academic': 'Trabajos académicos',
      'bib.cat.publications': 'Publicaciones',
      'bib.cat.legislation': 'Legislación y políticas',
      'bib.cat.database': 'Bases de datos',
      'bib.cat.other': 'Otros',
      'bib.info.card.title': '¡Ayúdanos a mantener esta guía actualizada!',
      'bib.info.card.text': 'Sugiere referencias o materiales que puedan enriquecer nuestro contenido.',
      'bib.info.card.cta': 'Contribuir',
      'bib.results.found.one': 'referencia encontrada',
      'bib.results.found.many': 'referencias encontradas',
      'bib.results.none': 'No se encontraron referencias con los filtros seleccionados.',
      'bib.ref.open': 'Abrir',

      'contato.back': '← Volver al sitio',
      'contato.title': 'Ponte en contacto',
      'contato.lead': 'Envía sugerencias, dudas o comentarios sobre la Guía Botánica de los Campos. Responderemos al email que nos indiques.',
      'contato.name': 'Nombre *',
      'contato.email': 'Dirección de email *',
      'contato.message': 'Mensaje *',
      'contato.send': 'Enviar',

      'contrib.back': '← Volver a la galería',
      'contrib.title': 'Contribuir con una foto',
      'contrib.lead': '¡Gracias por tu contribución! Tu foto será revisada antes de aparecer en el sitio. Rellena los campos abajo y envía.',
      'contrib.f.nome': 'Nombre científico *',
      'contrib.f.nome.ph': 'Ej.: Baccharis crispa',
      'contrib.f.familia': 'Familia *',
      'contrib.f.familia.ph': 'Ej.: ASTERACEAE',
      'contrib.f.nomePopular': 'Nombre común',
      'contrib.f.optional': '(opcional)',
      'contrib.f.fotos': 'Fotos *',
      'contrib.f.fotos.hint': 'JPG, PNG o WebP. Máx 10 MB cada una.',
      'contrib.f.local': 'Lugar de la fotografía *',
      'contrib.f.local.ph': 'Escribe barrio, ciudad o dirección',
      'contrib.f.fotografo': 'Fotógrafo *',
      'contrib.f.fotografo.ph': 'Nombre de quien tomó la foto',
      'contrib.f.identificador': 'Identificador *',
      'contrib.f.identificador.ph': 'Nombre de quien identificó la especie',
      'contrib.f.descricao': 'Descripción / observaciones',
      'contrib.f.descricao.ph': 'Fecha, hábitat, otras observaciones...',
      'contrib.f.contribuidor': 'Tu nombre *',
      'contrib.f.emailContato': 'Tu email',
      'contrib.f.emailContato.hint': '(opcional — en caso de tener que aclarar algo)',
      'contrib.submit': 'Enviar contribución',
      'contrib.submitting': 'Enviando...',
      'contrib.success': '¡Gracias! Tu contribución fue enviada y está esperando aprobación.',
      'contrib.error.prefix': 'Error: ',

      'contribRef.back': '← Volver a la biblioteca',
      'contribRef.title': 'Contribuir con una referencia',
      'contribRef.lead': '¡Ayúdanos a mantener esta guía actualizada! Sugiere referencias o materiales que puedan enriquecer nuestro contenido. Tu sugerencia será revisada antes de aparecer en el sitio.',
      'contribRef.f.titulo': 'Título *',
      'contribRef.f.titulo.ph': 'Ej.: Guia de plantas campestres dos Aparados da Serra',
      'contribRef.f.referencia': 'Referencia / Cita *',
      'contribRef.f.referencia.ph': 'Ej.: 2. ed. Porto Alegre: Rede Campos Sulinos — UFRGS. 136 p. ISBN 978-85-63843-24-1.',
      'contribRef.f.autores': 'Autores *',
      'contribRef.f.autores.ph': 'Ej.: Boldrini, I. et al.',
      'contribRef.f.link': 'Enlace',
      'contribRef.f.categoria': 'Categoría *',
      'contribRef.cat.livros': 'Libros',
      'contribRef.cat.academicos': 'Trabajos académicos',
      'contribRef.cat.publicacoes': 'Publicaciones',
      'contribRef.cat.legislacao': 'Legislación y políticas',
      'contribRef.cat.baseDados': 'Bases de datos',
      'contribRef.cat.outros': 'Otros',
      'contribRef.f.anexo': 'Anexo',
      'contribRef.f.anexo.hint': '(opcional — PDF, imagen o documento. Máx 10 MB)',
      'contribRef.success': '¡Gracias! Tu sugerencia fue enviada y está esperando aprobación.',

      'especie.back': '← Volver a la galería',
      'especie.notFound': 'Especie no encontrada.',
      'especie.explore': 'Explora más especies',
      'especie.info.nome': 'Nombre científico',
      'especie.info.nomePopular': 'Nombre común',
      'especie.info.sinonimos': 'Sinónimos',
      'especie.info.familia': 'Familia',
      'especie.info.tipoFolha': 'Tipo de hoja',
      'especie.info.margemLimbo': 'Margen foliar',
      'especie.info.filotaxia': 'Filotaxis',
      'especie.info.formaVida': 'Forma de vida',
      'especie.info.substrato': 'Sustrato',
      'especie.info.distribuicao': 'Distribución geográfica',
      'especie.info.conservacao': 'Estado de conservación',
      'especie.info.indicadora': '¿Indicadora de etapa sucesional?',
      'especie.info.descricao': 'Descripción',
      'especie.rare': 'Rara o endémica',
      'especie.rare.brazil': 'Rara o endémica <em>*en Brasil</em>',
      'especie.caption.photo': 'Fotografía',
      'especie.caption.location': 'Lugar',
      'especie.lb.close': 'Cerrar',
      'especie.lb.download': 'Descargar foto',
      'especie.lb.prev': 'Anterior',
      'especie.lb.next': 'Siguiente',
      'especie.lb.zoomIn': 'Ampliar',
      'especie.lb.zoomOut': 'Reducir',
      'especie.lb.zoomReset': 'Ajustar a pantalla',
      'especie.lb.of': 'de',
      'especie.carousel.page': 'Página',

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
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      const val = (DICT[lang] && DICT[lang][key]) != null ? DICT[lang][key] : DICT.pt[key];
      if (val != null) el.innerHTML = val;
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
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-title');
      const val = (DICT[lang] && DICT[lang][key]) != null ? DICT[lang][key] : DICT.pt[key];
      if (val != null) el.setAttribute('title', val);
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

  function createSwitcherEl(lang) {
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
    return wrap;
  }

  function wireSwitcher(wrap) {
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

  function injectSwitcher() {
    if (document.getElementById('langSwitcher')) return;
    const lang = getLang();
    const toggle = document.getElementById('navToggle');
    const header = document.querySelector('.site-header');

    if (header && toggle) {
      // Paginas com header completo: agrupa com o hamburger
      let actions = header.querySelector('.header-actions');
      if (!actions) {
        actions = document.createElement('div');
        actions.className = 'header-actions';
        toggle.parentNode.insertBefore(actions, toggle);
        actions.appendChild(toggle);
      }
      const wrap = createSwitcherEl(lang);
      actions.insertBefore(wrap, toggle);
      wireSwitcher(wrap);
    } else {
      // Paginas sem header (forms): botao flutuante no canto superior direito
      const wrap = createSwitcherEl(lang);
      wrap.classList.add('lang-switcher-standalone');
      document.body.appendChild(wrap);
      wireSwitcher(wrap);
    }
  }

  window.i18n = { t: t, setLang: setLang, getLang: getLang, apply: apply };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { injectSwitcher(); apply(); });
  } else {
    injectSwitcher();
    apply();
  }
})();
