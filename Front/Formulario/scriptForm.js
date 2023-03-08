const form = document.querySelector("form");
const procesosDiv = document.querySelector("#procesos");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Recopilar información de quantum
  const quantum = document.querySelector("#quantum").value;

  // Recopilar información de procesos
  const procesos = [];
  const numProcesos = document.querySelector("#num_procesos").value;

  for (let i = 1; i <= numProcesos; i++) {
    const nombre = document.querySelector(`#nombre_${i}`).value;
    const borderColor = document.querySelector(`#color_${i}`).value;
    const backgroundColor = disminuirOpacidad(borderColor);
    const duracion = document.querySelector(`#duracion_${i}`).value;

    const proceso = { nombre, borderColor, backgroundColor, duracion };
    procesos.push(proceso);
  }

  const data = { quantum, procesos };

  // Enviar datos
  console.log(data);


  fetch('http://127.0.0.1:8000/roundRobin/process_algorithm',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then(response => response.json())
  .then(data => {
    sessionStorage.setItem("data_to_draw", JSON.stringify(data));
    form.reset();
    procesosDiv.innerHTML = "";
    //redireccionar a la pagina de grafica
    location.href = "../Grafica/grafica.html";
  })
});

// Agregar campos de proceso dinámicamente
const numProcesosInput = document.querySelector("#num_procesos");
numProcesosInput.addEventListener("input", () => {
  procesosDiv.innerHTML = "";

  for (let i = 1; i <= numProcesosInput.value; i++) {
    const procesoDiv = document.createElement("div");
    procesoDiv.innerHTML = `
    <h3>Proceso ${i}</h3>
    <div class="proceso-inputs">
      <div class="input-container">
        <label for="nombre_${i}">Nombre:</label>
        <input type="text" id="nombre_${i}" name="nombre_${i}" required>
      </div>
      <div class="input-container">
        <label for="color_${i}">Color RGB:</label>
        <input type="color" id="color_${i}" name="color_${i}" required>
      </div>
      <div class="input-container">
        <label for="duracion_${i}">Duración:</label>
        <input type="number" id="duracion_${i}" name="duracion_${i}" required>
      </div>
    </div>
    <br>
  `;
    procesosDiv.appendChild(procesoDiv);
  }
});

function disminuirOpacidad(hexColor) {
  // Convertir el color hexadecimal a RGB
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  // Devolver el mismo color con una opacidad del 20%
  return `rgba(${r}, ${g}, ${b}, 0.2)`;
}

