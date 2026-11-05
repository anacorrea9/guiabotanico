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
      'filters.biogeo': 'Origem e distribuição',
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
      'footer.about.text': 'O Guia dos Campos é uma iniciativa do PELD BISC para divulgar e valorizar a flora dos campos de altitude do sul do Brasil.',
      'footer.about.cta': 'Saiba mais sobre o projeto →',
      'footer.links': 'Links rápidos',
      'footer.contact.title': 'Fale conosco',
      'footer.contact.cta': 'Entre em contato →',
      'footer.realizacao': 'Realização',
      'footer.apoio': 'Apoio',
      'footer.bottom': '© 2026 Guia Botânico dos Campos de Altitude - Concepção e desenvolvimento: Ana Carolina Corrêa. Este site foi realizado com recursos provenientes da FAPESC.',

      // ---- Paginas em manutencao (sobre / conservacao / disturbios / guias) ----
      'sobre.title': "O PELD-BISC",
      'sobre.p1': "O PELD-BISC é um grupo de Pesquisa Ecológica de Longa Duração (PELD) que reúne pesquisadores da UFSC, UDESC, Epagri e ICMBio. Ele faz parte do INCT ClimaVeg, Instituto Nacional de Ciência e Tecnologia dedicado a estudos sobre biodiversidade, ecologia e mudanças climáticas, com ênfase na adaptação da vegetação nativa, financiado pelo CNPq (governo federal).",
      'sobre.p2': "Aqui, estudamos como as mudanças ambientais e os distúrbios afetam a biodiversidade e o funcionamento dos ecossistemas de Santa Catarina ao longo do tempo. Nossas pesquisas têm cinco objetivos principais:",
      'sobre.obj1': "<strong>Documentar</strong> a diversidade de espécies de Santa Catarina, incluindo a identificação de novas espécies;",
      'sobre.obj2': "<strong>Compreender</strong> como o fogo, o clima, a altitude e a perda de florestas influenciam a distribuição e a diversidade de comunidades de plantas, formigas e microbiota do solo;",
      'sobre.obj3': "<strong>Identificar</strong> como as interações entre espécies e sua história evolutiva influenciam sua sobrevivência e sua capacidade de responder às mudanças ambientais;",
      'sobre.obj4': "<strong>Avaliar</strong> os impactos de espécies invasoras e estratégias para restaurar áreas degradadas desses ecossistemas;",
      'sobre.obj5': "<strong>Promover</strong> atividades e ações de divulgação científica, relacionando ciência e arte em distintos setores da sociedade.",
      'sobre.p3': "Os estudos acontecem em duas unidades de conservação, o Parque Nacional de São Joaquim e o Parque Estadual da Serra Furada. Juntas, elas somam mais de 50 mil hectares de Floresta Ombrófila Densa, Floresta com Araucária, Matas Nebulares e Campos de Altitude do estado.",
      'sobre.foto.legenda': "Pesquisadoras em campanha de levantamento da biodiversidade dos campos. Fonte: PELD-BISC, 2026.",
      'sobre.more': "Veja mais sobre o nosso trabalho:",
      'sobre.allNews': "Ver todas as notícias do PELD-BISC →",
      'sobre.ig.chamada': "Também estamos no Instagram",
      'sobre.ig.title': "Fogo no Parque Nacional de São Joaquim (PNSJ)?!",
      'sobre.ig.p1': "Calma, pode ficar tranquilo que isso faz parte de uma das pesquisas do PELD-BISC",
      'sobre.ig.p2': "O manejo controlado do fogo é essencial para o equilíbrio do ecossistema e da biodiversidade, pois assim é possível administrar a quantidade de matéria seca orgânica acumulada no solo.",
      'sobre.ig.p3': "Pense assim: quanto maior for essa quantidade, mais fácil fica para o fogo se espalhar e atingir outros lugares como as florestas com araucárias, matas nebulares e até casas.",
      'sobre.ig.p4': "Por esse motivo, utilizando as técnicas de manejo tradicional dos campos que há séculos são feitas pelos proprietários rurais, os pesquisadores do PELD-BISC estão trabalhando para comprovar cientificamente que o manejo do fogo é essencial para o Parque Nacional de São Joaquim.",
      'sobre.ig.p5': "Ah! Mas é super importante reforçar que o fogo bom é aquele controlado e colocado no lugar e época corretos e, claro, com autorização do órgão competente.",
      'sobre.ig.audio': "Áudio original",
      'sobre.ig.and': "e",
      'sobre.ig.link': "Ver no Instagram",
      'sobre.guia.title': "O Guia dos Campos",
      'sobre.guia.p1': "O Guia dos Campos foi elaborado a partir de um trabalho minucioso de identificação botânica e de registros fotográficos feitos ao longo de cinco anos de levantamentos da vegetação dos campos de altitude, tanto nos blocos experimentais do PELD-BISC quanto em outras áreas do Parque Nacional de São Joaquim (PNSJ). A primeira versão do guia foi publicada em PDF. Agora, ampliamos o trabalho com este site, que torna a consulta mais dinâmica e abre espaço para a colaboração de quem também estuda e admira os campos.",
      'sobre.guia.p2': "Esperamos que o site contribua para a divulgação e valorização da diversidade campestre, e que seja útil para pesquisas, ensino e ações de conservação!",
      'sobre.guia.legenda': "Pesquisadoras em uma das campanhas de levantamento da biodiversidade dos campos. Fonte: PELD-BISC, 2025.",
      'sobre.equipe.tag': "Equipe",
      'sobre.equipe.title': "Conheça a equipe",
      'sobre.equipe.sub': "As pessoas por trás do Guia dos Campos.",
      'sobre.equipe.lattes': "Currículo Lattes",
      'sobre.equipe.m1.role': "Idealizadora do guia",
      'sobre.equipe.m1.bio': "Bióloga pela Universidade Federal de Santa Catarina (UFSC) e mestranda em Biologia Funcional e Ecologia pela Universidade de Toulouse, França. Tem interesse em ecologia vegetal e fez sua pesquisa de graduação no PELD-BISC, com campos de altitude!",
      'sobre.equipe.m2.role': "Ecóloga e doutoranda na UFSC",
      'sobre.equipe.m2.bio': "Ecóloga e doutoranda em Ecologia na UFSC, com experiência em biodiversidade campestre, regime de distúrbios, restauração ecológica e conservação dos campos de altitude.",
      'sobre.equipe.m3.role': "Ecólogo e pesquisador",
      'sobre.equipe.m3.bio': "Ecólogo e pesquisador do grupo PELD-BISC e do projeto INCT AdaptaVeg. Tem vasta experiência com campos de altitude e florestas de Santa Catarina!",
      'sobre.equipe.m4.role': "Coordenador do PELD-BISC",
      'sobre.equipe.m4.bio': "Atual coordenador do PELD-BISC. Professor e pesquisador na área de ecologia vegetal, incluindo populações e comunidades de plantas florestais e campestres.",
      'sobre.equipe.m5.role': "Colegas de campo e pesquisa",
      'sobre.equipe.agradecTitle': "Agradecimentos",
      'sobre.equipe.agradec': "Agradecemos também aos colegas que, ao longo das atividades de campo e pesquisa, contribuíram de diferentes formas para o conhecimento da diversidade dos Campos de Altitude: Ana Boeira Porto, Karolina Vieira Jardim, Amanda C. Stuermer, Sophia Kusterko Novaes, Jonata Silveira e Pedro Henrique Creplive Corrales.",
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
      'contato.success': 'Obrigada! Sua mensagem foi enviada. Responderemos pelo email informado.',

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
      'contrib.f.identificador': 'Identificação realizada por (Quem identificou esta planta?): *',
      'contrib.f.identificador.ph': 'Nome de quem identificou a espécie',
      'contrib.f.descricao': 'Descrição / observações',
      'contrib.f.descricao.ph': 'Data, hábitat, outras observações...',
      'contrib.f.contribuidor': 'Seu nome *',
      'contrib.f.emailContato': 'Seu email',
      'contrib.f.emailContato.hint': '(opcional, caso precisemos esclarecer algo)',
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
      'filters.biogeo': 'Origin and distribution',
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
      'footer.about.text': 'Guia dos Campos is an initiative of PELD BISC to promote and celebrate the flora of the highland grasslands of southern Brazil.',
      'footer.about.cta': 'Learn more about the project →',
      'footer.links': 'Quick links',
      'footer.contact.title': 'Contact',
      'footer.contact.cta': 'Get in touch →',
      'footer.realizacao': 'Produced by',
      'footer.apoio': 'Support',
      'footer.bottom': '© 2026 Highland Grasslands Botanical Guide - Concept and development: Ana Carolina Corrêa. This site was produced with funding from FAPESC.',

      'sobre.title': "PELD-BISC",
      'sobre.p1': "PELD-BISC is a Long-Term Ecological Research (PELD) group that brings together researchers from UFSC, UDESC, Epagri and ICMBio. It is part of INCT ClimaVeg, a National Institute of Science and Technology dedicated to studies on biodiversity, ecology and climate change, with an emphasis on the adaptation of native vegetation, funded by CNPq (Brazilian federal government).",
      'sobre.p2': "Here, we study how environmental change and disturbances affect biodiversity and ecosystem functioning in Santa Catarina over time. Our research has five main goals:",
      'sobre.obj1': "<strong>Document</strong> species diversity in Santa Catarina, including the identification of new species;",
      'sobre.obj2': "<strong>Understand</strong> how fire, climate, altitude and forest loss influence the distribution and diversity of plant, ant and soil microbial communities;",
      'sobre.obj3': "<strong>Identify</strong> how species interactions and evolutionary history influence their survival and their ability to respond to environmental change;",
      'sobre.obj4': "<strong>Assess</strong> the impacts of invasive species and strategies to restore degraded areas of these ecosystems;",
      'sobre.obj5': "<strong>Promote</strong> science outreach activities and actions, bringing together science and art across different sectors of society.",
      'sobre.p3': "The studies take place in two protected areas, São Joaquim National Park and Serra Furada State Park. Together they cover more than 50,000 hectares of Dense Ombrophilous Forest, Araucaria Forest, Cloud Forests and High-Altitude Grasslands in the state.",
      'sobre.foto.legenda': "Researchers during a biodiversity survey campaign in the grasslands. Source: PELD-BISC, 2026.",
      'sobre.more': "See more about our work:",
      'sobre.allNews': "See all PELD-BISC news →",
      'sobre.ig.chamada': "We are also on Instagram",
      'sobre.ig.title': "Fire in São Joaquim National Park (PNSJ)?!",
      'sobre.ig.p1': "Don't worry, this is part of one of PELD-BISC's research projects",
      'sobre.ig.p2': "Controlled fire management is essential for the balance of the ecosystem and its biodiversity, because it makes it possible to manage the amount of dry organic matter that builds up on the ground.",
      'sobre.ig.p3': "Think of it this way: the more of it there is, the easier it is for fire to spread and reach other places, such as Araucaria forests, cloud forests and even homes.",
      'sobre.ig.p4': "That is why, using traditional grassland management techniques practiced for centuries by local landowners, PELD-BISC researchers are working to scientifically show that fire management is essential for São Joaquim National Park.",
      'sobre.ig.p5': "Oh! And it is very important to stress that good fire is controlled fire, used in the right place and season and, of course, with authorization from the responsible agency.",
      'sobre.ig.audio': "Original audio",
      'sobre.ig.and': "and",
      'sobre.ig.link': "View on Instagram",
      'sobre.guia.title': "The Grasslands Guide",
      'sobre.guia.p1': "The Grasslands Guide was built from careful botanical identification work and photographic records gathered over five years of vegetation surveys in the high-altitude grasslands, both in the PELD-BISC experimental blocks and in other areas of São Joaquim National Park (PNSJ). The first version of the guide was published as a PDF. Now we have expanded the work with this website, which makes it easier to explore and opens space for contributions from everyone who also studies and admires the grasslands.",
      'sobre.guia.p2': "We hope this site helps share and value grassland diversity, and that it proves useful for research, teaching and conservation!",
      'sobre.guia.legenda': "Researchers during one of the biodiversity survey campaigns in the grasslands. Source: PELD-BISC, 2025.",
      'sobre.equipe.tag': "Team",
      'sobre.equipe.title': "Meet the team",
      'sobre.equipe.sub': "The people behind the Grasslands Guide.",
      'sobre.equipe.lattes': "Lattes CV",
      'sobre.equipe.m1.role': "Creator of the guide",
      'sobre.equipe.m1.bio': "Biologist from the Federal University of Santa Catarina (UFSC) and master's student in Functional Biology and Ecology at the University of Toulouse, France. She is interested in plant ecology and did her undergraduate research at PELD-BISC, on high-altitude grasslands!",
      'sobre.equipe.m2.role': "Ecologist and PhD student at UFSC",
      'sobre.equipe.m2.bio': "Ecologist and PhD student in Ecology at UFSC, with experience in grassland biodiversity, disturbance regimes, ecological restoration and conservation of high-altitude grasslands.",
      'sobre.equipe.m3.role': "Ecologist and researcher",
      'sobre.equipe.m3.bio': "Ecologist and researcher in the PELD-BISC group and the INCT AdaptaVeg project. He has extensive experience with high-altitude grasslands and forests of Santa Catarina!",
      'sobre.equipe.m4.role': "PELD-BISC coordinator",
      'sobre.equipe.m4.bio': "Current coordinator of PELD-BISC. Professor and researcher in plant ecology, including populations and communities of forest and grassland plants.",
      'sobre.equipe.m5.role': "Field and research colleagues",
      'sobre.equipe.agradecTitle': "Acknowledgements",
      'sobre.equipe.agradec': "We also thank the colleagues who, throughout fieldwork and research, contributed in different ways to our knowledge of the diversity of the high-altitude grasslands: Ana Boeira Porto, Karolina Vieira Jardim, Amanda C. Stuermer, Sophia Kusterko Novaes, Jonata Silveira and Pedro Henrique Creplive Corrales.",
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
      'contato.success': 'Thank you! Your message was sent. We will reply to the email you provided.',

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
      'contrib.f.identificador': 'Identified by (Who identified this plant?): *',
      'contrib.f.identificador.ph': 'Name of the person who identified the species',
      'contrib.f.descricao': 'Description / notes',
      'contrib.f.descricao.ph': 'Date, habitat, other observations...',
      'contrib.f.contribuidor': 'Your name *',
      'contrib.f.emailContato': 'Your email',
      'contrib.f.emailContato.hint': '(optional, in case we need to clarify something)',
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
      'filters.biogeo': 'Origen y distribución',
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
      'footer.about.text': 'Guia dos Campos es una iniciativa del PELD BISC para difundir y valorar la flora de los campos de altitud del sur de Brasil.',
      'footer.about.cta': 'Conoce más sobre el proyecto →',
      'footer.links': 'Enlaces rápidos',
      'footer.contact.title': 'Contacto',
      'footer.contact.cta': 'Ponte en contacto →',
      'footer.realizacao': 'Realización',
      'footer.apoio': 'Apoyo',
      'footer.bottom': '© 2026 Guía Botánica de los Campos de Altitud - Concepción y desarrollo: Ana Carolina Corrêa. Este sitio se realizó con recursos de la FAPESC.',

      'sobre.title': "El PELD-BISC",
      'sobre.p1': "El PELD-BISC es un grupo de Investigación Ecológica de Larga Duración (PELD) que reúne investigadores de la UFSC, UDESC, Epagri e ICMBio. Forma parte del INCT ClimaVeg, Instituto Nacional de Ciencia y Tecnología dedicado a estudios sobre biodiversidad, ecología y cambio climático, con énfasis en la adaptación de la vegetación nativa, financiado por el CNPq (gobierno federal de Brasil).",
      'sobre.p2': "Aquí estudiamos cómo los cambios ambientales y los disturbios afectan la biodiversidad y el funcionamiento de los ecosistemas de Santa Catarina a lo largo del tiempo. Nuestras investigaciones tienen cinco objetivos principales:",
      'sobre.obj1': "<strong>Documentar</strong> la diversidad de especies de Santa Catarina, incluida la identificación de nuevas especies;",
      'sobre.obj2': "<strong>Comprender</strong> cómo el fuego, el clima, la altitud y la pérdida de bosques influyen en la distribución y la diversidad de comunidades de plantas, hormigas y microbiota del suelo;",
      'sobre.obj3': "<strong>Identificar</strong> cómo las interacciones entre especies y su historia evolutiva influyen en su supervivencia y en su capacidad de responder a los cambios ambientales;",
      'sobre.obj4': "<strong>Evaluar</strong> los impactos de las especies invasoras y estrategias para restaurar áreas degradadas de estos ecosistemas;",
      'sobre.obj5': "<strong>Promover</strong> actividades y acciones de divulgación científica, relacionando ciencia y arte en distintos sectores de la sociedad.",
      'sobre.p3': "Los estudios se realizan en dos unidades de conservación, el Parque Nacional de São Joaquim y el Parque Estadual da Serra Furada. Juntas suman más de 50 mil hectáreas de Bosque Ombrófilo Denso, Bosque de Araucaria, Bosques Nublados y Campos de Altitud del estado.",
      'sobre.foto.legenda': "Investigadoras en una campaña de relevamiento de la biodiversidad de los campos. Fuente: PELD-BISC, 2026.",
      'sobre.more': "Vea más sobre nuestro trabajo:",
      'sobre.allNews': "Ver todas las noticias del PELD-BISC →",
      'sobre.ig.chamada': "También estamos en Instagram",
      'sobre.ig.title': "¿¡Fuego en el Parque Nacional de São Joaquim (PNSJ)!?",
      'sobre.ig.p1': "Tranquilos, esto forma parte de una de las investigaciones del PELD-BISC",
      'sobre.ig.p2': "El manejo controlado del fuego es esencial para el equilibrio del ecosistema y de la biodiversidad, porque así es posible controlar la cantidad de materia orgánica seca acumulada en el suelo.",
      'sobre.ig.p3': "Piénselo así: cuanto mayor es esa cantidad, más fácil es que el fuego se propague y alcance otros lugares, como los bosques de araucaria, los bosques nublados e incluso viviendas.",
      'sobre.ig.p4': "Por eso, utilizando técnicas de manejo tradicional de los campos, practicadas desde hace siglos por los propietarios rurales, los investigadores del PELD-BISC trabajan para comprobar científicamente que el manejo del fuego es esencial para el Parque Nacional de São Joaquim.",
      'sobre.ig.p5': "¡Ah! Pero es muy importante recordar que el fuego bueno es el controlado, hecho en el lugar y la época correctos y, por supuesto, con autorización del órgano competente.",
      'sobre.ig.audio': "Audio original",
      'sobre.ig.and': "y",
      'sobre.ig.link': "Ver en Instagram",
      'sobre.guia.title': "La Guía de los Campos",
      'sobre.guia.p1': "La Guía de los Campos se elaboró a partir de un minucioso trabajo de identificación botánica y de registros fotográficos realizados a lo largo de cinco años de relevamientos de la vegetación de los campos de altitud, tanto en los bloques experimentales del PELD-BISC como en otras áreas del Parque Nacional de São Joaquim (PNSJ). La primera versión de la guía se publicó en PDF. Ahora ampliamos el trabajo con este sitio, que hace la consulta más dinámica y abre espacio para la colaboración de quienes también estudian y admiran los campos.",
      'sobre.guia.p2': "¡Esperamos que el sitio contribuya a la divulgación y valorización de la diversidad de los campos, y que sea útil para la investigación, la enseñanza y las acciones de conservación!",
      'sobre.guia.legenda': "Investigadoras en una de las campañas de relevamiento de la biodiversidad de los campos. Fuente: PELD-BISC, 2025.",
      'sobre.equipe.tag': "Equipo",
      'sobre.equipe.title': "Conozca al equipo",
      'sobre.equipe.sub': "Las personas detrás de la Guía de los Campos.",
      'sobre.equipe.lattes': "Currículum Lattes",
      'sobre.equipe.m1.role': "Creadora de la guía",
      'sobre.equipe.m1.bio': "Bióloga por la Universidad Federal de Santa Catarina (UFSC) y estudiante de maestría en Biología Funcional y Ecología en la Universidad de Toulouse, Francia. Le interesa la ecología vegetal e hizo su investigación de grado en el PELD-BISC, con campos de altitud.",
      'sobre.equipe.m2.role': "Ecóloga y doctoranda en la UFSC",
      'sobre.equipe.m2.bio': "Ecóloga y doctoranda en Ecología en la UFSC, con experiencia en biodiversidad de los campos, régimen de disturbios, restauración ecológica y conservación de los campos de altitud.",
      'sobre.equipe.m3.role': "Ecólogo e investigador",
      'sobre.equipe.m3.bio': "Ecólogo e investigador del grupo PELD-BISC y del proyecto INCT AdaptaVeg. Tiene amplia experiencia con campos de altitud y bosques de Santa Catarina.",
      'sobre.equipe.m4.role': "Coordinador del PELD-BISC",
      'sobre.equipe.m4.bio': "Actual coordinador del PELD-BISC. Profesor e investigador en ecología vegetal, incluyendo poblaciones y comunidades de plantas forestales y de campo.",
      'sobre.equipe.m5.role': "Colegas de campo e investigación",
      'sobre.equipe.agradecTitle': "Agradecimientos",
      'sobre.equipe.agradec': "Agradecemos también a los colegas que, a lo largo de las actividades de campo e investigación, contribuyeron de diferentes formas al conocimiento de la diversidad de los Campos de Altitud: Ana Boeira Porto, Karolina Vieira Jardim, Amanda C. Stuermer, Sophia Kusterko Novaes, Jonata Silveira y Pedro Henrique Creplive Corrales.",
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
      'contato.success': '¡Gracias! Tu mensaje fue enviado. Responderemos al correo que indicaste.',

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
      'contrib.f.identificador': 'Identificación realizada por (¿Quién identificó esta planta?): *',
      'contrib.f.identificador.ph': 'Nombre de quien identificó la especie',
      'contrib.f.descricao': 'Descripción / observaciones',
      'contrib.f.descricao.ph': 'Fecha, hábitat, otras observaciones...',
      'contrib.f.contribuidor': 'Tu nombre *',
      'contrib.f.emailContato': 'Tu email',
      'contrib.f.emailContato.hint': '(opcional, en caso de tener que aclarar algo)',
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

  function initialApply() {
    injectSwitcher();
    apply();
    if (typeof window.i18nRerender === 'function') {
      try { window.i18nRerender(); } catch (e) { /* silencio */ }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialApply);
  } else {
    initialApply();
  }
})();
