const progressBar = document.querySelector('#scroll-progress-bar');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

const updateProgress = () => {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
