// socialMedia.js

// Tu token de acceso de Instagram
const accessToken =
  "IGQWRNdjFYN25ESTJ2cm80bDRZALUJtNEtkWUNxRHJ5UzFOUFNkbDJFNVExUW0zM2pGTldjNHprSk5scHozSjZAHT1BIa3JfSDR5WkNkLWRObEJzOTJMNVZAHbF9mTU1BYjJmOWhibU93d0FxLW9fSnJoeGhZAYkVNSU0ZD";

// URL para obtener los últimos Reels
const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`;

// Obtener los Reels desde Instagram
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const reelsContainer = document.getElementById("instagram-reels-feed");

    // Filtrar y ordenar los Reels por fecha (del más reciente al más antiguo)
    const sortedReels = data.data
      .filter((post) => post.media_type === "VIDEO")
      .sort((a, b) => b.timestamp.localeCompare(a.timestamp));

    // Mostrar los videos uno por uno en bucle
    function playNextVideo(currentIndex) {
      if (currentIndex >= sortedReels.length) {
        currentIndex = 0; // Volver al primer video al final
      }

      const video = document.createElement("video");
      video.src = sortedReels[currentIndex].media_url;
      video.autoplay = true;
      video.alt = sortedReels[currentIndex].caption || "Reel de Instagram";
      video.style.maxHeight = "100%"; // Ajusta la altura del video
      video.style.objectFit = "cover"; // Ajusta el video al tamaño del contenedor sin deformarlo
      reelsContainer.appendChild(video);

      video.addEventListener("ended", () => {
        video.style.display = "none"; // Ocultar el video actual
        playNextVideo(currentIndex + 1); // Reproducir el siguiente video en bucle
      });
    }

    // Comenzar la reproducción desde el primer video
    playNextVideo(0);
  })
  .catch((error) => {
    console.error("Error al obtener los Reels:", error);
    // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
  });
