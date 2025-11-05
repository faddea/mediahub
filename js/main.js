const catalogo = [
  { titulo: "Interstellar", tipo: "pelicula", imagen: "/img/interstellar.jpg" },
  { titulo: "Breaking Bad", tipo: "serie", imagen: "/img/breakingbad.jpg" },
  { titulo: "God of War", tipo: "juego", imagen: "/img/godofwar.jpg" },
  { titulo: "The Batman", tipo: "pelicula", imagen: "/img/batman.jpg" },
  { titulo: "Stranger Things", tipo: "serie", imagen: "/img/strangerthings.jpg" },
  { titulo: "Red Dead Redemption 2", tipo: "juego", imagen: "/img/rdr2.jpg" },
  { titulo: "Inception", tipo: "pelicula", imagen: "/img/inception.jpg" },
  { titulo: "The Witcher", tipo: "serie", imagen: "/img/witcher.jpg" },
];

const catalogoCont = document.getElementById("catalogo");
const tendenciasCont = document.getElementById("tendencias");
const botones = document.querySelectorAll(".filtro");

function renderCatalogo(filtro = "todo") {
  catalogoCont.innerHTML = "";
  const filtrados = filtro === "todo" ? catalogo : catalogo.filter(i => i.tipo === filtro);
  
  filtrados.forEach(item => {
    const card = document.createElement("div");
    card.className = "min-w-[220px] bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform";
    card.innerHTML = `
      <img src="${item.imagen}" alt="${item.titulo}" class="h-56 w-full object-cover">
      <div class="p-3">
        <h4 class="font-semibold text-lg">${item.titulo}</h4>
        <p class="text-sm text-gray-400 capitalize">${item.tipo}</p>
      </div>`;
    catalogoCont.appendChild(card);
  });

  gsap.from(catalogoCont.children, {opacity: 0, y: 30, stagger: 0.1, duration: 0.5});
}

function renderTendencias() {
  tendenciasCont.innerHTML = "";
  catalogo.slice(0, 5).forEach(item => {
    const card = document.createElement("div");
    card.className = "min-w-[220px] bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform";
    card.innerHTML = `
      <img src="${item.imagen}" alt="${item.titulo}" class="h-56 w-full object-cover">
      <div class="p-3">
        <h4 class="font-semibold text-lg">${item.titulo}</h4>
        <p class="text-sm text-gray-400 capitalize">${item.tipo}</p>
      </div>`;
    tendenciasCont.appendChild(card);
  });
}

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    botones.forEach(b => b.classList.remove("text-indigo-400"));
    btn.classList.add("text-indigo-400");
    renderCatalogo(btn.dataset.tipo);
  });
});

renderCatalogo();
renderTendencias();
gsap.from(".filtro", {opacity: 0, y: -20, stagger: 0.1});
gsap.from("section", {opacity: 0, y: 30, duration: 1, delay: 0.5});
