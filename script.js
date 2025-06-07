const sidebar = document.querySelector('.nav_sidebar'); 
const hamburger = document.querySelector('.hamburger');
const closeHamburger = document.querySelector('.close_hamburger');

// Função para abrir o sidebar
function openSidebar() {
    sidebar.classList.add('active'); // Adiciona a classe 'active' ao sidebar
    hamburger.style.display = 'none'; // Esconde o botão hamburger
    closeHamburger.style.display = 'block'; // Mostra o botão close
}

// Função para fechar o sidebar
function closeSidebar() {
    sidebar.classList.remove('active'); // Remove a classe 'active' do sidebar
    hamburger.style.display = 'block'; // Mostra o botão hamburger
    closeHamburger.style.display = 'none'; // Esconde o botão close
}


/*instagram*/

async function fetchInstagramPosts() {
    const response = await fetch('posts.json'); // URL do seu arquivo JSON
    const posts = await response.json();
    const feedbackGrid = document.getElementById('feedback-grid');
    feedbackGrid.innerHTML = ''; // Limpa a grid antes de adicionar novas postagens

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card-feedback';

        card.innerHTML = `
            <div class="content">
                <p>${post.caption || 'Sem comentário'}</p>
                <img class="img-1x1" src="${post.media_url}" alt="Imagem do Post">
            </div>
        `;

        feedbackGrid.appendChild(card);
    });
}

// Chama a função para buscar as publicações
fetchInstagramPosts();

// Atualiza a cada 60 segundos
setInterval(fetchInstagramPosts, 60000);
instagram