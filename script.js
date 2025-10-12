// ===== SISTEMA DE POSTS DO BLOG =====

const blogPosts = [
    {
        id: "post-inicio-sonho",
        badge: "Primeiro post",
        titulo: "Inicio de um sonho - Agosto de 2023",
        data: "5 de outubro de 2025",
        categoria: "Jornada",
        conteudo: [
            "Em agosto de 2023, mais precisamente no dia 4, eu iniciava uma jornada completamente louca: eu havia passado em Medicina.",
            "Foi um esforco danado pra chegar ate aqui. Sempre tive a sensacao de ser a mais burra da turma (familia), sem intelecto ou QI suficiente pra Medicina. Mas eu consegui. Consegui por mim, com meu esforco, e com o apoio incondicional da minha familia.",
            "Sei que quem me conhece ha mais tempo deve ter pensado que, por ja ter uma primeira formacao, talvez eu estivesse desperdicando tempo ao comecar uma segunda. Mas deixa eu te contar: eu queria muito fazer Medicina. Me esforcei de verdade pra conquistar essa vaga tao sonhada - e valeu cada segundo.",
            "Descobri que tinha passado exatamente no aniversario do meu pai. Legal, ne? Um presente pra mim, e um presentao pra ele.",
            "Minha jornada comecou oficialmente naquele 4 de agosto. Esses dois primeiros anos passaram rapido demais - foram intensos, desafiadores e completamente insanos.",
            "No meio disso tudo, fiz um grupo de amigos incriveis. Nos nos apelidamos, com todo carinho (e um toque de drama), de Greys Anatomy. O nome comecou meio aleatorio, mas acabou ficando so o essencial: nos. Eles sao uma parte importante do meu dia a dia e da minha historia ate aqui.",
            "Esse e meu primeiro post, e estou me adaptando a essa nova forma de compartilhar a vida com voces. Espero, sinceramente, que gostem de acompanhar essa jornada comigo."
        ],
        assinatura: "Beijos da Sarinha 💙",
        cta: "Quer dividir como essa historia te inspirou?",
        ctaLink: "#comentarios"
    },
    {
        id: "post-segundo-mes",
        badge: "Novidades",
        titulo: "Segundo mes na faculdade",
        data: "11 de outubro de 2025",
        categoria: "Rotina",
        conteudo: [
            "Primeiro paragrafo do novo post...",
            "Segundo paragrafo...",
            "Terceiro paragrafo..."
        ],
        assinatura: "Beijos da Sarinha 💙",
        cta: "Gostou? Deixe seu comentario!",
        ctaLink: "#comentarios"
    }
];

// Funcao para renderizar os posts
function renderBlogPosts() {
    const blogLayout = document.querySelector('.blog-layout');
    if (!blogLayout) return;

    const sidebar = blogLayout.querySelector('.blog-sidebar');
    
    // Limpar posts antigos (manter apenas a sidebar)
    const existingPosts = blogLayout.querySelectorAll('.blog-featured');
    existingPosts.forEach(post => post.remove());

    // Renderizar posts do mais novo para o mais antigo
    blogPosts.forEach((post, index) => {
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
            <p class="post-cta">${post.cta} <a href="${post.ctaLink}">Deixa um comentario aqui</a>.</p>
        `;

        // Inserir antes da sidebar
        if (sidebar) {
            blogLayout.insertBefore(article, sidebar);
        } else {
            blogLayout.appendChild(article);
        }
    });

    // Atualizar sidebar
    updateSidebar();
}

// Funcao para atualizar a sidebar com os posts
function updateSidebar() {
    const sidebarTemas = document.getElementById('sidebar-temas');
    const sidebarArquivo = document.getElementById('sidebar-arquivo');
    
    if (sidebarTemas) {
        sidebarTemas.innerHTML = blogPosts.map(post => 
            `<li><a href="#${post.id}">${post.titulo}</a></li>`
        ).join('');
    }

    if (sidebarArquivo) {
        // Agrupar posts por mes
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

// ===== NAVEGACAO SUAVE =====
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

// ===== SISTEMA DE COMENTARIOS =====

let comments = [];

const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
const commentCount = document.g
