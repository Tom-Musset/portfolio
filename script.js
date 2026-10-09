// Menu de navigation pour les petits écrans.

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("#nav");

// On vérifie que les éléments du menu existent avant d'ajouter les événements.
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    // aria-expanded indique aux technologies d'assistance si le menu est ouvert.
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    const shouldOpen = !isExpanded;

    menuButton.setAttribute("aria-expanded", String(shouldOpen));
    navigation.classList.toggle("open", shouldOpen);
  });

  // Sur mobile, cliquer sur un lien ferme le menu après la navigation.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("open");
    });
  });
}
