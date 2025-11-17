// ===== SISTEMA DE POSTS DO BLOG =====

const blogPosts = [
    {
        id: "post-ia-medicina",
        badge: "💭 Reflexão",
        titulo: "IA nos estudos: vilã ou aliada?",
        data: "26 de outubro de 2025",
        categoria: "Tecnologia",
        conteudo: [
            "Gente, preciso falar sobre isso: inteligência artificial.",
            "Desde que o boom da IA começou (lá por 2021, lembra?), ela virou parte do dia a dia de todo mundo. ChatGPT, Gemini, Claude... cada um com seu jeitinho, mas todos querendo facilitar nossa vida. E olha, eu confesso: sou team IA sim!",
            "Quando penso na minha jornada até passar em Medicina, me dá até um frio na barriga. Foram meses de cursinho, simulados todo fim de semana, noites sem dormir e aquele peso de sentir que você não tá dando conta. Se a IA já existisse naquela época do jeito que existe hoje? Nossa, teria me poupado MUITA crise existencial (e muito café).",
            "E quando você entra na faculdade, vem o ciclo básico — dois anos intensos de 'meu Deus, onde eu me meti?'. Foi aí que a IA entrou na minha rotina de vez. E olha, tem gente que torce o nariz, acha que usar IA é 'colar'. Tipo, sério?",
            "A gente tá no século XXI! A tecnologia tá aí pra ser usada. Ou você aprende a aproveitar as ferramentas disponíveis ou fica pra trás — é simples assim.",
            "A IA não faz o trabalho por mim. Ela me ajuda a entender o que tá difícil, organizar o caos da semana, revisar matéria de forma mais inteligente. É tipo ter um professor particular 24h por dia que não perde a paciência quando você pergunta pela décima vez.",
            "Tem gente que fala: 'ah, mas isso vai deixar todo mundo burro'. Não, gente! Vai deixar todo mundo mais EFICIENTE. A diferença é como você usa.",
            "O desafio agora é integrar essa tecnologia ao ensino de forma inteligente. Porque ela veio pra ficar, querendo ou não. E se pode facilitar tanto a vida do estudante quanto a do professor, por que resistir?",
            "No meu caso, a IA já é parte da rotina: me ajuda a planejar o dia, revisar matérias, criar resumos, até me organizar emocionalmente quando tá tudo caótico.",
            "Resumindo: usar IA não é preguiça, é estratégia. É aproveitar o que a tecnologia tem de melhor pra crescer mais rápido.",
            "E você, já usa IA nos estudos? Conta aqui nos comentários! Quero saber se você é team IA ou ainda tá na dúvida. Vamos trocar uma ideia? 💙"
        ],
        assinatura: "Com carinho, Sara 💜",
        cta: "E aí, você usa IA? Me conta aqui!",
        ctaLink: "#comentarios"
    },
    {
        id: "post-segundo-mes",
        badge: "📖 Relato",
        titulo: "Semana que testou minha sanidade",
        data: "11 de outubro de 2025",
        categoria: "Rotina",
        conteudo: [
            "Eu podia começar esse post dizendo que foi tudo lindo, que dormi minhas 8 horas, comi bem, estudei com calma... mas seria mentira. A segunda semana de outubro foi CAÓTICA.",
            "Segunda-feira já começou pesada: prova de Técnica Cirúrgica. Gente, eu revisei traumas antigos nessa prova (risos nervosos). Mas sabe o que foi? Estudei o suficiente pra não sair chorando de lá. E, olha, foi melhor do que eu esperava!",
            "Terça? Tutoria. Esse semestre resolveu nos colocar à prova TODO DIA. É abertura de caso, fechamento, leitura 'aprofundada' (que a gente sabe que é só um modo bonito de falar 'lê isso tudo aqui'). Tamo no módulo de Aparelho Digestório e... complicado, viu?",
            "Conversando com os amigos, a maioria disse que não curtiu. Eu ainda tô em dúvida se gostei ou não, mas concordo: tá sendo punk. Não pelo conteúdo em si, mas pela quantidade de coisa acontecendo AO MESMO TEMPO.",
            "A semana passou voando (ou arrastando, dependendo da hora). Quinta chegou com mais uma prova: Habilidades de Clínica Médica. Essa eu PRECISAVA ir bem. E fui... razoável. Perdi 0,5 por falta de atenção (ai, meu coração). Mas passei, gente! E no final das contas, é isso que importa.",
            "Pra fechar a semana: PICTória de hanseníase e tutoria de síndrome dispéptica. Foi café, desespero controlado e muita, MUITA organização mental.",
            "Resumo da semana: caótica, cansativa, mas SOBREVIVI. E no final, isso já é uma vitória. 💪"
        ],
        assinatura: "Com carinho, Sara 💜",
        cta: "Já passou por uma semana assim? Me conta!",
        ctaLink: "#comentarios"
    },
    {
        id: "post-inicio-sonho",
        badge: "✨ Memória",
        titulo: "Como tudo começou — agosto de 2023",
        data: "5 de outubro de 2025",
        categoria: "Jornada",
        conteudo: [
            "Dia 4 de agosto de 2023. Esse foi o dia que mudou tudo: EU PASSEI EM MEDICINA! 🎉",
            "Olha, não foi fácil chegar até aqui. Teve cursinho, simulado, crise existencial às 2h da manhã, aquela voz na cabeça dizendo 'você não vai conseguir'. Sempre tive a sensação de que eu era a 'menos inteligente' da família, sabe? Tipo, todo mundo brilhante e eu ali, tentando acompanhar.",
            "Mas adivinha? EU CONSEGUI. E consegui por mim mesma, com meu esforço, meu suor (e muito café). Claro que minha família foi essencial — sem eles, não sei se teria aguentado a pressão.",
            "Tem gente que achou estranho eu querer fazer uma segunda graduação. 'Ah, você já tem uma formação, pra quê outra?' Mas gente, EU QUERIA MEDICINA. Não foi decisão de última hora, foi um sonho que eu lutei pra conquistar. E valeu CADA segundo.",
            "E sabe o melhor? Descobri que passei no dia do aniversário do meu pai. Foi tipo um presente duplo: pra mim e pra ele. ❤️",
            "Esses primeiros dois anos passaram voando — intensos, desafiadores, insanos, mas incríveis. No meio dessa loucura toda, conheci um grupo de amigos que virou minha família aqui. A gente se apelidou de 'Greys Anatomy' (com todo o drama que o nome sugere). Hoje, eles são parte essencial da minha história.",
            "Esse é meu primeiro post nesse espaço. Tô me adaptando ainda, mas a ideia é compartilhar tudo com vocês — os altos, os baixos, os surtos, as vitórias. Espero que você embarque nessa jornada comigo! 💜"
        ],
        assinatura: "Com carinho, Sara 💜",
        cta: "E você, como foi sua jornada até aqui? Conta pra mim!",
        ctaLink: "#comentarios"
    }
];

// Função para renderizar os posts
function renderBlogPosts() {
    const blogLayout = document.querySelector('.blog-layout');
    
    if (!blogLayout) {
        return;
    }

    const sidebar = blogLayout.querySelector('.blog-sidebar');
    
    // Limpar posts antigos (manter apenas a sidebar)
    const existingPosts = blogLayout.querySelectorAll('.blog-featured');
    const existingOldPosts = blogLayout.querySelectorAll('.old-posts-section');
    existingPosts.forEach(post => post.remove());
    existingOldPosts.forEach(section => section.remove());

    // Renderizar POST MAIS RECENTE em destaque (primeiro do array)
    if (blogPosts.length > 0) {
        const post = blogPosts[0];
        
        const article = document.createElement('article');
        article.className = 'blog-featured';
        article.id = post.id;

        const paragrafos = post.conteudo.map(p => `<p>${p}</p>`).join('');

        article.innerHTML = `
            <span class="badge">${post.badge}</span>
            <h3>${post.titulo}</h3>
            <div class="post-meta">
                <span>Publicado em ${post.data}</span>
                <span class="divider">•</span>
                <span class="tag">${post.categoria}</span>
            </div>
            ${paragrafos}
            <p class="signature">${post.assinatura}</p>
            <p class="post-cta">${post.cta} <a href="${post.ctaLink}">Deixa um comentário aqui</a>.</p>
        `;

        // Inserir antes da sidebar
        if (sidebar) {
            blogLayout.insertBefore(article, sidebar);
        } else {
            blogLayout.appendChild(article);
        }
    }

    // Renderizar POSTS ANTIGOS (do segundo em diante)
    if (blogPosts.length > 1) {
        const oldPostsSection = document.createElement('div');
        oldPostsSection.className = 'old-posts-section';
        
        let oldPostsHTML = '<h3 class="old-posts-title">Posts Anteriores</h3><div class="old-posts-grid">';
        
        blogPosts.slice(1).forEach((post) => {
            oldPostsHTML += `
                <article class="old-post-card">
                    <span class="badge-small">${post.categoria}</span>
                    <h4>${post.titulo}</h4>
                    <p class="old-post-date">${post.data}</p>
                    <p class="old-post-preview">${post.conteudo[0].substring(0, 120)}...</p>
                    <button class="read-more" onclick="openPostModal('${post.id}')">Ler post completo →</button>
                </article>
            `;
        });
        
        oldPostsHTML += '</div>';
        oldPostsSection.innerHTML = oldPostsHTML;
        
        // Inserir antes da sidebar
        if (sidebar) {
            blogLayout.insertBefore(oldPostsSection, sidebar);
        } else {
            blogLayout.appendChild(oldPostsSection);
        }
    }

    // Atualizar sidebar
    updateSidebar();
}

// Função para abrir modal com post completo
function openPostModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    const paragrafos = post.conteudo.map(p => `<p>${p}</p>`).join('');
    
    const modalHTML = `
        <div class="modal-overlay" id="postModal" onclick="closePostModal(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closePostModal()">&times;</button>
                <article class="modal-post">
                    <span class="badge">${post.badge}</span>
                    <h2>${post.titulo}</h2>
                    <div class="post-meta">
                        <span>Publicado em ${post.data}</span>
                        <span class="divider">•</span>
                        <span class="tag">${post.categoria}</span>
                    </div>
                    ${paragrafos}
                    <p class="signature">${post.assinatura}</p>
                    <p class="post-cta">${post.cta} <a href="${post.ctaLink}" onclick="closePostModal()">Deixa um comentário aqui</a>.</p>
                </article>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function closePostModal(event) {
    if (event && event.target.classList.contains('modal-content')) return;
    
    const modal = document.getElementById('postModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePostModal();
    }
});

// Função para atualizar a sidebar com os posts
function updateSidebar() {
    const sidebarTemas = document.getElementById('sidebar-temas');
    const sidebarArquivo = document.getElementById('sidebar-arquivo');
    
    if (sidebarTemas) {
        sidebarTemas.innerHTML = blogPosts.map(post => 
            `<li><a href="#${post.id}">${post.titulo}</a></li>`
        ).join('');
    }

    if (sidebarArquivo) {
        // Agrupar posts por mês
        const meses = {};
        blogPosts.forEach(post => {
            const partes = post.data.split(' de ');
            if (partes.length >= 3) {
                const mes = `${partes[1]} ${partes[2]}`;
                if (!meses[mes]) meses[mes] = 0;
                meses[mes]++;
            }
        });

        sidebarArquivo.innerHTML = Object.keys(meses).map(mes => 
            `<li><a href="#blog">${mes} (${meses[mes]})</a></li>`
        ).join('');
    }
}

// ===== ATUALIZAR ANO NO FOOTER =====
if (document.getElementById('year')) {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// ===== NAVEGAÇÃO SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SISTEMA DE COMENTÁRIOS COM FORMSPREE =====

// Contador de caracteres
const commentTextarea = document.getElementById('commentText');
const charCount = document.getElementById('charCount');

if (commentTextarea && charCount) {
    commentTextarea.addEventListener('input', function() {
        charCount.textContent = this.value.length;
    });
}

// Envio do formulário
const commentForm = document.getElementById('commentForm');
const formStatus = document.getElementById('formStatus');

if (commentForm) {
    commentForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = commentForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Desabilitar botão durante envio
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        formStatus.style.display = 'none';
        
        try {
            const formData = new FormData(commentForm);
            
            const response = await fetch(commentForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Sucesso
                formStatus.className = 'success';
                formStatus.textContent = '✅ Mensagem enviada com sucesso! Aparecerá após aprovação.';
                formStatus.style.display = 'block';
                commentForm.reset();
                if (charCount) charCount.textContent = '0';
                
                // Scroll suave para o status
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Esconder mensagem após 8 segundos
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 8000);
            } else {
                throw new Error('Erro ao enviar');
            }
        } catch (error) {
            // Erro
            formStatus.className = 'error';
            formStatus.textContent = '❌ Erro ao enviar mensagem. Tente novamente.';
            formStatus.style.display = 'block';
            
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 8000);
        } finally {
            // Reabilitar botão
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// ===== INICIALIZAR POSTS QUANDO A PÁGINA CARREGAR =====
document.addEventListener('DOMContentLoaded', renderBlogPosts);

// Se o DOM já estiver carregado, renderiza imediatamente
if (document.readyState !== 'loading') {
    renderBlogPosts();
}

// ===== MENU HAMBURGUER MOBILE =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    // Toggle menu ao clicar no botão
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Atualizar aria-expanded
        const isExpanded = navLinks.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);

        // Prevenir scroll quando menu está aberto
        document.body.style.overflow = isExpanded ? 'hidden' : '';
    });

    // Fechar menu ao clicar em um link
    const menuLinks = navLinks.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Fechar menu com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// ===== BOTÃO VOLTAR AO TOPO =====
const scrollToTopButton = document.querySelector('.scroll-to-top');

if (scrollToTopButton) {
    // Mostrar/ocultar botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    // Scroll suave para o topo ao clicar
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== ANIMAÇÕES DE ENTRADA =====
// Observer para animar elementos quando entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação de entrada aos cards
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.daily-entry, .highlight-card, .timeline-item, .comment-entry');

    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        fadeInObserver.observe(el);
    });
});

// ===== TOGGLE DE MODO ESCURO =====
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Carregar preferência salva ou usar preferência do sistema
const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// ===== BARRA DE PROGRESSO DE LEITURA =====
const readingProgress = document.getElementById('readingProgress');

if (readingProgress) {
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        readingProgress.style.width = scrollPercentage + '%';
    });
}

// ===== SISTEMA DE BUSCA E FILTROS DO BLOG =====
let currentCategory = 'all';
let searchTerm = '';

// Função para inicializar filtros de categoria
function initCategoryFilters() {
    const categoryFiltersContainer = document.getElementById('categoryFilters');

    if (!categoryFiltersContainer) return;

    // Extrair categorias únicas dos posts
    const categories = ['all', ...new Set(blogPosts.map(post => post.categoria))];

    categoryFiltersContainer.innerHTML = categories.map(cat => {
        const displayName = cat === 'all' ? 'Todos' : cat;
        const activeClass = cat === 'all' ? 'active' : '';
        return `<button class="category-filter ${activeClass}" data-category="${cat}">${displayName}</button>`;
    }).join('');

    // Adicionar event listeners
    const filterButtons = categoryFiltersContainer.querySelectorAll('.category-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            filterPosts();
        });
    });
}

// Função para filtrar posts
function filterPosts() {
    const allPosts = document.querySelectorAll('.blog-featured, .old-post-card');

    allPosts.forEach(post => {
        const postTitle = post.querySelector('h3, h4')?.textContent.toLowerCase() || '';
        const postCategory = post.querySelector('.tag, .badge-small')?.textContent.toLowerCase() || '';
        const postContent = post.textContent.toLowerCase();

        const matchesSearch = !searchTerm ||
            postTitle.includes(searchTerm) ||
            postContent.includes(searchTerm);

        const matchesCategory = currentCategory === 'all' ||
            postCategory.includes(currentCategory.toLowerCase());

        if (matchesSearch && matchesCategory) {
            post.style.display = '';
            post.style.animation = 'fadeInUp 0.4s ease';
        } else {
            post.style.display = 'none';
        }
    });
}

// Busca em tempo real
const blogSearchInput = document.getElementById('blogSearch');
if (blogSearchInput) {
    blogSearchInput.addEventListener('input', function(e) {
        searchTerm = e.target.value.toLowerCase();
        filterPosts();
    });
}

// Inicializar filtros quando os posts forem renderizados
const originalRenderBlogPosts = renderBlogPosts;
renderBlogPosts = function() {
    originalRenderBlogPosts();
    initCategoryFilters();
};

// ===== BOTÕES DE COMPARTILHAMENTO SOCIAL =====
function createShareButtons(postId, postTitle) {
    const pageUrl = encodeURIComponent(window.location.href.split('#')[0] + '#' + postId);
    const text = encodeURIComponent(postTitle + ' - Estudante Sara');

    return `
        <div class="share-buttons">
            <a href="https://twitter.com/intent/tweet?text=${text}&url=${pageUrl}"
               target="_blank"
               rel="noopener noreferrer"
               class="share-button twitter"
               aria-label="Compartilhar no Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
                Twitter
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${pageUrl}"
               target="_blank"
               rel="noopener noreferrer"
               class="share-button facebook"
               aria-label="Compartilhar no Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
                Facebook
            </a>
            <a href="https://wa.me/?text=${text}%20${pageUrl}"
               target="_blank"
               rel="noopener noreferrer"
               class="share-button whatsapp"
               aria-label="Compartilhar no WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
            </a>
            <button class="share-button copy-link" onclick="copyPostLink('${postId}', this)"
                    aria-label="Copiar link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                Copiar link
            </button>
        </div>
    `;
}

// Função para copiar link
function copyPostLink(postId, button) {
    const url = window.location.href.split('#')[0] + '#' + postId;

    navigator.clipboard.writeText(url).then(() => {
        // Feedback visual no botão
        const originalText = button.innerHTML;
        button.classList.add('copied');
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            Copiado!
        `;

        // Mostrar mensagem flutuante
        const feedback = document.createElement('div');
        feedback.className = 'copy-feedback';
        feedback.textContent = 'Link copiado para a área de transferência!';
        document.body.appendChild(feedback);

        // Remover após 3 segundos
        setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = originalText;
            feedback.remove();
        }, 3000);
    }).catch(() => {
        alert('Não foi possível copiar o link. Por favor, copie manualmente: ' + url);
    });
}

// Adicionar botões de compartilhamento aos posts
function addShareButtonsToPosts() {
    // Adicionar ao post em destaque
    const featuredPost = document.querySelector('.blog-featured');
    if (featuredPost && blogPosts.length > 0) {
        const post = blogPosts[0];
        const shareButtons = createShareButtons(post.id, post.titulo);
        const signature = featuredPost.querySelector('.signature');
        if (signature) {
            signature.insertAdjacentHTML('afterend', shareButtons);
        }
    }
}

// Chamar após renderizar posts
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addShareButtonsToPosts, 100);
});

// Também adicionar ao modal quando abrir
const originalOpenPostModal = openPostModal;
openPostModal = function(postId) {
    originalOpenPostModal(postId);

    // Adicionar botões de compartilhamento ao modal
    setTimeout(() => {
        const modal = document.querySelector('.modal-post');
        const post = blogPosts.find(p => p.id === postId);

        if (modal && post) {
            const existingShare = modal.querySelector('.share-buttons');
            if (!existingShare) {
                const shareButtons = createShareButtons(post.id, post.titulo);
                const signature = modal.querySelector('.signature');
                if (signature) {
                    signature.insertAdjacentHTML('afterend', shareButtons);
                }
            }
        }
    }, 50);
};
