// ===== SISTEMA DE POSTS DO BLOG =====

const blogPosts = [
    {
        id: "post-inicio-sonho",
        badge: "Primeiro post",
        titulo: "Início de um sonho – Agosto de 2023",
        data: "5 de outubro de 2025",
        categoria: "Jornada",
        conteudo: [
            "Em agosto de 2023, mais precisamente no dia 4, eu iniciava uma jornada completamente louca: eu havia passado em Medicina.",
            "Foi um esforço danado pra chegar até aqui. Sempre tive a sensação de ser a mais "burra" da turma (família), sem intelecto ou QI suficiente pra Medicina. Mas eu consegui. Consegui por mim, com meu esforço, e com o apoio incondicional da minha família.",
            "Sei que quem me conhece há mais tempo deve ter pensado que, por já ter uma primeira formação, talvez eu estivesse "desperdiçando tempo" ao começar uma segunda. Mas deixa eu te contar: eu queria muito fazer Medicina. Me esforcei de verdade pra conquistar essa vaga tão sonhada – e valeu cada segundo.",
            "Descobri que tinha passado exatamente no aniversário do meu pai. Legal, né? Um presente pra mim, e um presentão pra ele.",
            "Minha jornada começou oficialmente naquele 4 de agosto. Esses dois primeiros anos passaram rápido demais – foram intensos, desafiadores e completamente insanos.",
            "No meio disso tudo, fiz um grupo de amigos incríveis. Nós nos apelidamos, com todo carinho (e um toque de drama), de "Grey's Anatomy." O nome começou meio aleatório, mas acabou ficando só o essencial: nós. Eles são uma parte importante do meu dia a dia e da minha história até aqui.",
            "Esse é meu primeiro post, e estou me adaptando a essa nova forma de compartilhar a vida com vocês. Espero, sinceramente, que gostem de acompanhar essa jornada comigo."
        ],
        assinatura: "Beijos da Sarinha 💙",
        cta: "Quer dividir como essa história te inspirou?",
        ctaLink: "#comentarios"
    },
    // ADICIONE NOVOS POSTS AQUI
    {
        id: "post-segundo-mes",
        badge: "Novidades",
        titulo: "Segundo mês na faculdade",
        data: "11 de outubro de 2025",
        categoria: "Rotina",
        conteudo: [
            "Primeiro parágrafo do novo post...",
            "Segundo parágrafo...",
            "Terceiro parágrafo..."
        ],
        assinatura: "Beijos da Sarinha 💙",
        cta: "Gostou? Deixe seu comentário!",
        ctaLink: "#comentarios"
    }
];
];

// Função para renderizar os posts
function renderBlogPosts() {
    const blogLayout = document.querySelector('.blog-layout');
    if (!blogLayout) return;

    const blogFeaturedContainer = blogLayout.querySelector('.blog-featured') 
        ? blogLayout.querySelector('.blog-featured').parentElement 
        : null;

    if (!blogFeaturedContainer) return;

    // Limpar posts antigos (manter apenas o container)
    const sidebar = blogLayout.querySelector('.blog-sidebar');
    blogLayout.innerHTML = '';

    // Renderizar posts
    blogPosts.forEach(post => {
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

        blogLayout.appendChild(article);
    });

    // Re-adicionar sidebar
    if (sidebar) {
        blogLayout.appendChild(sidebar);
        updateSidebar();
    }
}

// Função para atualizar a sidebar com os posts
function updateSidebar() {
    const sidebarFavoritos = document.querySelector('.sidebar-card ul');
    if (!sidebarFavoritos) return;

    sidebarFavoritos.innerHTML = blogPosts.map(post => 
        `<li><a href="#${post.id}">${post.titulo}</a></li>`
    ).join('');

    // Atualizar arquivo mensal
    const sidebarArquivo = document.querySelectorAll('.sidebar-card')[1];
    if (sidebarArquivo) {
        const meses = {};
        blogPosts.forEach(post => {
            const mes = post.data.split(' de ')[1] + ' ' + post.data.split(' de ')[2];
            if (!meses[mes]) meses[mes] = [];
            meses[mes].push(post);
        });

        const arquivoUl = sidebarArquivo.querySelector('ul');
        if (arquivoUl) {
            arquivoUl.innerHTML = Object.keys(meses).map(mes => 
                `<li><a href="#blog">${mes} (${meses[mes].length})</a></li>`
            ).join('');
        }
    }
}

// ===== ATUALIZAR ANO NO FOOTER =====
document.getElementById('year').textContent = new Date().getFullYear();

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

// ===== SISTEMA DE COMENTÁRIOS =====

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
    if (minutes < 60) return `${minutes} minuto${minutes > 1 ? 's' : ''} atrás`;
    if (hours < 24) return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
    if (days === 1) return 'Ontem';
    if (days < 7) return `${days} dias atrás`;
    
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
                <p>Ainda não há comentários. Seja o primeiro a comentar!</p>
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
            alert('O comentário não pode ter mais de 500 caracteres!');
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

        successMessage.textContent = '✅ Comentário publicado com sucesso!';
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
    if (confirm('Tem certeza que deseja excluir este comentário?')) {
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

// ===== INICIALIZAR POSTS =====
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
});
