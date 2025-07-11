const buttons = [
  {
    selector: '.blocks.one',
    text: 'An internship at H+M allowed me to design the electrical layouts for distribution centers and heavy industrial factories. Tasks included creating one line diagrams, making models in Revit and the layouts of lights and receptacles.',
    top: '50%',
    left: '20%'
  },
  {
    selector: '.blocks.two',
    text: 'iQuHack was my first ever hackathon. My team designed an algorithm for QuantumRings through Qbraid to enable the efficient factorization of large semiprime numbers.',
    top: '25%'
  },
  {
    selector: '.blocks.three',
    text: 'Client support at the Union University library. Aided with finding resources, answering questions and solving any problems that came up.',
    top: '50%',
    left: '80%'
  },
  {
    selector: '.blocks.four',
    text: 'Designed a PHP-based website for monitoring inventory, employees and sales for Scorpius Pharmacy.',
    top: '50%',
    left: '20%'
  },
  {
    selector: '.blocks.five',
    text: 'Set up by IBM Quantum in partnership with others, I navigated through a quantum computer with Dr. Akshay Agarwal and Dr. Giselle Fontes Evilsizer, learning about qubits, gates and algorithms.',
    top: '85%'
  },
  {
    selector: '.blocks.six',
    text: 'Summer internship 2021 at the Aga Khan Development Network IT Department learning about campus networks, secure wifi and server maintenance.',
    top: '50%',
    left: '80%'
  }
];

const backgroundGrey = document.createElement('div');
const backgroundText = document.createElement('div');
const borderText = document.createElement('div');
backgroundGrey.className = 'grey';
document.body.appendChild(backgroundGrey);
borderText.className = 'border';
document.body.appendChild(borderText);
backgroundText.className = 'text';
borderText.appendChild(backgroundText);

let middleCam = false;
let isAnimating = false;

function reset() {
  backgroundGrey.style.opacity = '0';
  backgroundText.style.opacity = '0';
  borderText.style.opacity = '0';
  middleCam = false;
  setTimeout(() => {
    buttons[0].el.style.top = '35%';
    buttons[0].el.style.left = '25%';
    buttons[1].el.style.top = '35%';
    buttons[1].el.style.left = '50%';
    buttons[2].el.style.top = '35%';
    buttons[2].el.style.left = '75%';
    buttons[3].el.style.top = '75%';
    buttons[3].el.style.left = '25%';
    buttons[4].el.style.top = '75%';
    buttons[4].el.style.left = '50%';
    buttons[5].el.style.top = '75%';
    buttons[5].el.style.left = '75%';
  }, 500);
  setTimeout(() => {
    backgroundGrey.style.display = 'none';
    backgroundText.style.display = 'none';
    borderText.style.display = 'none';
    backgroundText.innerHTML = '';
    buttons.forEach(b => (b.el.style.zIndex = '1'));
    isAnimating = false;
  }, 2500);
}

backgroundGrey.addEventListener('click', reset);

function firstclick() {
  middleCam = true;
  backgroundText.style.display = 'block';
  backgroundGrey.style.display = 'block';
  borderText.style.display = 'block';
  setTimeout(() => {
    backgroundGrey.style.opacity = '1';
    borderText.style.opacity = '1';
  }, 100);
  setTimeout(() => {
    isAnimating = false;
    backgroundText.style.opacity = '1';
  }, 100);
}

function dontclick() {
  if (isAnimating) return true;
  isAnimating = true;
  return false;
}

function registerJob(job, index) {
  job.el = document.querySelector(job.selector);
  job.el.addEventListener('click', () => {
    if (dontclick()) return;
    if (!middleCam) {
      backgroundText.innerHTML = `<p>${job.text}</p>`;
      job.el.style.zIndex = '3';
      if (job.top) job.el.style.top = job.top;
      if (job.left) job.el.style.left = job.left;
      firstclick();
    } else {
      reset();
    }
  });
}

buttons.forEach(registerJob);
