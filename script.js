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

// Array para armazenar comentários na memória durante a sessão
let comments = [];

// Elementos do DOM
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
const commentCount = document.getElementById('commentCount');
const charCount = document.getElementById('charCount');
const commentTextarea = document.getElementById('commentText');
const successMessage = document.getElementById('successMessage');

// Contador de caracteres em tempo real
if (commentTextarea) {
    commentTextarea.addEventListener('input', function() {
        charCount.textContent = this.value.length;
    });
}

// Função para escapar HTML e prevenir XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Função para formatar data de forma relativa
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
    
    // Formato completo para datas antigas
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Função para renderizar todos os comentários
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

// Função para adicionar novo comentário
if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const text = commentTextarea.value.trim();

        // Validação
        if (!name || !email || !text) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (text.length > 500) {
            alert('O comentário não pode ter mais de 500 caracteres!');
            return;
        }

        // Criar novo comentário
        const newComment = {
            name: name,
            email: email,
            text: text,
            date: new Date()
        };

        // Adicionar ao início do array (mais recente primeiro)
        comments.unshift(newComment);

        // Limpar formulário
        commentForm.reset();
        charCount.textContent = '0';

        // Mostrar mensagem de sucesso
        successMessage.textContent = '✅ Comentário publicado com sucesso!';
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

        // Renderizar comentários
        renderComments();

        // Scroll suave até a lista de comentários
        if (commentsList) {
            commentsList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// Função para excluir comentário
function deleteComment(index) {
    if (confirm('Tem certeza que deseja excluir este comentário?')) {
        comments.splice(index, 1);
        renderComments();
    }
}

// Renderizar estado inicial dos comentários
if (commentsList) {
    renderComments();
}

// Atualizar timestamps a cada minuto
setInterval(() => {
    if (comments.length > 0) {
        renderComments();
    }
}, 60000);

// ===== ANIMAÇÃO DE SCROLL (opcional) =====
// Adiciona classe quando elementos entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar seções para animação de entrada
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
