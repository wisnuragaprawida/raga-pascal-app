function loadAnime() {
  fetch('stack.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('data-anime').innerHTML = "";

      const json = JSON.stringify(data.anime);
      const result = JSON.parse(json);

      for (let i = 0; i < result.length; i++) {
        document.getElementById('data-anime').innerHTML += `
      <div class="card">
          <img src="${result[i].img}" alt="Luffy">
          <div class="card-body">
              <h1 class="h1-500">${result[i].name}</h1>
              <p class="p-normal">${result[i].skill}</p>
              <button class="btn-primary-large">Learn</button>
          </div>
      </div>
      `;
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

loadAnime();