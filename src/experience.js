const buttons = [
  {
    selector: '.blocks.one',
    text: 'During my internship at H+M, I designed electrical layouts for large distribution centers and industrial facilities, producing one-line diagrams, Revit models, and detailed lighting and receptacle plans.',
    top: '50%',
    left: '20%'
  },
  {
    selector: '.blocks.two',
    text: 'At iQuHack, my first hackathon, my team built a quantum algorithm for QuantumRings using Qbraid, aimed at efficiently factoring large semiprime numbers through hybrid quantum-classical methods. We ultimately managed to factor the number 143.',
    top: '25%'
  },
  {
    selector: '.blocks.three',
    text: 'Provided client support at Union University Library, assisting patrons in locating academic resources, answering research-related questions, and resolving technical or access issues promptly and professionally.',
    top: '50%',
    left: '80%'
  },
  {
    selector: '.blocks.four',
    text: 'Developed a dynamic PHP-based web application for Scorpius Pharmacy to monitor inventory, track employee activity, and manage sales data, improving efficiency and real-time business oversight.',
    top: '50%',
    left: '20%'
  },
  {
    selector: '.blocks.five',
    text: 'Participated in an IBM Quantum program led by Dr. Akshay Agarwal and Dr. Giselle Fontes Evilsizer, exploring quantum computing fundamentals, including qubits, quantum gates, and core computational algorithms such as Shor, Grover and Deutsch-Jozsa.',
    top: '85%'
  },
  {
    selector: '.blocks.six',
    text: 'Completed a 2021 summer internship with the Aga Khan Development Network IT Department, gaining hands-on experience in campus network configuration, secure Wi-Fi implementation, and server maintenance operations.',
    top: '50%',
    left: '80%'
  },
  {
    selector: '.blocks.seven',
    text: 'Participated in a second quantum hackathon focused on leveraging quantum computing to train machine learning models capable of classifying tic-tac-toe outcomes—identifying wins, losses, and draws with 52% accuracy.',
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
