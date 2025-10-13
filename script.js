// ===== SISTEMA DE POSTS DO BLOG =====

const blogPosts = [
     {
        id: "post-segundo-mes",
        badge: "Novidades",
        titulo: "Semana Caótica",
        data: "11 de outubro de 2025",
        categoria: "Semana de Prova",
        conteudo: [
            "Poderia começar dizendo que a semana foi tranquila, que dormi minhas 7h30 programadas, que comi bem e que tudo correu dentro do esperado… mas não seria verdade. A segunda semana de outubro foi um caos completo. Segunda já começou com prova de Técnica Cirúrgica — antigos traumas revisitados, porém superados (com café e fé). Estudei o suficiente pra não chorar e, honestamente, fui melhor do que esperava. Terça veio com tutoria, e parece que esse semestre resolveu colocar a gente à prova todo santo dia. É abertura, fechamento e mil leituras “aprofundadas”. Estamos no módulo de Aparelho Digestório, e acredite, esse módulo está gerando dualidades. Em conversas com meus amigos, a grande maioria diz que não gostou; eu ainda enfrento a dúvida se gostei ou não, mas sim, concordo quando dizem que está sendo bem difícil — não pelo conteúdo em si, mas pela somatória dos acontecimentos.",
            "A alta densidade de afazeres na semana de um estudante de Medicina, por vezes, faz com que ela passe entre a lerdeza e o voar. Aqui não foi diferente. Não sei se é porque adoro procrastinar com coisas fúteis ou se o tempo realmente tem esse viés. Mas quinta-feira chegou — e chegou com prova. Prova de Habilidades de Clínica Médica. Nessa, eu tinha apenas uma opção: ir bem. E acreditem, eu fui razoável. Confesso que fiquei triste; a falta de atenção custa caro… e no meu caso custou 0,5 (alguns mais que isso). Mas consegui, pessoal, consegui.",
            "Finalizamos com PICTória de hanseníase e tutoria de síndrome dispéptica. E assim, entre prazos, café e planilhas mentais, a semana se encerrou — caótica, cansativa, mas com resultados bons (não muito bons), mas foram bons. Eu digo: sobrevivi."
        ],
        assinatura: "Beijos da Sarinha 💙",
        cta: "Gostou? Deixe seu comentario!",
        ctaLink: "#comentarios"
    },
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
    }
];

// Funcao para renderizar os posts
function renderBlogPosts() {
    console.log('Funcao renderBlogPosts chamada');
    const blogLayout = document.querySelector('.blog-layout');
    console.log('blogLayout encontrado:', blogLayout);
    
    if (!blogLayout) {
        console.error('blog-layout nao encontrado!');
        return;
    }

    const sidebar = blogLayout.querySelector('.blog-sidebar');
    console.log('sidebar encontrada:', sidebar);
    
    // Limpar posts antigos (manter apenas a sidebar)
    const existingPosts = blogLayout.querySelectorAll('.blog-featured');
    const existingOldPosts = blogLayout.querySelectorAll('.old-posts-section');
    existingPosts.forEach(post => post.remove());
    existingOldPosts.forEach(section => section.remove());

    // Renderizar POST MAIS RECENTE em destaque (primeiro do array)
    if (blogPosts.length > 0) {
        const post = blogPosts[0];
        console.log('Renderizando post em destaque:', post.titulo);
        
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
    }

   // Renderizar POSTS ANTIGOS (do segundo em diante)
if (blogPosts.length > 1) {
    const oldPostsSection = document.createElement('div');
    oldPostsSection.className = 'old-posts-section';
    
    let oldPostsHTML = '<h3 class="old-posts-title">Posts Anteriores</h3><div class="old-posts-grid">';
    
    blogPosts.slice(1).forEach((post, index) => {
        console.log('Renderizando post antigo:', post.titulo);
        
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

    console.log('Posts renderizados com sucesso!');
    // Atualizar sidebar
    updateSidebar();
}

// Funcao para scroll suave ate o post
function scrollToPost(postId) {
    const post = document.getElementById(postId);
    if (post) {
        post.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
// Funcao para abrir modal com post completo
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
                    <p class="post-cta">${post.cta} <a href="${post.ctaLink}" onclick="closePostModal()">Deixa um comentario aqui</a>.</p>
                </article>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

// Funcao para fechar modal
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
const commentCount = document.getElementById('commentCount');
const charCount = document.getElementById('charCount');
const commentTextarea = document.getElementById('commentText');
const successMessage = document.getElementById('successMessage');

if (commentTextarea) {
    commentTextarea.addEventListener('input', function() {
        charCount.textContent = this.value.length;
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Agora mesmo';
    if (minutes < 60) return `${minutes} minuto${minutes > 1 ? 's' : ''} atras`;
    if (hours < 24) return `${hours} hora${hours > 1 ? 's' : ''} atras`;
    if (days === 1) return 'Ontem';
    if (days < 7) return `${days} dias atras`;
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function renderComments() {
    if (!commentsList) return;

    if (comments.length === 0) {
        commentsList.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
                <p>Ainda nao ha comentarios. Seja o primeiro a comentar!</p>
            </div>
        `;
        if (commentCount) commentCount.textContent = '0';
        return;
    }

    commentsList.innerHTML = comments.map((comment, index) => `
        <div class="comment-card">
            <div class="comment-header-info">
                <span class="comment-author">${escapeHtml(comment.name)}</span>
                <span class="comment-date">${formatDate(comment.date)}</span>
            </div>
            <p class="comment-text">${escapeHtml(comment.text)}</p>
            <div class="comment-footer">
                <button class="comment-action delete" onclick="deleteComment(${index})">
                    🗑️ Excluir
                </button>
            </div>
        </div>
    `).join('');

    if (commentCount) commentCount.textContent = comments.length;
}

if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const text = commentTextarea.value.trim();

        if (!name || !email || !text) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (text.length > 500) {
            alert('O comentario nao pode ter mais de 500 caracteres!');
            return;
        }

        const newComment = {
            name: name,
            email: email,
            text: text,
            date: new Date()
        };

        comments.unshift(newComment);
        commentForm.reset();
        charCount.textContent = '0';

        successMessage.textContent = '✅ Comentario publicado com sucesso!';
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

        renderComments();

        if (commentsList) {
            commentsList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

function deleteComment(index) {
    if (confirm('Tem certeza que deseja excluir este comentario?')) {
        comments.splice(index, 1);
        renderComments();
    }
}

if (commentsList) {
    renderComments();
}

setInterval(() => {
    if (comments.length > 0) {
        renderComments();
    }
}, 60000);

// ===== INICIALIZAR POSTS QUANDO A PAGINA CARREGAR =====
console.log('Script carregado!');
console.log('blogPosts:', blogPosts);

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, renderizando posts...');
    renderBlogPosts();
});

// Se o DOM ja estiver carregado, renderiza imediatamente
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderBlogPosts);
} else {
    console.log('DOM ja estava carregado, renderizando agora...');
    renderBlogPosts();
}

// Tentar novamente apos 2 segundos (backup)
setTimeout(function() {
    console.log('Tentativa de backup - renderizando posts...');
    renderBlogPosts();
}, 2000);
