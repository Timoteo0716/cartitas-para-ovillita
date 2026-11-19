const START_DATE = "2026-11-19"; // Fecha de inicio: 19 de noviembre de 2026
// Vista de prueba: añade ?preview=1 a la URL para desbloquear las 30 cartas.
const PREVIEW_MODE = new URLSearchParams(window.location.search).get("preview") === "1";
const letters = [
  ["Para empezar bonito", "Ovi, quería regalarte algo que no se terminara en un solo momento. Por eso hice estas cartitas: para que durante treinta días encuentres un pequeño recordatorio de lo importante que eres para mí. No tienen que ser perfectas; lo que quiero es que cada una te haga sentir querida."],
  ["Una de mis alegrías", "Mi amor, entre tantas cosas que pasan en un día, hablar contigo puede convertirse en uno de mis momentos favoritos. Me gusta saber cómo estás, escuchar tus ocurrencias y compartir hasta las cosas más sencillas. A veces la felicidad se parece mucho a eso."],
  ["Admiro tu forma de ser", "Admiro que tengas tu propia manera de ver las cosas, tus ideas, tus esfuerzos y esa personalidad que te hace ser tú. No quiero quererte solo en los días fáciles; también quiero aprender a comprenderte y acompañarte cuando algo te pese."],
  ["Un recuerdo que guardo", "Codecaminosh, hay momentos pequeños que se quedan viviendo en la memoria. Como aquel día de los trampolines: la diversión, las risas y esa sensación de estar creando un recuerdo juntos. Ojalá sigamos sumando muchos momentos así."],
  ["Gracias por confiar", "Gracias por compartir conmigo tus pensamientos, tus alegrías y también tus preocupaciones. Sé que la confianza se cuida con hechos, no solo con palabras. Quiero ser alguien con quien puedas hablar con tranquilidad y sentirte escuchada."],
  ["Tu sonrisa", "Me gusta verte sonreír, especialmente cuando algo te emociona de verdad. No quiero que sientas que tienes que estar feliz todo el tiempo conmigo. También puedes tener días cansados, estar seria o necesitar espacio. Quiero acompañarte de verdad."],
  ["Pequeños detalles", "No siempre hacen falta grandes planes. Un mensaje inesperado, una conversación tranquila, caminar juntos o compartir algo que nos dio risa también construye una relación bonita. Quiero seguir aprendiendo a valorar esos detalles contigo."],
  ["Elegir hacerlo mejor", "Sé que querer a alguien también implica reconocer los errores y cambiar. No quiero prometerte que nunca me equivocaré; quiero esforzarme por ser honesto, escuchar antes de defenderme y demostrar con acciones que tomo en serio lo que sientes."],
  ["Un equipo", "Me gusta pensar que podemos ser un equipo: no dos personas que siempre piensan igual, sino dos que aprenden a hablar, ceder cuando corresponde y resolver las cosas con respeto. Quiero que cuidemos ese compañerismo."],
  ["Tu esfuerzo cuenta", "Espero que hoy recuerdes que tus esfuerzos tienen valor, incluso cuando nadie los ve. No tienes que demostrar que puedes con todo. Estoy aquí para animarte, celebrar tus avances y recordarte que descansar también está bien."],
  ["Lo que deseo para nosotros", "Deseo que nuestra relación nos ayude a ser mejores personas: más pacientes, más sinceros, más considerados y más cercanos a Jehová. Que el cariño nunca nos haga descuidar lo que es correcto, sino que nos motive a hacer las cosas bien."],
  ["Una conversación pendiente", "Quiero que nunca tengamos miedo de conversar con sinceridad. Puede que a veces no encuentre las palabras perfectas, pero quiero aprender a expresarme mejor y, sobre todo, a escucharte sin minimizar lo que sientes."],
  ["Un futuro con propósito", "Cuando pienso en el futuro, me ilusiona imaginar una vida sencilla pero con propósito: un hogar tranquilo, metas compartidas, apoyo mutuo y Jehová en el centro. No se construye de golpe; se prepara desde las decisiones que tomamos hoy."],
  ["Me haces pensar", "Conocerte también me ha hecho reflexionar sobre mis propias actitudes. Una relación bonita no consiste en que una persona cambie a la otra, sino en que ambos tengamos la humildad de crecer y mejorar sin dejar de ser nosotros mismos."],
  ["Un día difícil", "Si hoy no fue tu mejor día, esta cartita es para recordarte que no tienes que resolverlo todo ahora. Respira, date un momento y ve paso a paso. Tu valor no depende de cuánto hayas logrado hoy."],
  ["Gracias por las risas", "Code code, gracias por esas conversaciones que empiezan hablando de cualquier cosa y terminan haciéndonos reír. Me encanta que podamos disfrutar de lo simple. Quiero que nunca perdamos esa capacidad de encontrar alegría en los pequeños momentos."],
  ["Respeto y cuidado", "Quiero que te sientas respetada conmigo: en tus decisiones, tus límites, tus tiempos y tus sentimientos. El cariño verdadero no presiona ni exige; escucha, considera y cuida. Esa es la clase de amor que quiero seguir construyendo."],
  ["Una oración especial", "Hoy quiero pedirle a Jehová que nos ayude a tener sabiduría, paciencia y un corazón dispuesto a hacer lo correcto. Que nunca pongamos nuestra relación por encima de nuestra amistad con él, y que aprendamos a animarnos espiritualmente."],
  ["Tus metas", "Quiero conocer más de tus sueños y ver cómo puedo apoyarte de una manera útil, no solo diciendo que creo en ti. Me gustaría celebrar tus avances, ayudarte a pensar cuando lo necesites y respetar también el camino que quieras seguir."],
  ["No estás sola", "Cuando algo te preocupe, no tienes que fingir que todo está bien. Puedo escucharte, aunque no siempre tenga una solución inmediata. A veces acompañar significa simplemente estar presente y no apresurarse a dar consejos."],
  ["Lo cotidiano también es amor", "El amor también se nota en cumplir lo que uno dice, avisar cuando algo cambia, hablar con respeto y cuidar los detalles. Quiero que lo nuestro se sostenga en esas acciones cotidianas, no solamente en momentos especiales."],
  ["Una cita sencilla", "Me gustaría que sigamos teniendo citas sencillas: conversar sin apuro, caminar, probar algo rico o descubrir un lugar nuevo. No importa tanto el plan como la oportunidad de compartir tiempo de calidad y estar atentos el uno al otro."],
  ["Tu manera de animar", "Hay palabras tuyas que se me quedan dando vueltas y me animan más de lo que imaginas. Gracias por las veces que me has impulsado, por tu compañía y por compartir conmigo partes de tu mundo."],
  ["Aprender a perdonar", "Ninguno de los dos es perfecto. Si alguna vez nos lastimamos, quiero que sepamos reconocerlo con humildad, pedir perdón sin excusas y trabajar para que no se repita. La confianza se reconstruye con paciencia y coherencia."],
  ["Un hogar en paz", "Me ilusiona la idea de un hogar donde podamos hablar con calma, reír mucho, apoyarnos en las responsabilidades y servir a Jehová juntos. Un hogar no se vuelve bonito por tener cosas caras, sino por el ambiente que construyen quienes viven en él."],
  ["Me importa tu tranquilidad", "No quiero que sientas que debes adivinar lo que pienso ni cargar con dudas innecesarias. Quiero ser más claro, transparente y constante. Tu tranquilidad importa, y sé que también depende de cómo actúe yo."],
  ["Gracias por ser tú", "No quiero convertirte en una versión distinta de ti. Me gusta seguir conociéndote tal como eres, con tus fortalezas, tus gustos y tus cosas por aprender. Espero darte el mismo espacio para crecer y ser auténtica."],
  ["Lo que estamos construyendo", "Lo bonito no es solamente decir que tenemos un futuro; es prepararlo con decisiones responsables hoy. Quiero que sigamos fortaleciendo nuestra comunicación, nuestra espiritualidad y la confianza, sin correr ni saltarnos etapas."],
  ["Casi al final", "Si llegaste hasta aquí, quiero que sepas que cada cartita fue una excusa para recordarte algo que a veces la rutina deja en segundo plano: te amo y valoro lo que estamos construyendo. Gracias por formar parte de mis días."],
  ["La última… por ahora", "Treinta días, treinta pequeñas pausas para decirte que eres importante para mí. No quiero que esto se quede en una página bonita: quiero que se note en cómo te trato, cómo te escucho y cómo cuido nuestra relación. Que sigamos creciendo con amor, respeto y Jehová guiando nuestros pasos. Gracias por estos días. Y que vengan muchos momentos más. ♡"]
];

const calendar = document.getElementById("calendar");
const modal = document.getElementById("letter-modal");
const toast = document.getElementById("toast");
let activeDay = 0;
let toastTimer;
const READ_STORAGE_KEY = "ovillito-cartitas-leidas-v1";
const readLetters = new Set();

try {
  const savedReadLetters = JSON.parse(localStorage.getItem(READ_STORAGE_KEY) || "[]");
  if (Array.isArray(savedReadLetters)) {
    savedReadLetters.forEach(day => {
      if (Number.isInteger(day) && day >= 1 && day <= 30) readLetters.add(day);
    });
  }
} catch {
  // Si el navegador no permite almacenamiento, el contador funciona durante esta visita.
}

function markLetterAsRead(day) {
  if (readLetters.has(day)) return;
  readLetters.add(day);
  try {
    localStorage.setItem(READ_STORAGE_KEY, JSON.stringify([...readLetters]));
  } catch {
    // El estado seguirá actualizado mientras la página permanezca abierta.
  }
  updateReadingProgress();
  renderCalendar();
}

function updateReadingProgress() {
  const readCount = readLetters.size;
  const remaining = Math.max(0, 30 - readCount);
  document.getElementById("progress-label").textContent =
    `${remaining} ${remaining === 1 ? "por leer" : "por leer"}`;
  document.getElementById("progress-fill").style.width = `${(readCount / 30) * 100}%`;
}

function dateOnlyLocal(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function getUnlockedCount() {
  if (PREVIEW_MODE) return 30;
  const [y,m,d] = START_DATE.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  const today = dateOnlyLocal(new Date());
  const diff = Math.floor((today - start) / 86400000);
  return Math.max(0, Math.min(30, diff + 1));
}
function renderCalendar() {
  const unlocked = getUnlockedCount();
  calendar.innerHTML = "";
  letters.forEach(([title], index) => {
    const day = index + 1;
    const isOpen = day <= unlocked;
    const isToday = day === unlocked && unlocked > 0;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-card ${isOpen ? "opened" : "locked"} ${isToday ? "today" : ""}`;
    button.disabled = !isOpen;
    button.setAttribute("aria-label", isOpen ? `Abrir cartita ${day}: ${title}` : `Cartita ${day} bloqueada`);
    button.innerHTML = `<span class="day-icon">${isOpen ? (readLetters.has(day) ? "✓" : "✉") : "🔒"}</span><span class="day-number">${String(day).padStart(2,"0")}</span><span class="day-caption">${isOpen ? (readLetters.has(day) ? "Leída" : (isToday ? "La de hoy" : "Disponible")) : "Próximamente"}</span>`;
    if (isOpen) button.addEventListener("click", () => openLetter(day));
    calendar.appendChild(button);
  });
  updateReadingProgress();
  const start = new Date(2026, 10, 19);
  document.getElementById("date-label").textContent = PREVIEW_MODE ? "VISTA DE PRUEBA · 30 CARTITAS DISPONIBLES" : "Del 19 de noviembre al 18 de diciembre";
}
function openLetter(day) {
  activeDay = day;
  markLetterAsRead(day);
  const [title, message] = letters[day - 1];
  document.getElementById("letter-day").textContent = `CARTITA ${String(day).padStart(2,"0")} · DÍA ${day}`;
  document.getElementById("letter-title").textContent = title;
  document.getElementById("letter-message").textContent = message;
  modal.hidden = false;
  document.getElementById("close-modal").focus();
  document.body.style.overflow = "hidden";
}
function closeLetter() {
  modal.hidden = true;
  document.body.style.overflow = "";
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
document.getElementById("close-modal").addEventListener("click", closeLetter);
document.getElementById("done-button").addEventListener("click", () => {
  closeLetter();
  showToast("Ojalá esta cartita te haya sacado una sonrisa ♡");
});
modal.addEventListener("click", event => { if (event.target === modal) closeLetter(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !modal.hidden) closeLetter(); });

const audio = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");
musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicButton.textContent = "Ⅱ Pausar";
    } catch {
      showToast("Añade tu canción como assets/cancion.mp3 para activar la música.");
    }
  } else {
    audio.pause();
    musicButton.textContent = "▶ Escuchar";
  }
});
audio.addEventListener("ended", () => musicButton.textContent = "▶ Escuchar");
renderCalendar();
