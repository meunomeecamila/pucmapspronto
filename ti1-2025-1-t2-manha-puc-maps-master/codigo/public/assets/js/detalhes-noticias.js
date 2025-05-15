document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/json/noticias.json')
      .then(response => response.json())
      .then(dados => {
        const container = document.querySelector('.card-grid');
  
        dados.noticias.forEach(noticia => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          card.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}" class="card-img">
            <div class="card-body">
              <h5 class="card-title">${noticia.titulo}</h5>
              <p class="card-meta">${noticia.data}</p>
              <p class="card-text">${noticia.descricao}</p>
            </div>
          `;
  
          card.addEventListener('click', () => {
            localStorage.setItem('selectedNews', JSON.stringify(noticia));
            window.location.href = 'detalhes-noticia.html';
          });

          container.appendChild(card);
        });
      })
      .catch(error => console.error('Erro ao carregar notícias:', error));
  });