const buttons = [
  {
    selector: '.blocks.PhD',
    text: 'Joined the Tucker Research Group at Clemson University to study quantum applications within industrial optimization, which are widely recognized as a very promising area for quantum research that would allow for faster iteration.',
  },
  {
    selector: '.blocks.HM',
    text: 'During my internship at H+M, I designed electrical layouts for large distribution centers and industrial facilities, producing one-line diagrams, Revit models, and detailed lighting and receptacle plans.',
  },
  {
    selector: '.blocks.IQ26',
    text: 'Returning to iQuHack was a very different hacker. This time, the challenge was to invesitigate qubit entanglement with bell pairs competitively and I contributed circuit expertise. https://github.com/fwilhelmy/mit-iquhack-2026.git',
  },
  {
    selector: '.blocks.IQ25',
    text: 'At iQuHack, my first hackathon, my team built a quantum algorithm for QuantumRings using Qbraid, aimed at efficiently factoring large semiprime numbers through hybrid quantum-classical methods. We ultimately managed to factor the number 143. https://github.com/Centiganda851/2025-Quantum-Factorization-With-Quantum-Rings.git',
  },
  {
    selector: '.blocks.Logos',
    text: 'Provided client support at Union University Library, assisting patrons in locating academic resources, answering research-related questions, and resolving technical or access issues promptly and professionally.',
  },
  {
    selector: '.blocks.CAS',
    text: 'Was a peer tutor, encouraging others studiying Physics and engineering and encouraging problem-solving approaches for people new to the fields.',
  },
  {
    selector: '.blocks.ScP',
    text: 'Developed a dynamic PHP-based web application for Scorpius Pharmacy to monitor inventory, track employee activity, and manage sales data, improving efficiency and real-time business oversight.',
  },
  {
    selector: '.blocks.QxQ',
    text: 'Participated in an IBM Quantum program led by Dr. Akshay Agarwal and Dr. Giselle Fontes Evilsizer, exploring quantum computing fundamentals, including qubits, quantum gates, and core computational algorithms such as Shor, Grover and Deutsch-Jozsa.',
  },
  {
    selector: '.blocks.AF',
    text: 'Completed a 2021 summer internship with the Aga Khan Development Network IT Department, gaining hands-on experience in campus network configuration, secure Wi-Fi implementation, and server maintenance operations.',
  },
  {
    selector: '.blocks.SC25',
    text: 'Participated in a second quantum hackathon focused on leveraging quantum computing to train machine learning models capable of classifying tic-tac-toe outcomes—identifying wins, losses, and draws with 52% accuracy. https://github.com/Centiganda851/SC-Quant.git',
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
