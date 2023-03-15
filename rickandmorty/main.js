function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character/");
    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const container = document.createRange().createContextualFragment(`
        <article>
            <div class="image-container">
                <img src="${personaje.image}">
            </div>
            <div class="col-md-3">
                <h2>${personaje.name}</h2>
            </div>
            <div class="col-md-3">
                <h3>${personaje.status}</h3>
            </div>
            <div class="col-md-3">
                <h3>${personaje.species}</h3>
            </div>
            <div class="col-md-3">
                <button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-info-sign"></span></button>
            </div>  
        </article>
        `);
        const main = document.querySelector("main");
        main.append(container);
    });
});

