// Fonction pour créer une ligne de code avec un mot spécifié
function createCodeLine(word) {
  const codeLine = document.createElement("div");
  codeLine.classList.add("code-rain");
  codeLine.style.left = `${Math.random() * 100}%`; // Position horizontale aléatoire
  codeLine.textContent = word; // Mot spécifié
  return codeLine;
}

// Fonction pour faire tomber les lignes de code
function animateCodeLines() {
  const matrixWallpaper = document.getElementById("matrix-wallpaper");
  const windowHeight = window.innerHeight;
  const phrase =
    "je suis Souad BENHABBOUR et je recherche un poste comme développeuse web et mobile";
  const words = phrase.split(" ");
  let index = 0;

  setInterval(() => {
    const word = words[index % words.length];
    const codeLine = createCodeLine(word);
    matrixWallpaper.appendChild(codeLine);

    // Supprimer les lignes de code qui sortent de l'écran
    const codeLines = document.querySelectorAll(".code-rain");
    codeLines.forEach((line) => {
      const top = parseInt(line.style.top, 10);
      if (top > windowHeight) {
        matrixWallpaper.removeChild(line);
      }
    });

    index++;
  }, 100); // Vitesse de création des lignes (en millisecondes)
}

// Démarrer l'animation
animateCodeLines();
