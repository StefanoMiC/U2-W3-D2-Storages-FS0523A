window.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  console.log(discography);
  // la variabile discography vive in discography.js

  // CREAZIONE DELLE CARD
  discography.forEach(album => {
    const col = document.createElement("div");
    col.className = "col";

    const card = document.createElement("div");
    card.className = "card";
    card.style.cursor = "pointer";

    card.innerHTML = `
        <h3>${album.title}</h3>
        <span>${album.artist}: </span><span>${album.title}</span> - <span>${album.year}</span>
        <ul>
        ${album.tracks.map(trackName => `<li>${trackName}</li>`).join("")} 
        </ul>
    `;

    // funzionalità di click della card
    card.onclick = event => {
      console.log(event.currentTarget);

      const albumObj = { title: album.title, artist: album.artist };

      localStorage.setItem("prevSelectedAlbum", JSON.stringify(albumObj));

      const selectedCard = document.querySelector(".card-selected");
      if (selectedCard) {
        selectedCard.classList.remove("card-selected");
      }

      event.currentTarget.classList.add("card-selected");
    };
    // fine della logica di click sulla card

    // logica di pre-selezione di una card a partire dal dato salvato nel localStorage
    const lastSelectedAlbumStr = localStorage.getItem("prevSelectedAlbum");

    if (lastSelectedAlbumStr) {
      const parsedAlbum = JSON.parse(lastSelectedAlbumStr);

      if (parsedAlbum.title === album.title) {
        card.classList.add("card-selected");
      }
    }

    // la card viene inserita nel DOM dopo aver ricevuto tutte le modifiche
    col.appendChild(card);
    content.appendChild(col);
  });
});
