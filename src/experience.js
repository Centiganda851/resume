const oneBtn = document.querySelector('.blocks.one');
const twoBtn = document.querySelector('.blocks.two');
const threeBtn = document.querySelector('.blocks.three');
const fourBtn = document.querySelector('.blocks.four');
const fiveBtn = document.querySelector('.blocks.five');
const sixBtn = document.querySelector('.blocks.six');
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
let isAnimating = false; // Track animation state

function reset() {
    backgroundGrey.style.opacity = '0';backgroundText.style.opacity = '0';borderText.style.opacity = '0';
    middleCam = false;
    setTimeout(() => {
		oneBtn.style.top = '35%';oneBtn.style.left = '25%';
		twoBtn.style.top = '35%';twoBtn.style.left = '50%';
		threeBtn.style.top = "35%";threeBtn.style.left = "75%";
		fourBtn.style.top = "75%";fourBtn.style.left = "25%";
		fiveBtn.style.top = "75%";fiveBtn.style.left = "50%";
	    	sixBtn.style.top = "75%";sixBtn.style.left = "75%";
    }, 500);
    setTimeout(() => {
        backgroundGrey.style.display = 'none';backgroundText.style.display = 'none';borderText.style.display = 'none';backgroundText.innerHTML = '';
        oneBtn.style.zIndex = '1';twoBtn.style.zIndex = '1';threeBtn.style.zIndex = '1';fourBtn.style.zIndex = '1';fiveBtn.style.zIndex = '1';sixBtn.style.zIndex = '1';
        isAnimating = false;
    }, 2500);
}
function dontclick() {
    if (isAnimating) return; // Prevent further clicks during animation
    isAnimating = true;
}
backgroundGrey.addEventListener('click', () => {reset();});

function firstclick() {
	middleCam = true;
    backgroundText.style.display = 'block';backgroundGrey.style.display = 'block';borderText.style.display = 'block';
	setTimeout(() => {backgroundGrey.style.opacity = '1',borderText.style.opacity = '1';}, 100);
	setTimeout(() => {isAnimating = false, backgroundText.style.opacity = '1';}, 100);
}
oneBtn.addEventListener('click', () => {
	dontclick();
	if (!middleCam) {
	backgroundText.innerHTML = '<p>An internship at H+M allowed me to design the electrical layouts for distribution centers and heavy industrial factories. Tasks included creating one line diagrams, making models in revit and the layouts of lights and receptacles.<br><br><br><br><br><br></p>'
	oneBtn.style.top = '50%';oneBtn.style.zIndex = '3';	oneBtn.style.left = '20%';
	firstclick();
} else if (middleCam){reset();}});
twoBtn.addEventListener('click', () => {
	dontclick()
	if (!middleCam) {
	backgroundText.innerHTML = '<p>iQuHack was my first ever hackathon, and it was quantum. My team designed an algorithm for QuantumRings through Qbraid to enable the efficient factorization of large semiprime numbers.<br><br><br><br><br><br></p>';
	twoBtn.style.top = '50%';twoBtn.style.zIndex = '3';twoBtn.style.left = '20%';
	firstclick();
	} else {reset();}});

threeBtn.addEventListener('click', () => {
	dontclick()
	if (!middleCam) {
		backgroundText.innerHTML = '<p>Client support at the Union University library. Aided with finding resources, answering questions and solving any problems that came up.<br><br><br><br><br><br></p>';
		threeBtn.style.top = '25%';threeBtn.style.zIndex = '3';
		firstclick();
	} else {reset();}});

fourBtn.addEventListener('click', () => {
	dontclick()
	if (!middleCam) {
		backgroundText.innerHTML = '<p>Scorpius Pharmacy with Hakim Kizito and Maureen Birungi. PHP<br><br><br><br><br><br><br><br></p>';
		fourBtn.style.zIndex = '3';fourBtn.style.top = "50%";fourBtn.style.left = "80%";
		firstclick();
	} else {reset();}});

fiveBtn.addEventListener('click', () => {
	dontclick()
	if (!middleCam) {
		backgroundText.innerHTML = '<p>Qubit by Qubit summer camp 2021: Set up by IBM quantum, studied under Dr. Akshay Agarwal and Dr. Giselle Fontes Evilsizer<br></p>';
		fiveBtn.style.zIndex = '3';fiveBtn.style.top = "50%";fiveBtn.style.left = "80%";
		firstclick();
	} else {reset();}});
sixBtn.addEventListener('click', () => {
	dontclick()
	if (!middleCam) {
		backgroundText.innerHTML = '<p>Summer internship 2021: Aga Khan Development Network IT Department<br>Supervisors:<br> 1. Sanjeeb Mohanty<br> 2. Eduardo Nhancale <br> 3. Alex Oyugi <br>Understanding what makes a campus area network including company emails, <br>configuring "Bring your own devices", secure wifi, linking audio system, <br>fibre optic cables , server maintenance. Quote from Mr. Alex:<br> "Always innovate in this industry. Keep refreshing yourself to be relevant each <br>day."<br></p>';
		sixBtn.style.zIndex = '3';sixBtn.style.top = "50%";sixBtn.style.left = "80%";
		firstclick();
	} else {reset();}});
