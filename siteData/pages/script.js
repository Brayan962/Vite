window.addEventListener("DOMContentLoaded", () => {
  const fuente = document.getElementById("plantilla-computadoras").innerHTML;
  const plantilla = Handlebars.compile(fuente);

  const contexto = { computadoras };
  const html = plantilla(contexto);

  document.getElementById("tablaContainer").innerHTML = html;
});
