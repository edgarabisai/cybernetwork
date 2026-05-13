/* =====================================================
BANCO DE PREGUNTAS Y PISTAS
===================================================== */
const devices = [

/* ======================================================
   DISPOSITIVOS DE RED
====================================================== */

{
category:"Dispositivos de Red",
name:"Router",
image:"img/router.png",
clues:[
"Distribuyo internet a una red local.",
"Puedo asignar direcciones IP.",
"Conecto redes diferentes."
]
},

{
category:"Dispositivos de Red",
name:"Switch",
image:"img/switch.png",
clues:[
"Tengo muchos puertos Ethernet.",
"Trabajo en redes LAN.",
"Conecto dispositivos cableados."
]
},

{
category:"Dispositivos de Red",
name:"Hub",
image:"img/hub.png",
clues:[
"Soy un dispositivo antiguo.",
"Repito información a todos los puertos.",
"No administro tráfico inteligentemente."
]
},

{
category:"Dispositivos de Red",
name:"Módem",
image:"img/modem.png",
clues:[
"Me conecto al proveedor de internet.",
"Transformo señales.",
"Soy el acceso inicial a internet."
]
},

{
category:"Dispositivos de Red",
name:"Firewall",
image:"img/firewall.png",
clues:[
"Protejo redes.",
"Bloqueo tráfico sospechoso.",
"Soy una barrera de seguridad."
]
},

{
category:"Dispositivos de Red",
name:"Bridge",
image:"img/bridge.png",
clues:[
"Uno segmentos de red.",
"Filtro tráfico usando MAC.",
"Soy un puente de red."
]
},

{
category:"Dispositivos de Red",
name:"Gateway",
image:"img/gateway.png",
clues:[
"Permito comunicación entre redes distintas.",
"Soy una puerta de enlace.",
"Frecuentemente dirijo hacia internet."
]
},

{
category:"Dispositivos de Red",
name:"Proxy",
image:"img/proxy.png",
clues:[
"Actúo como intermediario.",
"Puedo filtrar navegación web.",
"Ayudo con privacidad."
]
},

{
category:"Dispositivos de Red",
name:"IDS",
image:"img/ids.png",
clues:[
"Detecto intrusiones.",
"Analizo tráfico sospechoso.",
"Soy un sistema de seguridad."
]
},

{
category:"Dispositivos de Red",
name:"IPS",
image:"img/ips.png",
clues:[
"Prevengo intrusiones.",
"Puedo bloquear ataques.",
"Trabajo junto a firewalls."
]
},

{
category:"Dispositivos de Red",
name:"Balanceador de Carga",
image:"img/loadbalancer.png",
clues:[
"Distribuyo tráfico.",
"Evito saturación de servidores.",
"Me usan en redes empresariales."
]
},

{
category:"Dispositivos de Red",
name:"Conversor de Medios",
image:"img/media.png",
clues:[
"Transformo tipos de conexión.",
"Puedo convertir cobre a fibra.",
"Trabajo con distintos medios."
]
},

{
category:"Dispositivos de Red",
name:"PoE Injector",
image:"img/poeinjector.png",
clues:[
"Envio energía por Ethernet.",
"Alimento cámaras o AP.",
"Combino datos y corriente."
]
},

{
category:"Dispositivos de Red",
name:"Controlador WLAN",
image:"img/wlancontroller.png",
clues:[
"Administro puntos de acceso.",
"Centralizo configuraciones WiFi.",
"Soy común en empresas."
]
},

/* ======================================================
   CABLEADO Y MEDIOS
====================================================== */

{
category:"Cableado y Medios",
name:"Cable UTP",
image:"img/utp.png",
clues:[
"Transmito datos.",
"Uso conectores RJ45.",
"Soy un cable de cobre."
]
},

{
category:"Cableado y Medios",
name:"Pinza Ponchadora",
image:"img/crimping-tool.png",
clues:[
"Soy una pinza usada en redes.",
"Me aprietas con la mano para trabajar.",
"Sirvo para poner conectores en cables."
]
},

{
category:"Cableado y Medios",
name:"Pela Cables",
image:"img/pelacables.png",
clues:[
"Quito la cubierta de cables UTP.",
"No corto, solo pelo cables.",
"Soy util para armar cables."
]
},

{
category:"Cableado y Medios",
name:"Tester",
image:"img/cable-tester.png",
clues:[
"Reviso si un cable funciona bien.",
"Indico fallas con luces.",
"Soy clave para probar redes."
]
},

{
category:"Cableado y Medios",
name:"Cable STP",
image:"img/stp.png",
clues:[
"Tengo blindaje.",
"Reduzco interferencias.",
"Soy un cable protegido."
]
},

{
category:"Cableado y Medios",
name:"Cable FTP",
image:"img/ftp.png",
clues:[
"Tengo protección metálica.",
"Reduzco ruido electromagnético.",
"Soy similar al UTP."
]
},

{
category:"Cableado y Medios",
name:"Fibra Óptica",
image:"img/fibra.png",
clues:[
"Transmito datos mediante luz.",
"Soy muy rápida.",
"No utilizo cobre."
]
},

{
category:"Cableado y Medios",
name:"Cable Coaxial",
image:"img/coaxial.png",
clues:[
"Tengo núcleo central.",
"También se usa en TV.",
"Fui muy usado antiguamente."
]
},

{
category:"Cableado y Medios",
name:"Patch Cord",
image:"img/patchcord.png",
clues:[
"Soy un cable corto.",
"Conecto equipos en racks.",
"Tengo conectores RJ45."
]
},

{
category:"Cableado y Medios",
name:"Conector RJ45",
image:"img/rj45.png",
clues:[
"Tengo 8 pines.",
"Soy transparente.",
"Me usan en Ethernet."
]
},

{
category:"Cableado y Medios",
name:"Conector RJ11",
image:"img/rj11.png",
clues:[
"Soy más pequeño que RJ45.",
"Trabajo con telefonía.",
"Tengo menos pines."
]
},

{
category:"Cableado y Medios",
name:"Patch Panel",
image:"img/patchpanel.png",
clues:[
"Organizo conexiones.",
"Estoy en racks.",
"Administro cableado."
]
},

{
category:"Cableado y Medios",
name:"Keystone",
image:"img/keystone.png",
clues:[
"Me instalan en placas.",
"Recibo conectores RJ45.",
"Soy modular."
]
},

{
category:"Cableado y Medios",
name:"Canaleta",
image:"img/canaleta.png",
clues:[
"Organizo cables.",
"Protejo cableado.",
"Voy sobre paredes."
]
},

{
category:"Cableado y Medios",
name:"Charola",
image:"img/charola.png",
clues:[
"Soporto cableado.",
"Estoy en techos.",
"Organizo grandes cantidades de cables."
]
},

/* ======================================================
   REDES INALÁMBRICAS
====================================================== */

{
category:"Redes Inalambricas",
name:"Access Point",
image:"img/accesspoint.png",
clues:[
"Proporciono WiFi.",
"Extiendo redes inalámbricas.",
"Soy un punto de acceso."
]
},

{
category:"Redes Inalambricas",
name:"Repetidor WiFi",
image:"img/repetidor.png",
clues:[
"Amplio cobertura inalámbrica.",
"Repito señal.",
"Elimino zonas muertas."
]
},

{
category:"Redes Inalambricas",
name:"Router Inalámbrico",
image:"img/routerwifi.png",
clues:[
"Tengo antenas.",
"Combino router y WiFi.",
"Soy común en casas."
]
},

{
category:"Redes Inalambricas",
name:"Bluetooth",
image:"img/bluetooth.png",
clues:[
"Soy inalámbrico de corto alcance.",
"Conecto periféricos.",
"No uso cables."
]
},

{
category:"Redes Inalambricas",
name:"Zigbee",
image:"img/zigbee.png",
clues:[
"Trabajo en IoT.",
"Consumo poca energía.",
"Soy inalámbrico."
]
},

{
category:"Redes Inalambricas",
name:"NFC",
image:"img/nfc.png",
clues:[
"Trabajo a muy corta distancia.",
"Sirvo para pagos.",
"Me usan celulares."
]
},

{
category:"Redes Inalambricas",
name:"WiFi 5",
image:"img/wifi5.png",
clues:[
"Trabajo bajo estándar 802.11ac.",
"Soy inalámbrico.",
"Soy más rápido que WiFi 4."
]
},

{
category:"Redes Inalambricas",
name:"WiFi 6",
image:"img/wifi6.png",
clues:[
"Trabajo bajo estándar 802.11ax.",
"Soy muy rápido.",
"Me usan redes modernas."
]
},

{
category:"Redes Inalambricas",
name:"Antena Omnidireccional",
image:"img/omni.png",
clues:[
"Transmito en todas direcciones.",
"Trabajo con WiFi.",
"Soy común en routers."
]
},

{
category:"Redes Inalambricas",
name:"Antena Direccional",
image:"img/direccional.png",
clues:[
"Envío señal hacia una dirección específica.",
"Trabajo en enlaces.",
"Tengo largo alcance."
]
},

{
category:"Redes Inalambricas",
name:"Mesh WiFi",
image:"img/mesh.png",
clues:[
"Trabajo con múltiples nodos.",
"Amplio cobertura inalámbrica.",
"Creo redes malladas."
]
},

/* ======================================================
   EQUIPOS EMPRESARIALES
====================================================== */

{
category:"Equipos Empresariales",
name:"Rack",
image:"img/rack.png",
clues:[
"Organizo equipos.",
"Soy metálico.",
"Contengo switches y servidores."
]
},

{
category:"Equipos Empresariales",
name:"UPS",
image:"img/ups.png",
clues:[
"Doy energía de respaldo.",
"Protejo contra apagones.",
"Tengo baterías."
]
},

{
category:"Equipos Empresariales",
name:"Servidor",
image:"img/server.png",
clues:[
"Ofrezco servicios.",
"Puedo almacenar archivos.",
"Muchos clientes dependen de mí."
]
},

{
category:"Equipos Empresariales",
name:"NAS",
image:"img/nas.png",
clues:[
"Sirvo para almacenamiento en red.",
"Comparto archivos.",
"Mi nombre significa almacenamiento conectado."
]
},

{
category:"Equipos Empresariales",
name:"Cámara IP",
image:"img/camaraip.png",
clues:[
"Transmito video por red.",
"Puedo usar PoE.",
"Sirvo para vigilancia."
]
},

{
category:"Equipos Empresariales",
name:"Impresora de Red",
image:"img/printer.png",
clues:[
"Imprimo mediante red.",
"Puedo tener IP.",
"Muchos usuarios me comparten."
]
},

{
category:"Equipos Empresariales",
name:"SITE",
image:"img/site.png",
clues:[
"Soy un cuarto especializado.",
"Contengo equipos de telecomunicaciones.",
"Centralizo conexiones."
]
},

{
category:"Equipos Empresariales",
name:"Cableado Horizontal",
image:"img/horizontal.png",
clues:[
"Voy desde telecomunicaciones hasta usuarios.",
"Trabajo en un mismo piso.",
"Soy parte del cableado estructurado."
]
},

{
category:"Equipos Empresariales",
name:"Cableado Vertical",
image:"img/vertical.png",
clues:[
"Conecto diferentes pisos.",
"También me llaman backbone vertical.",
"Uno áreas de telecomunicaciones."
]
},

{
category:"Equipos Empresariales",
name:"Backbone",
image:"img/backbone.png",
clues:[
"Soy la columna principal de una red.",
"Transporto grandes cantidades de tráfico.",
"Conecto segmentos importantes."
]
},

/* ======================================================
   CONCEPTOS
====================================================== */

{
category:"Conceptos",
name:"LAN",
image:"img/lan.png",
clues:[
"Soy una red local.",
"Trabajo en espacios pequeños.",
"Conecto dispositivos cercanos."
]
},

{
category:"Conceptos",
name:"WAN",
image:"img/wan.png",
clues:[
"Conecto grandes distancias.",
"Uno múltiples redes.",
"Internet es un ejemplo."
]
},

{
category:"Conceptos",
name:"MAN",
image:"img/man.png",
clues:[
"Cubro ciudades.",
"Estoy entre LAN y WAN.",
"Conecto múltiples edificios."
]
},

{
category:"Conceptos",
name:"Dirección IP",
image:"img/ip.png",
clues:[
"Identifico dispositivos.",
"Tengo números separados por puntos.",
"Trabajo en redes."
]
},

{
category:"Conceptos",
name:"Dirección MAC",
image:"img/mac.png",
clues:[
"Soy física y única.",
"Identifico tarjetas de red.",
"Trabajo en capa 2."
]
},

{
category:"Conceptos",
name:"VLAN",
image:"img/vlan.png",
clues:[
"Segmento redes lógicamente.",
"Trabajo en switches.",
"Me usan para separar tráfico."
]
},

{
category:"Conceptos",
name:"Topología Estrella",
image:"img/star.png",
clues:[
"Todos dependen de un nodo central.",
"Soy muy común en LAN.",
"Uso switches frecuentemente."
]
},

{
category:"Conceptos",
name:"Topología Bus",
image:"img/bus.png",
clues:[
"Todos comparten un mismo cable.",
"Soy antigua.",
"Tengo un troncal principal."
]
},

{
category:"Conceptos",
name:"Topología Malla",
image:"img/mesh2.png",
clues:[
"Todos pueden conectarse entre sí.",
"Tengo alta redundancia.",
"Soy muy resistente."
]
},

{
category:"Conceptos",
name:"Topología Anillo",
image:"img/ring.png",
clues:[
"Los nodos forman un círculo.",
"Cada equipo conecta con dos vecinos.",
"Trabajo en forma circular."
]
},

{
category:"Conceptos",
name:"Topología Doble Anillo",
image:"img/doblering.png",
clues:[
"Tengo redundancia circular.",
"Uso dos anillos.",
"Aumento tolerancia a fallos."
]
},

{
category:"Conceptos",
name:"Topología Árbol",
image:"img/tree.png",
clues:[
"Tengo estructura jerárquica.",
"Parecido a ramas.",
"Combino varias estrellas."
]
},

{
category:"Conceptos",
name:"Topología Híbrida",
image:"img/hybrid.png",
clues:[
"Combino varias topologías.",
"Soy flexible.",
"Me usan grandes redes."
]
},

{
category:"Conceptos",
name:"Topología P2P",
image:"img/p2p.png",
clues:[
"No necesito servidor central.",
"Los equipos comparten directamente.",
"Significa peer to peer."
]
},

{
category:"Conceptos",
name:"DNS",
image:"img/dns.png",
clues:[
"Traduzco dominios.",
"Convierto nombres a IP.",
"Evito memorizar números."
]
},

{
category:"Conceptos",
name:"DHCP",
image:"img/dhcp.png",
clues:[
"Asigno IP automáticamente.",
"Evito configuración manual.",
"Trabajo en redes."
]
},

{
category:"Conceptos",
name:"VPN",
image:"img/vpn.png",
clues:[
"Creo conexiones seguras.",
"Cifro información.",
"Trabajo a distancia."
]
}

];


/* =====================================================
   INSERTA AQUÍ TU ARREGLO "devices"
===================================================== */



/* ==========================================
   CONFIGURACIÓN
========================================== */

const TOTAL_QUESTIONS = 40;

/* ==========================================
   ELEMENTOS HTML
========================================== */

const hintText =
document.getElementById("hintText");

const deviceImage =
document.getElementById("deviceImage");

const nextHintBtn =
document.getElementById("nextHintBtn");

const feedback =
document.getElementById("feedback");

const scoreText =
document.getElementById("score");

const energyText =
document.getElementById("energyText");

const energyFill =
document.getElementById("energyFill");

const timerText =
document.getElementById("timer");

const startBtn =
document.getElementById("startBtn");

const categoryText =
document.getElementById("categoryText");

const optionsContainer =
document.getElementById("optionsContainer");

const rankText =
document.getElementById("rankText");

const comboBox =
document.getElementById("comboBox");

const progressFill =
document.getElementById("progressFill");

const progressText =
document.getElementById("progressText");

const summaryContainer =
document.getElementById("summaryContainer");

/* ==========================================
   SONIDOS
========================================== */

const correctSound =
document.getElementById("correctSound");

const wrongSound =
document.getElementById("wrongSound");

const comboSound =
document.getElementById("comboSound");

const bgMusic = 
document.getElementById("bgMusic");

bgMusic.volume = 0.2;

/* ==========================================
   VARIABLES
========================================== */

let currentDevice;

let currentHint = 0;

let score = 0;

let energy = 100;

let combo = 0;

let maxCombo = 0;

let answeredQuestions = 0;

let timer;

let timeLeft = 60;

let totalTimeRemaining = 0;

let gameStarted = false;

let results = [];

/* ==========================================
   INICIAR JUEGO
========================================== */

function startGame(){

  score = 0;

  energy = 100;

  combo = 0;

  maxCombo = 0;

  answeredQuestions = 0;

  totalTimeRemaining = 0;

  results = [];

  gameStarted = true;

  scoreText.textContent = score;

  comboBox.textContent =
  "🔥 COMBO x0";

  summaryContainer.innerHTML = "";

  startBtn.style.display = "none";

  updateEnergyBar();

  updateProgress();

  updateRank();

  nextQuestion();

 bgMusic.play();
}

/* ==========================================
   SIGUIENTE PREGUNTA
========================================== */

function nextQuestion(){

  if(answeredQuestions >= TOTAL_QUESTIONS){

    finishGame();

    return;
  }

  clearInterval(timer);

  feedback.textContent = "";

  currentHint = 0;

  currentDevice =
  devices[
    Math.floor(
      Math.random() * devices.length
    )
  ];

  shuffleArray(currentDevice.clues);

  categoryText.textContent =
  currentDevice.category;

  hintText.textContent =
  currentDevice.clues[currentHint];

  deviceImage.src =
  currentDevice.image;

  deviceImage.className =
  "blur-heavy";

  generateOptions();

  updateProgress();

  resetTimer();
}

/* ==========================================
   GENERAR OPCIONES
========================================== */

function generateOptions(){

  optionsContainer.innerHTML = "";

  let options = [
    currentDevice.name
  ];

  while(options.length < 3){

    let randomName =
    devices[
      Math.floor(
        Math.random() * devices.length
      )
    ].name;

    if(!options.includes(randomName)){

      options.push(randomName);
    }
  }

  shuffleArray(options);

  options.forEach(option=>{

    const button =
    document.createElement("button");

    button.classList.add("option-btn");

    button.textContent = option;

    button.addEventListener("click",()=>{

      checkAnswer(option);

    });

    optionsContainer.appendChild(button);

  });
}

/* ==========================================
   MULTIPLICADOR ENERGÍA
========================================== */

function getEnergyMultiplier(){

  if(energy >= 80){

    return 2;
  }

  if(energy >= 60){

    return 1.5;
  }

  if(energy >= 40){

    return 1;
  }

  if(energy >= 20){

    return 0.7;
  }

  return 0.5;
}

/* ==========================================
   TIEMPO SEGÚN ENERGÍA
========================================== */

function getTimeByEnergy(){

  if(energy >= 80){

    return 60;
  }

  if(energy >= 60){

    return 50;
  }

  if(energy >= 40){

    return 40;
  }

  if(energy >= 20){

    return 30;
  }

  return 20;
}

/* ==========================================
   VALIDAR RESPUESTA
========================================== */

function checkAnswer(answer){

  answeredQuestions++;

  totalTimeRemaining += timeLeft;

  if(answer === currentDevice.name){

    correctSound.play();

    combo++;

    if(combo > 10){

      combo = 10;
    }
    if(combo > maxCombo){

      maxCombo = combo;
    }

    comboBox.classList.remove(
    "combo-animate"
    );

    void comboBox.offsetWidth;

    comboBox.classList.add(
    "combo-animate"
    );

    if(combo >= 3){

      comboSound.play();
    }

    let basePoints = 50;

    if(currentHint === 1){

      basePoints = 20;
    }

    if(currentHint === 2){

      basePoints = 10;
    }

    const energyMultiplier =
    getEnergyMultiplier();

    let finalPoints =
    basePoints *
    combo *
    energyMultiplier;

    finalPoints =
    Math.floor(finalPoints);

    score += finalPoints;

    energy += 5;

    if(energy > 100){

      energy = 100;
    }

    feedback.innerHTML =
    `
    ✔ Correcto<br>
    +${finalPoints} puntos<br>
    ⚡ Multiplicador x${energyMultiplier}
    `;

    feedback.className =
    "feedback correct";

    results.push({

      question:
      currentDevice.name,

      correct:true,

      answer:answer

    });

  }else{

    wrongSound.play();

    combo = 0;

    energy -= 15;

    if(energy < 0){

      energy = 0;
    }

    feedback.innerHTML =
    `
    ✖ Incorrecto<br>
    Era ${currentDevice.name}
    `;

    feedback.className =
    "feedback incorrect";

    results.push({

      question:
      currentDevice.name,

      correct:false,

      answer:answer

    });
  }

  updateStats();

  setTimeout(()=>{

    nextQuestion();

  },2000);
}

/* ==========================================
   ESTADÍSTICAS
========================================== */

function updateStats(){

  scoreText.textContent = score;

  comboBox.textContent =
  `🔥 COMBO x${combo}`;

  updateEnergyBar();

  updateRank();
}

/* ==========================================
   BARRA ENERGÍA
========================================== */

function updateEnergyBar(){

  energyText.textContent =
  energy + "%";

  energyFill.style.width =
  energy + "%";

  energyFill.classList.remove(
    "energy-high",
    "energy-medium",
    "energy-low"
  );

  if(energy >= 60){

    energyFill.classList.add(
      "energy-high"
    );

  }else if(energy >= 30){

    energyFill.classList.add(
      "energy-medium"
    );

  }else{

    energyFill.classList.add(
      "energy-low"
    );
  }
}

/* ==========================================
   RANGOS
========================================== */

function updateRank(){

  const percentage =
  Math.floor(
    (
      score /
      (TOTAL_QUESTIONS * 100)
    ) * 100
  );

  let rank = "Aprendiz";

  if(percentage >= 90){

    rank =
    "Ingeniero Maestro";

  }else if(percentage >= 75){

    rank =
    "Administrador de Red";

  }else if(percentage >= 60){

    rank =
    "Técnico de Redes";

  }else if(percentage >= 40){

    rank =
    "Técnico Jr";
  }

  rankText.textContent = rank;
}

/* ==========================================
   SIGUIENTE PISTA
========================================== */

function showNextHint(){

  if(
    currentHint <
    currentDevice.clues.length - 1
  ){

    currentHint++;

    hintText.textContent =
    currentDevice.clues[currentHint];

    if(currentHint === 1){

      deviceImage.className =
      "blur-medium";
    }

    if(currentHint === 2){

      deviceImage.className =
      "blur-none";
    }
  }
}

/* ==========================================
   TEMPORIZADOR
========================================== */

function resetTimer(){

  clearInterval(timer);

  timeLeft =
  getTimeByEnergy();

  timerText.textContent =
  timeLeft;

  timer = setInterval(()=>{

    timeLeft--;

    timerText.textContent =
    timeLeft;

    if(timeLeft <= 0){

      clearInterval(timer);

      answeredQuestions++;

      combo = 0;

      energy -= 15;

      if(energy < 0){

        energy = 0;
      }

      feedback.innerHTML =
      `
      ⏰ Tiempo agotado<br>
      Era ${currentDevice.name}
      `;

      feedback.className =
      "feedback incorrect";

      results.push({

        question:
        currentDevice.name,

        correct:false,

        answer:"Sin respuesta"

      });

      updateStats();

      setTimeout(()=>{

        nextQuestion();

      },2000);
    }

  },1000);
}

/* ==========================================
   BARRA PROGRESO
========================================== */

function updateProgress(){

  progressText.textContent =
  `Pregunta ${answeredQuestions + 1} / ${TOTAL_QUESTIONS}`;

  const progress =
  (
    answeredQuestions /
    TOTAL_QUESTIONS
  ) * 100;

  progressFill.style.width =
  progress + "%";
}

/* ==========================================
   BONUS PUNTAJE
========================================== */

function getScoreBonus(){

  if(score >= 30000){

    return 5;
  }

  if(score >= 15000){

    return 3;
  }

  if(score >= 8500){

    return 2;
  }

  if(score >= 5000){

    return 1;
  }

  return 0;
}

/* ==========================================
   BONUS ENERGÍA
========================================== */

function getEnergyBonus(){

  if(energy >= 85){

    return 3;
  }

  if(energy >= 60){

    return 2;
  }

  if(energy >= 30){

    return 1;
  }

  return 0;
}

/* ==========================================
   BONUS COMBO
========================================== */

function getComboBonus(){

  if(maxCombo >= 8){

    return 4;
  }

  if(maxCombo >= 5){

    return 3;
  }

  if(maxCombo >= 3){

    return 2;
  }

  return 1;
}

/* ==========================================
   BONUS TIEMPO
========================================== */

function getTimeBonus(){

  const averageTime =
  totalTimeRemaining /
  TOTAL_QUESTIONS;

  if(averageTime >= 35){

    return 2;
  }

  if(averageTime >= 20){

    return 1;
  }

  return 0;
}

/* ==========================================
   FINALIZAR EXAMEN
========================================== */

function finishGame(){

  clearInterval(timer);

  gameStarted = false;

  const correctAnswers =
  results.filter(
    result => result.correct
  ).length;

  const basePercentage =
  Math.floor(
    (
      correctAnswers /
      TOTAL_QUESTIONS
    ) * 100
  );

  const scoreBonus =
  getScoreBonus();

  const energyBonus =
  getEnergyBonus();

  const comboBonus =
  getComboBonus();

  const timeBonus =
  getTimeBonus();

  let finalGrade =
  basePercentage +
  scoreBonus +
  energyBonus +
  comboBonus +
  timeBonus;

  if(finalGrade > 100){

    finalGrade = 100;
  }

  feedback.innerHTML =
  `
  EXAMEN FINALIZADO<br><br>

  🎯 Base Académica:
  ${basePercentage}%<br>

  🏆 Bonus Puntaje:
  +${scoreBonus}<br>

  ⚡ Bonus Energía:
  +${energyBonus}<br>

  🔥 Bonus Combo:
  +${comboBonus}<br>

  ⏱ Bonus Tiempo:
  +${timeBonus}<br><br>

  🧠 CALIFICACIÓN FINAL:
  ${finalGrade}%<br><br>

  🎮 Puntaje Gamer:
  ${score}
  `;

  summaryContainer.innerHTML =
  `
  <h2>
    Retroalimentación Final
  </h2>
  `;

  results.forEach(result=>{

    const div =
    document.createElement("div");

    div.classList.add("summary-card");

    div.innerHTML =
    `
    <h3>
      ${result.question}
    </h3>

    <p class="${
      result.correct
      ? "correct-answer"
      : "wrong-answer"
    }">

    ${
      result.correct
      ? "✔ Correcta"
      : "✖ Incorrecta"
    }

    </p>

    <p>
      Respuesta:
      ${result.answer}
    </p>
    `;

    summaryContainer.appendChild(div);

  });

  startBtn.style.display =
  "block";

  startBtn.textContent =
  "REINICIAR";
}

/* ==========================================
   ALEATORIZAR
========================================== */

function shuffleArray(array){

  for(
    let i = array.length - 1;
    i > 0;
    i--
  ){

    const j =
    Math.floor(
      Math.random() * (i + 1)
    );

    [
      array[i],
      array[j]
    ] = [
      array[j],
      array[i]
    ];
  }
}

/* ==========================================
   EVENTOS
========================================== */

nextHintBtn.addEventListener(
  "click",
  showNextHint
);

startBtn.addEventListener(
  "click",
  startGame
);


