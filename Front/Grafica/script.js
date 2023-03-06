const pruebaDatos = [
  {
    x: [5, 10],
    y: "tarea1",
    backgroundColor: "rgba(255, 26, 104, 0.2)",
    borderColor: "rgba(255, 26, 104, 1)",
  },
  {
    x: [15, 20],
    y: "tarea1",
    backgroundColor: "rgba(255, 26, 104, 0.2)",
    borderColor: "rgba(255, 26, 104, 1)",
  },
  {
    x: [25, 30],
    y: "tarea2",
    backgroundColor: "rgba(255, 159, 64, 0.2)",
    borderColor: "rgba(255, 159, 64, 1)",
  },
  {
    x: [5, 10],
    y: "tarea3",
    backgroundColor: "rgba(255, 26, 104, 0.2)",
    borderColor: "rgba(255, 26, 104, 1)",
  },
  {
    x: [15, 20],
    y: "tarea4",
    backgroundColor: "rgba(255, 26, 104, 0.2)",
    borderColor: "rgba(255, 26, 104, 1)",
  },
  {
    x: [25, 30],
    y: "tarea5",
    backgroundColor: "rgba(255, 159, 64, 0.2)",
    borderColor: "rgba(255, 159, 64, 1)",
  },
];

const data = {
  datasets: pruebaDatos.map((proceso) => {
    return {
      label: proceso.y,
      data: [
        {
          x: proceso.x,
          y: proceso.y,
          label: proceso.y,
        },
      ],

      backgroundColor: proceso.backgroundColor,
      borderColor: proceso.borderColor,
      borderWidth: 1,
      borderSkipped: false,
    };
  }),
};

// config
const config = {
  type: "bar",
  data,
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
    plugins: {
      tooltip: {
        // enabled: false,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);
