// Escribe el subtítulo como “máquina de escribir”
const subtitle = document.getElementById('subtitle');
const text = 'Todo gira en torno a dientes: cepillo, hilo dental y muchas sonrisas.';
let i = 0;
function typeNext() {
  subtitle.textContent = text.slice(0, i++);
  if (i <= text.length) requestAnimationFrame(() => setTimeout(typeNext, 18));
}
typeNext();

// Interacciones
const forgiveBtn = document.getElementById('forgive');
const brushBtn   = document.getElementById('brush');
const card       = document.getElementById('card');
const confetti   = document.getElementById('confetti');

// Guiñar ojo del diente al pedir perdón
const eyeL = document.getElementById('eyeL');
const eyeR = document.getElementById('eyeR');
function wink(){
  eyeL.style.animation = 'wink 0.6s ease-in-out 1';
  eyeR.style.animation = 'wink 0.6s ease-in-out 1';
  setTimeout(()=>{ eyeL.style.animation = ''; eyeR.style.animation = ''; }, 650);
}

// Confetti dental
function launchConfetti(n = 40, speed = 2.2){
  const symbols = ['🦷','✨','🧼','🪥','🫧','💙'];
  for (let k = 0; k < n; k++){
    const span = document.createElement('span');
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.position = 'absolute';
    span.style.left = Math.random()*100 + 'vw';
    span.style.top = '-10px';
    span.style.transform = `rotate(${Math.random()*360}deg)`;
    span.style.animation = `fall ${speed + Math.random()*1.8}s linear forwards`;
    confetti.appendChild(span);
    setTimeout(()=> span.remove(), 4000);
  }
}

forgiveBtn.addEventListener('click', () => {
  if (card.hasAttribute('hidden')) card.removeAttribute('hidden');
  launchConfetti(60, 1.8);
  wink();
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

brushBtn.addEventListener('click', () => {
  card.classList.remove('brushed'); // reinicia la animación
  void card.offsetWidth;            // reflow para permitir reinicio
  card.classList.add('brushed');
  launchConfetti(24, 2.4);
});

// Bonus: confetti suave al hacer hover sobre el diente
document.getElementById('tooth').addEventListener('mouseenter', () => launchConfetti(8, 3));
