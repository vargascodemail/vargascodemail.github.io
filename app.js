// Vargas Code · variant + tweaks controller

const APPS = [
  {
    name: 'PeladaGo',
    tag: 'Esportes',
    color: '#16A34A',
    logo: 'assets/apps/app-peladago.png',
    desc: 'Organize sua pelada de futebol com facilidade. Monte times equilibrados, gerencie a lista de jogadores e faça o sorteio com um único toque.',
    url: 'https://play.google.com/store/apps/details?id=com.peladago',
  },
  {
    name: 'Frase.me',
    tag: 'Criatividade',
    color: '#D97706',
    logo: 'assets/apps/app-fraseme.png',
    desc: 'Salve as frases que te inspiram e compartilhe com quem você ama. Crie sua coleção pessoal e descubra novas citações todos os dias.',
    url: 'https://play.google.com/store/apps/details?id=com.frase.me',
  },
  {
    name: 'BibVoz',
    tag: 'Inglês com Bíblia',
    color: '#C2410C',
    logo: 'assets/apps/app-bibvoz.png',
    desc: 'Aprenda inglês com a Bíblia ouvindo trechos em inglês e português. Escolha voz, gênero, velocidade e repetições para adaptar a experiência ao seu ritmo.',
    url: 'https://play.google.com/store/apps/details?id=br.com.vargascode.bibvoz',
  },
  {
    name: 'Receitex',
    tag: 'Saúde',
    color: '#166534',
    logo: 'assets/apps/app-receitex.png',
    desc: 'Guarde suas receitas médicas com segurança e praticidade. Acompanhe relatórios de saúde e tenha todas as informações sempre à mão.',
    url: 'https://play.google.com/store/apps/details?id=br.com.vargascode.receitex',
  },
  {
    name: 'Buy and Hold',
    tag: 'Finanças',
    color: '#0284C7',
    logo: 'assets/apps/app-buyandhold.png',
    desc: 'Receba sugestões inteligentes de aportes mensais para sua estratégia de investimento. Invista com consistência e disciplina, mês a mês.',
    url: 'https://play.google.com/store/apps/details?id=com.buyandhold.investment',
  },
  {
    name: 'Quiz da Fé',
    tag: 'Religioso',
    color: '#7C3AED',
    logo: 'assets/apps/app-quizdafe.png',
    desc: 'Teste seus conhecimentos bíblicos com centenas de perguntas organizadas por categorias e níveis de dificuldade. Diversão para toda a família.',
    url: 'https://play.google.com/store/apps/details?id=br.com.vargascode.quizdafe',
  },
];

/* Livros à venda. preco + loja definem o CTA de compra; disponivel:false marca
   o título como "Em breve" (sem preço nem botão). */
const BOOKS = [
  {
    title: 'JavaScript DOM',
    tag: 'JavaScript · Frontend',
    cover: 'assets/livros/livro-javascript_dom.jpg',
    desc: 'Apostila didática para dominar a manipulação do DOM com JavaScript puro: seleção de elementos, eventos, AJAX e muito mais.',
    preco: 'R$ 9,90',
    loja: 'Google Play',
    url: 'https://play.google.com/store/books/details?id=bw0XEQAAQBAJ',
    disponivel: true,
  },
  {
    title: 'Lógica de Programação com JavaScript',
    tag: 'Lógica · JavaScript',
    cover: 'assets/livros/livro-javascript_logica.jpg',
    desc: 'Fundamentos sólidos de lógica de programação aplicados com JavaScript — variáveis, estruturas de controle, funções e algoritmos do zero.',
    preco: 'R$ 9,90',
    loja: 'Google Play',
    url: 'https://play.google.com/store/books/details?id=E-sWEQAAQBAJ',
    disponivel: true,
  },
  {
    title: 'Banco de Dados em 9 Passos: Do Modelo Conceitual à IA',
    tag: 'Banco de Dados',
    cover: 'assets/livros/livro-bd.jpg',
    desc: 'Da modelagem conceitual ao SQL avançado, passando por otimização, Power BI, datasets e inteligência artificial — um percurso completo em 9 etapas.',
    disponivel: false,
    url: 'https://ravarmes.github.io/curso-bd/',
  },
];

/* Cursos da plataforma cursos.vargascode.com.br
   acesso: 'gratuito' = todos os capítulos liberados · 'ebook' = Cap. 1 grátis,
   restante via código do e-book · disponivel:false = em breve. */
const CURSOS = [
  {
    code: 'POO2',
    nome: 'Programação Orientada a Objetos 2',
    subtitulo: 'JavaFX · JDBC · MVC · Threads · Sockets',
    desc: 'Do JavaFX ao JDBC: aplicações desktop completas com interfaces gráficas, persistência de dados, padrão MVC e programação concorrente e distribuída.',
    hue: 145, chroma: 0.15, nivel: 'Intermediário', horas: 20, capitulos: 5,
    acesso: 'gratuito', disponivel: true,
    url: 'https://cursos.vargascode.com.br/cursos/curso-poo2/',
  },
  {
    code: 'BD',
    nome: 'Banco de Dados',
    subtitulo: 'Do Modelo Conceitual à IA',
    desc: 'Do modelo conceitual à inteligência artificial: entidades e relacionamentos, SQL, otimização, Power BI, datasets para ML e prompts.',
    hue: 22, chroma: 0.16, nivel: 'Iniciante', horas: 28, capitulos: 9,
    acesso: 'ebook', disponivel: true,
    url: 'https://cursos.vargascode.com.br/cursos/curso-bd/',
  },
  {
    code: 'JSLOG',
    nome: 'JavaScript: Lógica de Programação',
    subtitulo: 'Variáveis · Decisões · Laços · Arrays · Funções',
    desc: 'Lógica de programação do zero com JavaScript: variáveis, condições, laços, funções e resolução de problemas reais no navegador.',
    hue: 55, chroma: 0.18, nivel: 'Iniciante', horas: 12, capitulos: 6,
    acesso: 'gratuito', disponivel: true,
    url: 'https://cursos.vargascode.com.br/cursos/curso-javascript/',
  },
  {
    code: 'JSDOM',
    nome: 'JavaScript DOM',
    subtitulo: 'Seletores · Eventos · Formulários · Práticas',
    desc: 'Selecione, crie e modifique elementos HTML com JavaScript puro: eventos, formulários, animações e práticas guiadas com o DOM.',
    hue: 50, chroma: 0.17, nivel: 'Iniciante', horas: 12, capitulos: 6,
    acesso: 'gratuito', disponivel: true,
    url: 'https://cursos.vargascode.com.br/cursos/curso-javascriptdom/',
  },
  {
    code: 'GRAF',
    nome: 'Teoria dos Grafos',
    subtitulo: 'Não Direcionados · Digrafos · AGM · Caminho Mínimo',
    desc: 'Fundamentos da Teoria dos Grafos: representações, conexidade, pontes e articulações, árvore geradora mínima (Kruskal e Prim) e caminhos mais curtos (Dijkstra, Bellman-Ford e Floyd-Warshall).',
    hue: 280, chroma: 0.16, nivel: 'Intermediário', horas: 16, capitulos: 4,
    acesso: 'gratuito', disponivel: true,
    url: 'https://cursos.vargascode.com.br/cursos/curso-grafos/',
  },
  {
    code: 'WEB',
    nome: 'Aplicações Web',
    subtitulo: 'HTML, CSS e JavaScript modernos',
    desc: 'Fundamentos sólidos de desenvolvimento web: marcação semântica, layouts responsivos e interatividade com JavaScript.',
    hue: 195, chroma: 0.14, nivel: 'Iniciante', horas: 14, capitulos: 7,
    acesso: 'gratuito', disponivel: false,
    url: 'https://cursos.vargascode.com.br/',
  },
  {
    code: 'SREC',
    nome: 'Sistemas de Recomendação',
    subtitulo: 'Filtragem Colaborativa e Baseada em Conteúdo',
    desc: 'Construa sistemas de recomendação do zero: filtragem colaborativa, baseada em conteúdo, fatoração de matrizes e avaliação de modelos.',
    hue: 335, chroma: 0.15, nivel: 'Avançado', horas: 14, capitulos: 7,
    acesso: 'gratuito', disponivel: false,
    url: 'https://cursos.vargascode.com.br/',
  },
  {
    code: 'AGEN',
    nome: 'Algoritmos Genéticos',
    subtitulo: 'Computação Evolutiva e Otimização',
    desc: 'Resolva problemas de otimização complexos com algoritmos genéticos: seleção, crossover, mutação e aplicações em scheduling e roteamento.',
    hue: 305, chroma: 0.15, nivel: 'Intermediário', horas: 10, capitulos: 5,
    acesso: 'gratuito', disponivel: true,
    url: 'https://cursos.vargascode.com.br/cursos/curso-ag/',
  },
];

/* Coleções de storybooks de storybooks.vargascode.com.br — cada coleção reúne
   10 storybooks ilustrados; o primeiro título sai como amostra grátis e a
   coleção completa é vendida na Hotmart. Preço único definido abaixo. */
const SB_BASE = 'https://storybooks.vargascode.com.br/';
const PRECO_STORYBOOK = 'R$ 29,90';
const COLECOES = [
  {
    nome: 'Heróis', amp: 'da', fim: 'Fé',
    lead: 'Dez histórias bíblicas reimaginadas em aquarela para tardes de leitura em família — a coragem, a fé e a esperança dos que andaram com Deus.',
    capa: 'storybook-colecao-herois/storybook-noe/images/noah_page1_good_man_1779073705704.png',
    hotmart: 'https://pay.hotmart.com/Q106216283Q?off=2crregmg',
    cor: 'var(--colecao-herois)',
  },
  {
    nome: 'Discípulos', amp: 'de', fim: 'Jesus', qtd: 12,
    lead: 'Doze histórias dos discípulos de Jesus inspiradas na série The Chosen — homens comuns, de personalidades marcantes, que deixaram tudo para seguir o Messias.',
    capa: 'storybook-colecao-discipulos/storybook-pedro/images/pedro_page1.png',
    hotmart: 'https://pay.hotmart.com/R106327299N',
    cor: 'var(--colecao-discipulos)',
  },
  {
    nome: 'Mulheres', amp: 'da', fim: 'Bíblia',
    lead: 'Dez histórias inspiradoras de mulheres de fé das Escrituras — lições de coragem, sabedoria e amor para ler e ouvir em família.',
    capa: 'storybook-colecao-mulheres/storybook-sara/images/sara_page1.png',
    hotmart: 'https://pay.hotmart.com/V106493775I',
    cor: 'var(--colecao-mulheres)',
  },
  {
    nome: 'Cidades', amp: 'da', fim: 'Bíblia',
    lead: 'Dez cidades das Escrituras e o que aconteceu entre seus muros — promessas, milagres e coragem, contados para ler e ouvir em família.',
    capa: 'storybook-colecao-cidades/storybook-belem/images/belem_page6.png',
    hotmart: 'https://pay.hotmart.com/W106224495W?off=5fnkp8zn',
    cor: 'var(--colecao-cidades)',
  },
  {
    nome: 'Flores', amp: 'da', fim: 'Bíblia',
    lead: 'Dez flores e plantas das Escrituras e as lições que elas guardam — do cuidado de Deus à pureza do coração, em ilustrações delicadas.',
    capa: 'storybook-colecao-flores/storybook-lirio-dos-vales/images/lirio_page1_1779284455568.png',
    hotmart: 'https://pay.hotmart.com/E106224375C',
    cor: 'var(--colecao-flores)',
  },
  {
    nome: 'Águas', amp: 'da', fim: 'Bíblia',
    lead: 'Dez milagres e passagens extraordinárias que aconteceram nas águas das Escrituras — rios e mares que testemunharam o poder e o cuidado de Deus.',
    capa: 'storybook-colecao-aguas/storybook-mar-da-galileia/images/galileia_page1.png',
    hotmart: 'https://pay.hotmart.com/A106494310F',
    cor: 'var(--colecao-aguas)',
  },
];
const SB_CATALOGO = SB_BASE + 'catalogo.html';

/* ============ RENDER ============ */

function appCardEditorial(a) {
  return `<article class="ed-card" style="--app-color:${a.color}">
    <div class="ed-card-banner">
      <div class="ed-card-icon">
        <img src="${a.logo}" alt="${a.name}">
      </div>
    </div>
    <div class="ed-card-body">
      <span class="ed-card-tag">${a.tag}</span>
      <h3 class="ed-card-name">${a.name}</h3>
      <p class="ed-card-desc">${a.desc}</p>
      <a href="${a.url}" class="ed-card-cta" target="_blank" rel="noopener noreferrer">Baixar na Google Play</a>
    </div>
  </article>`;
}
function bookCardEditorial(b) {
  const soon = b.disponivel === false;
  const foot = soon
    ? `<span class="ed-buy ed-buy--soon" aria-disabled="true">Em breve</span>`
    : `<div class="ed-buy-row">
        <span class="ed-price">${b.preco}</span>
        <a class="ed-buy" href="${b.url}" target="_blank" rel="noopener noreferrer">Comprar na ${b.loja} ↗</a>
      </div>`;
  return `<article class="ed-book${soon ? ' is-soon' : ''}">
    <div class="ed-book-cover">
      <img src="${b.cover}" alt="${b.title}" loading="lazy">
      ${soon ? '<span class="ed-book-ribbon">Em breve</span>' : ''}
    </div>
    <div class="ed-book-meta">
      <span class="ed-book-tag">${b.tag}</span>
      <h3 class="ed-book-name">${b.title}</h3>
      <p class="ed-book-desc">${b.desc}</p>
      ${foot}
    </div>
  </article>`;
}

/* Gradiente da capa de um curso (mesmo cálculo do design system da plataforma). */
function gradienteCapa(hue, chroma) {
  const a = `oklch(0.42 ${chroma} ${hue})`;
  const b = `oklch(0.58 ${chroma * 0.9} ${hue + 14})`;
  return `linear-gradient(160deg, ${a} 0%, ${b} 100%)`;
}

function courseCardEditorial(c) {
  const soon = !c.disponivel;
  let selo;
  if (soon)               selo = `<span class="ed-course-pill ed-course-pill--soon">Em breve</span>`;
  else if (c.acesso === 'ebook') selo = `<span class="ed-course-pill">Cap. 1 grátis · e-book</span>`;
  else                    selo = `<span class="ed-course-pill ed-course-pill--free">100% grátis</span>`;

  const cta = soon
    ? `<span class="ed-course-cta ed-course-cta--soon">Em breve</span>`
    : `<a href="${c.url}" class="ed-course-cta" target="_blank" rel="noopener noreferrer">Acessar curso →</a>`;

  return `<article class="ed-course${soon ? ' is-soon' : ''}">
    <div class="ed-course-cover" style="background:${gradienteCapa(c.hue, c.chroma)}">
      <span class="ed-course-code">${c.code}</span>
      <div class="ed-course-cover-text">
        <h3 class="ed-course-cover-title">${c.nome}</h3>
        <p class="ed-course-cover-sub">${c.subtitulo}</p>
      </div>
    </div>
    <div class="ed-course-body">
      <div class="ed-course-meta">
        <span>${c.capitulos} capítulos</span><span class="ed-course-dot"></span>
        <span>${c.horas}h</span><span class="ed-course-dot"></span>
        <span>${c.nivel}</span>
      </div>
      <p class="ed-course-desc">${c.desc}</p>
      <div class="ed-course-foot">${selo}${cta}</div>
    </div>
  </article>`;
}

function colecaoCardEditorial(col) {
  const capa = SB_BASE + col.capa;
  const amostra = SB_BASE + col.capa.replace(/\/images\/.*$/, '/storybook.html');
  const qtd = col.qtd || 10;
  return `<article class="ed-sb" style="--sb-color:${col.cor}">
    <a class="ed-sb-cover" href="${amostra}" target="_blank" rel="noopener noreferrer">
      <img src="${capa}" alt="Coleção ${col.nome} ${col.amp} ${col.fim}" loading="lazy">
      <span class="ed-sb-badge">Ler amostra grátis →</span>
    </a>
    <div class="ed-sb-body">
      <span class="ed-sb-tag">Coleção · ${qtd} storybooks</span>
      <h3 class="ed-sb-name">${col.nome} ${col.amp} <em>${col.fim}</em></h3>
      <p class="ed-sb-desc">${col.lead}</p>
      <div class="ed-buy-row">
        <span class="ed-price">${PRECO_STORYBOOK}</span>
        <a class="ed-buy" href="${col.hotmart}" target="_blank" rel="noopener noreferrer">Comprar na Hotmart ↗</a>
      </div>
      <a class="ed-sb-cta" href="${SB_CATALOGO}" target="_blank" rel="noopener noreferrer">Ver no catálogo →</a>
    </div>
  </article>`;
}

function appCardStudio(a, i) {
  const slug = a.name.toLowerCase().replace(/[^a-z]/g,'');
  return `<article class="st-app" style="--app-color:${a.color}">
    <div class="st-app-icon">${a.letter}</div>
    <div class="st-app-body">
      <h3 class="st-app-name">${slug}</h3>
      <span class="st-app-tag">// ${a.tag}</span>
      <p class="st-app-desc">${a.desc}</p>
    </div>
    <a href="#" class="st-app-cta">install →</a>
  </article>`;
}
function bookRowStudio(b, i) {
  return `<div class="st-book">
    <span class="st-book-num">0${i+1}</span>
    <div>
      <div class="st-book-name">${b.title}</div>
      <div class="st-book-desc">${b.desc}</div>
    </div>
    <span class="st-book-meta">${b.tag}</span>
    <a class="st-book-link" href="#">read →</a>
  </div>`;
}

function appCardBrutalist(a, i) {
  return `<article class="br-card" style="--app-color:${a.color}">
    <div class="br-card-band"></div>
    <div class="br-card-head">
      <div class="br-card-icon">${a.letter}</div>
      <h3 class="br-card-name">${a.name}</h3>
      <span class="br-card-num">0${i+1}</span>
    </div>
    <div class="br-card-tag">${a.tag.toUpperCase()}</div>
    <p class="br-card-desc">${a.desc}</p>
    <a href="#" class="br-card-cta">▸ Baixar na Google Play</a>
  </article>`;
}
function bookRowBrutalist(b, i) {
  return `<div class="br-book">
    <span class="br-book-num">[ 0${i+1} ]</span>
    <div class="br-book-name">${b.title}</div>
    <div class="br-book-desc">${b.desc}</div>
    <a class="br-book-link" href="#">LER ▸</a>
  </div>`;
}

document.querySelector('.ed-grid').innerHTML       = APPS.map(appCardEditorial).join('');
document.querySelector('.ed-books-grid').innerHTML = BOOKS.map(bookCardEditorial).join('');

const courseGrid = document.querySelector('.ed-courses-grid');
if (courseGrid) courseGrid.innerHTML = CURSOS.map(courseCardEditorial).join('');
const sbGrid = document.querySelector('.ed-sb-grid');
if (sbGrid) sbGrid.innerHTML = COLECOES.map(colecaoCardEditorial).join('');

/* ============ STATE ============ */
const STATE = { ...window.__TWEAK_DEFAULTS };

function applyState() {
  document.body.classList.toggle('dark', !!STATE.dark);
  document.documentElement.style.setProperty('--accent', STATE.accent);
  document.body.dataset.font = STATE.font;
}

applyState();

/* ============ LIGHTBOX ============ */
(function () {
  const lb = document.createElement('div');
  lb.id = 'book-lightbox';
  lb.innerHTML = '<img src="" alt="">';
  document.body.appendChild(lb);
  const img = lb.querySelector('img');
  document.addEventListener('click', e => {
    const cover = e.target.closest('.ed-book-cover img');
    if (cover) { img.src = cover.src; img.alt = cover.alt; lb.classList.add('open'); }
  });
  lb.addEventListener('click', () => lb.classList.remove('open'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
})();

/* ============ FORM (Web3Forms) ============ */
/* ⚠️ AÇÃO NECESSÁRIA: cole abaixo a sua Access Key gratuita do Web3Forms.
   1. Acesse https://web3forms.com e informe o e-mail de destino
      (ex.: vargascodemail@gmail.com) — leva ~30 segundos, sem criar conta.
   2. Copie a Access Key recebida e substitua o valor abaixo.
   Enquanto estiver com o placeholder, o botão avisa que falta configurar. */
const WEB3FORMS_ACCESS_KEY = '0616743e-2989-40c9-b620-40f36ec4c284';

window.handleSubmit = async function (e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const orig = btn ? btn.innerHTML : '';
  const restore = () => {
    if (btn) setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 2600);
  };

  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('COLE_')) {
    console.warn('[Form] Defina WEB3FORMS_ACCESS_KEY em app.js (https://web3forms.com) para ativar o envio.');
    if (btn) { btn.innerHTML = '⚙ Configure a Access Key'; btn.disabled = true; }
    restore();
    return false;
  }

  const payload = Object.fromEntries(new FormData(form).entries());
  payload.access_key = WEB3FORMS_ACCESS_KEY;
  payload.subject = `Contato pelo site · ${payload.assunto || 'Vargas Code'}`;
  payload.from_name = payload.nome ? `${payload.nome} (site Vargas Code)` : 'Site Vargas Code';

  if (btn) { btn.disabled = true; btn.innerHTML = 'Enviando…'; }
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const out = await res.json().catch(() => ({}));
    if (res.ok && out.success) {
      if (btn) btn.innerHTML = '✓ Mensagem enviada';
      form.reset();
    } else {
      throw new Error(out.message || `HTTP ${res.status}`);
    }
  } catch (err) {
    console.error('[Form] Falha ao enviar:', err);
    if (btn) btn.innerHTML = '✕ Erro — tente novamente';
  } finally {
    restore();
  }
  return false;
};
