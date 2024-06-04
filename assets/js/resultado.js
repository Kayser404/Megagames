document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query').toLowerCase();

    const games = [
        { title: 'Minecraft', genre: 'Aventura', platform: 'PC', developer: 'Mojang', price: 29.99 },
        { title: 'Ark: Survival Evolved', genre: 'Aventura', platform: 'PC', developer: 'Studio Wildcard', price: 29.99 },
        // Añade más juegos aquí
    ];

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const filteredGames = games.filter(game => game.title.toLowerCase().includes(query));

    if (filteredGames.length > 0) {
        filteredGames.forEach(game => {
            const gameCard = `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${game.title}</h5>
                            <p class="card-text">Género: ${game.genre}</p>
                            <p class="card-text">Plataforma: ${game.platform}</p>
                            <p class="card-text">Desarrollador: ${game.developer}</p>
                            <p class="card-text">Precio: $${game.price}</p>
                            <a href="#" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
            `;
            resultsContainer.innerHTML += gameCard;
        });
    } else {
        resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
    }
});
