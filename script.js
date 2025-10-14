// ===== SISTEMA DE POSTS DO BLOG =====

const blogPosts = [
    {
        id: "post-segundo-mes",
        badge: "Novidades",
        titulo: "Semana Caótica",
        data: "11 de outubro de 2025",
        categoria: "Semana de Prova",
        conteudo: [
            "Poderia começar dizendo que a semana foi tranquila, que dormi minhas 7h30 programadas, que comi bem e que tudo correu dentro do esperado… mas não seria verdade. A segunda semana de outubro foi um caos completo. Segunda já começou com prova de Técnica Cirúrgica — antigos traumas revisitados, porém superados (com café e fé). Estudei o suficiente pra não chorar e, honestamente, fui melhor do que esperava. Terça veio com tutoria, e parece que esse semestre resolveu colocar a gente à prova todo santo dia. É abertura, fechamento e mil leituras "aprofundadas". Estamos no módulo de Aparelho Digestório, e acredite, esse módulo está gerando dualidades. Em conversas com meus amigos, a grande maioria diz que não gostou; eu ainda enfrento a dúvida se gostei ou não, mas sim, concordo quando dizem que está sendo bem difícil — não pelo conteúdo em si, mas pela somatória dos acontecimentos.",
            "A alta densidade de afazeres na semana de um estudante de Medicina, por vezes, faz com que ela passe entre a lerdeza e o voar. Aqui não foi diferente. Não sei se é porque adoro procrastinar com coisas fúteis ou se o tempo realmente tem esse viés. Mas quinta-feira chegou — e chegou com prova. Prova de Habilidades de Clínica Médica. Nessa, eu tinha apenas uma opção: ir bem. E acreditem, eu fui razoável. Confesso que fiquei triste; a falta de atenção custa caro… e no meu caso custou 0,5 (alguns mais que isso). Mas consegui, pessoal, consegui.",
            "Finalizamos com PICTória de hanseníase e tutoria de síndrome dispéptica. E assim, entre prazos, café e planilhas mentais, a semana se encerrou — caótica, cansativa, mas com resultados bons (não muito bons), mas foram bons. Eu digo: sobrevivi."
        ],
        assinatura: "Beijos da Sarinha 💙",
        cta: "Gostou? Deixe seu comentário!",
        ctaLink: "#comentarios"
    },
    {
        id: "post-inicio-sonho",
        badge: "Primeiro post",
        titulo: "Início de um sonho - Agosto de 2023",
        data: "5 de outubro de 2025",
        categoria: "Jornada",
        conteudo: [
            "Em agosto de 2023, mais precisamente no dia 4, eu iniciava uma jornada completamente louca: eu havia passado em Medicina.",
            "Foi um esforço danado pra chegar até aqui. Sempre tive a sensação de ser a mais burra da turma (família), sem intelecto ou QI suficiente pra Medicina. Mas eu consegui. Consegui por mim, com meu esforço, e com o apoio incondicional da minha família.",
            "Sei que quem me conhece há mais tempo deve ter pensado que, por já ter uma primeira formação, talvez eu estivesse desperdiçando tempo ao começar uma segunda. Mas deixa eu te contar: eu queria muito fazer Medicina. Me esforcei de verdade pra conquistar essa vaga tão sonhada - e valeu cada segundo.",
            "Descobri que tinha passado exatamente no aniversário do meu pai. Legal, né? Um presente pra mim, e um presentão pra ele.",
            "Minha jornada começou oficialmente naquele 4 de agosto. Esses dois primeiros anos passaram rápido demais - foram intensos, desafiadores e completamente insanos.",
            "No meio disso tudo, fiz um grupo de amigos incríveis. Nós nos apelidamos, com todo carinho (e um toque de drama), de Greys Anatomy. O nome começou meio aleatório, mas acabou ficando só o essencial: nós. Eles são uma parte importante do meu dia a dia e da minha história até aqui.",
            "Esse é meu primeiro post, e estou me adaptando a essa nova forma de compartilhar a vida com vocês. Espero, sinceramente, que gostem de acompanhar essa jornada comigo."
        ],
        assinatura: "Beijos da Sarinha 💙",
        cta: "Quer dividir como essa história te inspirou?",
        ctaLink: "#comentarios"
    }
];

// Função para renderizar os posts
function renderBlogPosts() {
    const blogLayout = document.querySelector('.blog-layout');
    
    if (!blogLayout) {
        console.error('blog-layout não encontrado!');
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
